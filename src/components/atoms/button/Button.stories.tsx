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
    onClick: () => alert("click"),
  },
};
export const Regiter_Confirmation: Story = {
  args: {
    type: "button",
    text: "登録情報を確認する",
    onClick: linkTo("Atoms/Button", "Default"),
  },
};
