import type { Meta, StoryObj } from "@storybook/react";
import LoadingModal from "./LoadingModal";

const meta = {
  title: "Organisms/Modals/LoadingModal ",
  component: LoadingModal,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  decorators: [(Story) => <Story />],
  argTypes: {},
} satisfies Meta<typeof LoadingModal>;

export default meta;

type Story = StoryObj<typeof LoadingModal>;

export const Default: Story = {
  args: {},
};
