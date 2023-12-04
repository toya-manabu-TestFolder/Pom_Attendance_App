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
    imgURL: "/Modals/RegistConfirm.png",
  },
};
