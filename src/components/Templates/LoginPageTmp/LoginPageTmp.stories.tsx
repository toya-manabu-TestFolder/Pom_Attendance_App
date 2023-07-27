import type { Meta, StoryObj } from "@storybook/react";
import LoginPageTmp from "./LoginPageTmp";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "Temlates/LoginPageTmp",
  component: LoginPageTmp,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  argTypes: {},
} satisfies Meta<typeof LoginPageTmp>;

export default meta;

export const Default = {
  render: () => (
    <Provider store={store}>
      <BrowserRouter>
        <LoginPageTmp LoginError={false} />
      </BrowserRouter>
    </Provider>
  ),
};
export const Error = {
  render: () => (
    <Provider store={store}>
      <BrowserRouter>
        <LoginPageTmp LoginError={true} />
      </BrowserRouter>
    </Provider>
  ),
};
