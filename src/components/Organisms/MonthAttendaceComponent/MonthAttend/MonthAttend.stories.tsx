import type { Meta, StoryObj } from "@storybook/react";
import MonthAttend from "./MonthAttend";

const meta = {
  title: "Organisms/MonthAttendaceComponent/MonthAttend",
  component: MonthAttend,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "1065px", height: "379px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MonthAttend>;

export default meta;

type Story = StoryObj<typeof MonthAttend>;

export const Default: Story = {};
