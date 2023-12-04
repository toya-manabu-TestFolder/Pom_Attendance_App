import type { Meta } from "@storybook/react";
import LoginPageTmp from "./LoginPageTmp";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "Templates/LoginPageTmp",
  component: LoginPageTmp,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </Provider>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof LoginPageTmp>;

export default meta;

export const Default = {
  args: {},
};
