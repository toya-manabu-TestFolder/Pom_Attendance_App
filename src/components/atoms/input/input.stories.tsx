import type { Meta, StoryObj } from "@storybook/react";
import Input from "./input";

const meta = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  argTypes: {
    type: {
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

console.log(meta.argTypes);

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "default",
  },
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "メールアドレスを入力してください。",
  },
};

export const Confirmation_Email: Story = {
  args: {
    type: "email",
    placeholder: "再度メールアドレスを入力してください。",
  },
};

export const Date: Story = {
  args: {
    type: "date",
    placeholder: "誕生日を選んでください。",
  },
};

export const Tel: Story = {
  args: {
    type: "tel",
    placeholder: "電話番号を入力してください。",
  },
};

export const Gender_Maile: Story = {
  args: {
    type: "button",
    value: "男性",
    style: "gender-select-btn",
  },
};
