// import { render, screen, cleanup } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";
// import { setupServer } from "msw/node";
// import { rest } from "msw";
// import InputConfirmationPage from "../components/pages/InputConfirmationPage/InputConfirmationPage";
// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import confirmationSlice from "../features/confirmationSlice";

// const mockNavigate = vi.fn();
// vi.mock("react-router-dom", async () => {
//   const actual: any = await vi.importActual("react-router-dom");
//   return {
//     ...actual,
//     useNavigate: () => mockNavigate,
//   };
// });

// const handlers = [
//   rest.post("http://localhost:3000/registarApi/regist", (_, res, ctx) => {
//     return res(ctx.json(201));
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

// describe("InputConfirmationPage Test Cases", () => {
//   let store: any;
//   afterEach(() => {
//     vi.clearAllMocks();
//   });
//   beforeEach(() => {
//     store = configureStore({
//       reducer: {
//         confirmation: confirmationSlice,
//       },
//     });
//   });

//   it("Move to CompletRegistPage", async () => {
//     render(
//       <Provider store={store}>
//         <InputConfirmationPage />
//       </Provider>
//     );
//     await user.click(screen.getByTestId("submit-button"));
//     expect(mockNavigate).toBeCalledWith("/CompletRegist");
//     expect(mockNavigate).toBeCalledTimes(1);
//   });
//   it("Error Move to CompletRegistPage", async () => {
//     server.use(
//       rest.post("http://localhost:3000/registarApi/regist", (_, res, ctx) => {
//         return res(ctx.json("Network Error"));
//       })
//     );
//     render(
//       <Provider store={store}>
//         <InputConfirmationPage />
//       </Provider>
//     );
//     expect(screen.getByTestId("error")).toHaveTextContent("");
//     await user.click(screen.getByTestId("submit-button"));
//     expect(screen.getByTestId("error")).toHaveTextContent(
//       "登録が失敗しました。ネットワーク状況をご確認ください。"
//     );
//     expect(mockNavigate).toBeCalledTimes(0);
//   });
//   it("Move to RegiChangeRegistData", async () => {
//     render(
//       <Provider store={store}>
//         <InputConfirmationPage />
//       </Provider>
//     );
//     expect(screen.getByTestId("change-button")).toBeTruthy;
//     await user.click(screen.getByTestId("change-button"));
//     expect(mockNavigate).toBeCalledWith("/registar");
//     expect(mockNavigate).toBeCalledTimes(1);
//   });
// });
