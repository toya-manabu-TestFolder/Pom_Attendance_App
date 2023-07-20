import type { Meta, StoryObj } from "@storybook/react";
import RegistarInputSection from "./RegistarInputSection";

const meta = {
  title: "Organisms/RegistarInputSection",
  component: RegistarInputSection,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
} satisfies Meta<typeof RegistarInputSection>;

export default meta;

type Story = StoryObj<typeof RegistarInputSection>;

export const Default: Story = {
  args: {},
};
