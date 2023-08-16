import type { Meta, StoryObj } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";
import Button from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  argTypes: {
    onClick: {
      action: "clicked",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    type: "button",
    text: "Default",
    onClick: () => alert("Success"),
    dataTestid: "",
  },
};
export const Regiter_Confirmation: Story = {
  args: {
    ...Default.args,
    type: "button",
    text: "登録情報を確認する",
    onClick: linkTo("Atoms/Button", "Default"),
  },
};
export const Regist_Complet: Story = {
  args: {
    ...Default.args,
    type: "submit",
    text: "これで登録する",
    onClick: linkTo("Atoms/Button", "Default"),
  },
};
export const Regist_Change: Story = {
  args: {
    ...Default.args,
    type: "button",
    text: "内容を変更する",
    onClick: linkTo("Atoms/Button", "Default"),
  },
};
export const CompletRegist: Story = {
  args: {
    ...Default.args,
    type: "button",
    text: "ログインページへ",
    onClick: linkTo("Atoms/Button", "Default"),
  },
};
export const Menu: Story = {
  args: {
    ...Default.args,
    type: "button",
    text: "MENU",
    onClick: linkTo("Atoms/Button", "Default"),
  },
};
