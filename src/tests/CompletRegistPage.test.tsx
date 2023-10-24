// import { render, screen, cleanup } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";
// import { setupServer } from "msw/node";
// import { rest } from "msw";
// import CompletRegistPage from "../components/pages/CompletRegistPage/CompletRegistPage";
// import { describe } from "vitest";

// const mockNavigate = vi.fn();
// vi.mock("react-router-dom", async () => {
//   const actual: any = await vi.importActual("react-router-dom");
//   return {
//     ...actual,
//     useNavigate: () => mockNavigate,
//   };
// });

// const handlers = [
//   rest.post("http://localhost:3000/authApi/", (_, res, ctx) => {
//     return res(ctx.status(200));
//   }),
// ];

// const server = setupServer(...handlers);
// const user = userEvent.setup();

// beforeAll(() => {
//   server.listen();
// });
// afterEach(() => {
//   server.resetHandlers();
//   cleanup();
// });
// afterAll(() => {
//   server.close();
// });

// describe("CompletRegistPage Test Cases", () => {
//   afterEach(() => {
//     vi.clearAllMocks();
//   });
//   it("1 :Should render all the elements correctly", async () => {
//     render(<CompletRegistPage />);
//     const Title = screen.getByTestId("title");
//     expect(Title).toBeTruthy();
//     expect(Title).toHaveTextContent("会員登録が完了しました！！");
//     expect(
//       screen.getByText(
//         "下記のメールアドレスに確認メールを送信しました。下記のログインボタンまたはメールのログインURLよりログインしてください。"
//       )
//     ).toBeInTheDocument();
//     const Button = screen.getByTestId("button");
//     expect(Button).toBeTruthy();
//     expect(Button).toHaveTextContent("ログインページへ");
//   });
//   it("2 :Move to LoginPage ", async () => {
//     render(<CompletRegistPage />);
//     await user.click(screen.getByTestId("button"));
//     expect(mockNavigate).toBeCalledWith("/");
//     expect(mockNavigate).toBeCalledTimes(1);
//   });
// });
