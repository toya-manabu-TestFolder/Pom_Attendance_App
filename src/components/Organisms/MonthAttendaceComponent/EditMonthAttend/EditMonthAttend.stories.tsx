import type { Meta, StoryObj } from "@storybook/react";
import EditMonthAttend from "./EditMonthAttend";

const meta = {
  title: "Organisms/MonthAttendaceComponent/EditMonthAttend",
  component: EditMonthAttend,
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
} satisfies Meta<typeof EditMonthAttend>;

export default meta;

type Story = StoryObj<typeof EditMonthAttend>;

export const Default: Story = {};
