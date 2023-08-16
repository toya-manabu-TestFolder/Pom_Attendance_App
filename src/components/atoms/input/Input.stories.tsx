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
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    input_placeholder: "デフォルトです。",
    input_type: "text",
    input_id: "default",
    input_style: "",
    inputValue: "",
    dataTestid: "",
    disabled: false,
    onChange: () => {},
  },
};
