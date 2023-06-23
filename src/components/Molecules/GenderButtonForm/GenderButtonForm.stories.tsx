import type { Meta, StoryObj } from "@storybook/react";
import GenderButtonForm from "./GenderButtonForm";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "Molecules/GenderButtonForm",
  component: GenderButtonForm,
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
} satisfies Meta<typeof GenderButtonForm>;

export default meta;

type Story = StoryObj<typeof GenderButtonForm>;

export const Default: Story = {
  args: {
    errorText: "",
  },
};
export const Error: Story = {
  args: {
    errorText: "エラー発生",
  },
};
