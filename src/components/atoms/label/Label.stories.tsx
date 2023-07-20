import type { Meta, StoryObj } from "@storybook/react";
import Label from "./Label";

const meta = {
  title: "Atoms/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    label_value: "default",
    label_id: "default",
  },
};
