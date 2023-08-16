// import React from "react";
// ↓renderでHTMLを読み込み。renderのHTMlがscreenに入る。
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
// ↓ユーザーの動作をシュミレーションするもの。
import userEvent from "@testing-library/user-event";
// ↓モックサーバーウォーカーでREST_APIを定義して、CRUD操作を使う。
import { rest } from "msw";
// ↓mswで使うサーバーをセットアップする。
import { setupServer } from "msw/node";
////////////////////////////////////////
// ↓Reduxをテストで使うために一式呼び出す。
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import Login from "../components/pages/LoginPage/Login";
// ---------------------↓ダミーを実施するための関数。
const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual: any = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

// APIのエンドポイントにアクセスした挙動をモックする。
const handlers = [
  rest.post("http://localhost:3000/authApi/", (_, res, ctx) => {
    return res(ctx.status(200));
  }),
];

const server = setupServer(...handlers);
const user = userEvent.setup();

// ↓desctibe毎に一度実行させるコールバック関数
beforeAll(() => {
  // ↓mswのserverを開始させる。
  server.listen();
});
// ↓各テストケースが完了すると毎回実行する。
afterEach(() => {
  // ↓各テストで副作用を起こさないように、serverをリセットしている。
  server.resetHandlers();
  cleanup();
});
// ↓すべてのテストが終了したら一度だけ実行させる。
afterAll(() => {
  // ↓mswのserverを終了させる。
  server.close();
});

describe("LoginPage Test Cases", () => {
  let store: any;
  // モックの履歴をリセットする。
  afterEach(() => {
    vi.clearAllMocks();
  });
  // ↓各テスト終了毎にテスト用のreduxストアを作る。
  beforeEach(() => {
    store = configureStore({
      reducer: {
        auth: authSlice,
      },
    });
  });

  it("1 :Should render all the elements correctly", async () => {
    // ↓render()の引数でHTML要素を呼び出す。
    render(
      <Provider store={store}>
        <Login />
      </Provider>
      // ↓Reduxを動かすためにProviderで上のstoreを使えるようにする。
    );
    // ↓screenに上のrender()で読み取ったHTMLが入ってる。
    // ↓debug()でscreenの中身を見れる。
    // screen.debug();

    // ↓getByTestIdでdeta-testidを指定して、.toBeTruthy()で要素があるかテストする。
    expect(screen.getByTestId("auth-email")).toBeTruthy();
    expect(screen.getByTestId("auth-pass")).toBeTruthy();
    expect(screen.getByTestId("login-Button")).toBeTruthy();
    expect(screen.getByTestId("regist-Button")).toBeTruthy();
    // // ↓getByRoleでbuttonが1つであるかテストする。
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
    // getAttribute("type")で要素のtypeを取得できる。
    expect(screen.getByTestId("auth-email")).toHaveAttribute("type", "email");
    expect(screen.getByTestId("auth-pass")).toHaveAttribute("type", "password");
  });
  it("2 :login successful", async () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    expect(screen.getByTestId("login-Button")).toHaveTextContent("ログイン");
    await user.click(screen.getByTestId("login-Button"));
    await waitFor(() => {
      expect(mockNavigate).toBeCalledWith("/registar");
    });
    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });
  it("3 :Should not route to MainPage when login is failed", async () => {
    // server.useで定義したpostメソッドを一時的に変更する。
    // 変更はこのit内のみで有効なので、終わったらリセットされる。
    server.use(
      rest.post("http://localhost:3000/authApi/", (_, res, ctx) => {
        return res(ctx.status(400));
      })
    );
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    await user.click(screen.getByTestId("login-Button"));
    expect(
      // getAllやfindAllは配列で返すから、toBeInTheDocumentで評価できない。
      await screen.findAllByText("ログイン情報が間違っています！！")
    ).toHaveLength(2);

    expect(mockNavigate).toHaveBeenCalledTimes(0);
  });
  it("4 :Click regist-button to RegistarInputPage", async () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    await user.click(screen.getByTestId("regist-Button"));
    expect(mockNavigate).toBeCalledWith("/registar");
    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });
});
