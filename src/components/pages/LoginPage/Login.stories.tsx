import type { Meta, StoryObj } from "@storybook/react";
import LoginPage from "./Login";
import LoginPageTmp from "../../Templates/LoginPageTmp/LoginPageTmp";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "Pages/LoginPage",
  component: LoginPage,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  argTypes: {},
} satisfies Meta<typeof LoginPageTmp>;

export default meta;

type Story = StoryObj<typeof LoginPageTmp>;

export const Default: Story = {
  render: () => (
    // 対象のコンポーネントでuseNavigateを使っているなら<BrowserRouter>で囲わないとエラーになる
    <BrowserRouter>
      {/* 対象のコンポーネントでReduxを使っているなら<Provider>で囲わないとエラーになる */}
      <Provider store={store}>
        <LoginPage />
      </Provider>
    </BrowserRouter>
  ),
};
