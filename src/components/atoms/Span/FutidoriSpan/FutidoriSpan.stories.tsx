import type { Meta, StoryObj } from "@storybook/react";
import FutidoriSpan from "./FutidoriSpan";

const meta = {
  title: "Atoms/FutidoriSpan",
  component: FutidoriSpan,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  argTypes: {},
} satisfies Meta<typeof FutidoriSpan>;

export default meta;

type Story = StoryObj<typeof FutidoriSpan>;

export const Default: Story = {
  args: {
    style: "",
    text: "Default",
  },
};
