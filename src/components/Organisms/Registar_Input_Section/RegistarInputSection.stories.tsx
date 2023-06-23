import type { Meta, StoryObj } from "@storybook/react";
import RegistarInputSection from "./RegistarInputSection";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "Organisms/RegistarInputSection",
  component: RegistarInputSection,
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
} satisfies Meta<typeof RegistarInputSection>;

export default meta;

type Story = StoryObj<typeof RegistarInputSection>;

export const Default: Story = {
  args: {
    errors: {
      birthday: "",
      configrationPass: "",
      furigana: "",
      gender: "",
      mailaddress: "",
      name: "",
      password: "",
      phone: "",
    },
  },
};
