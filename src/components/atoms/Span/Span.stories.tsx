import type { Meta, StoryObj } from "@storybook/react";
import Span from "./Span";

const meta = {
  title: "Atoms/Span",
  component: Span,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  argTypes: {},
} satisfies Meta<typeof Span>;

export default meta;

type Story = StoryObj<typeof Span>;

export const Default: Story = {
  args: {
    text: "Default",
    style: "display_block",
    color: "red",
    onClickSpan: () => {},
  },
};
export const LoginError: Story = {
  args: { ...Default.args, text: "ログイン情報が間違っています！！" },
};
export const moveAgainPassLink: Story = {
  args: {
    ...Default.args,
    text: "パスワードをお忘れの方はコチラ。",
    color: "#faf9a6",
  },
};
export const InputEmailError: Story = {
  args: { ...Default.args, text: "メールアドレスが間違っています。" },
};
export const RegistError: Story = {
  args: {
    ...Default.args,
    text: "登録が失敗しました。ネットワーク状況をご確認ください。",
  },
};
export const PaydInfo: Story = {
  args: {
    ...Default.args,
    text: "有給休暇",
    color: "#fbd13d",
  },
};
