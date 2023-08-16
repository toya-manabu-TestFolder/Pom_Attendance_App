import {
  render,
  screen,
  cleanup,
  //   waitFor,
  //   getByTestId,
} from "@testing-library/react";
import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import registarSlice from "../features/registarSlice";
import RegistarInputPage from "../components/pages/RegistarInputPage/RegistarInput";
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
// const user = userEvent.setup();

beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => {
  server.close();
});

describe("LoginPage Test Cases", () => {
  let store: any;
  afterEach(() => {
    vi.clearAllMocks();
  });
  beforeEach(() => {
    store = configureStore({
      reducer: {
        registar: registarSlice,
      },
    });
  });
  it("1 :Should render all the elements correctly", async () => {
    render(
      <Provider store={store}>
        <RegistarInputPage />
      </Provider>
    );
    expect(screen.getByTestId("regist-title")).toHaveTextContent(
      "新規会員登録"
    );
    const registInputArr = screen.getAllByTestId("regist-input");
    expect(registInputArr).toHaveLength(7);
    expect(screen.getByTestId("regist-button")).toBeTruthy();
  });
});
