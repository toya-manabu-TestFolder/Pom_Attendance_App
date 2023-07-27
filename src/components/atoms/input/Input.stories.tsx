import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  argTypes: {
    input_type: {
      options: ["text", "radio", "button", "email", "date", "password", "tel"],
      control: { type: "select" },
      // table: {
      //   defaultValue: { summary: "test" },
      // },
      description: "inputのデフォルト",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    input_placeholder: "",
    input_type: "",
    input_id: "",
    input_style: "",
    inputValue: "",
    setInputValue: "",
  },
};
