import type { Meta, StoryObj } from "@storybook/react";
import CompletRegistPageTmp from "./CompletRegistPageTmp";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "Templates/CompletRegistPageTmp ",
  component: CompletRegistPageTmp,
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
} satisfies Meta<typeof CompletRegistPageTmp>;

export default meta;

type Story = StoryObj<typeof CompletRegistPageTmp>;

export const Default: Story = {
  args: {},
};
