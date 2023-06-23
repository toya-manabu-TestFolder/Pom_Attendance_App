import type { Meta, StoryObj } from "@storybook/react";
import h2 from "./H2";

const meta = {
  title: "Atoms/H2/Ver.1",
  component: h2,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  argTypes: {},
} satisfies Meta<typeof h2>;

export default meta;

type Story = StoryObj<typeof h2>;

export const Default: Story = {
  args: {
    text: "Default",
    dataTestId: "",
  },
};
export const Registar: Story = {
  args: {
    ...Default.args,
    text: "新規会員登録",
  },
};
export const RegistarConfirmation: Story = {
  args: {
    ...Default.args,
    text: "登録内容の確認",
  },
};
export const RegistarCompleted: Story = {
  args: {
    ...Default.args,
    text: "会員登録が完了しました！！",
  },
};
