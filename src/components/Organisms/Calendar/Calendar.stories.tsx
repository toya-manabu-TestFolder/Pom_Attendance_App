import type { Meta, StoryObj } from "@storybook/react";
import Calendar from "./Calendar";

const meta = {
  title: "Organisms/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100%", height: "100%" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {},
};
