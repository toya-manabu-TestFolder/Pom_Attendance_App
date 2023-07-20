import type { Meta, StoryObj } from "@storybook/react";
import GenderButtonForm from "./GenderButtonForm";

const meta = {
  title: "Molecules/GenderButtonForm",
  component: GenderButtonForm,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
} satisfies Meta<typeof GenderButtonForm>;

export default meta;

type Story = StoryObj<typeof GenderButtonForm>;

export const Default: Story = {
  args: {},
};
