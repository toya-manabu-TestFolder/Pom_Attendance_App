import type { Meta, StoryObj } from "@storybook/react";
import CompletModal from "./CompletModal";

const meta = {
  title: "Organisms/Modals/CompletModal ",
  component: CompletModal,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100vw", height: "100vh" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof CompletModal>;

export default meta;

type Story = StoryObj<typeof CompletModal>;

export const Default: Story = {
  args: {
    text: "Default",
    imgURL: "/Modals/RegistConfirm.png",
  },
};
export const RegistCompleted: Story = {
  args: {
    text: "登録が完了しました！！",
    imgURL: "/Modals/RegistConfirm.png",
  },
};
export const RegistCompleted2: Story = {
  args: {
    text: "登録が完了しました！！",
    imgURL: "/Modals/comment_edit_comp.png",
  },
};
