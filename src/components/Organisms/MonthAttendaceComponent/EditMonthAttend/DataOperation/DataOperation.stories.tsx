import type { Meta, StoryObj } from "@storybook/react";
import DataOperation from "./DataOperation";

const meta = {
  title: "Organisms/MonthAttendaceComponent/DataOperation",
  component: DataOperation,
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
} satisfies Meta<typeof DataOperation>;

export default meta;

type Story = StoryObj<typeof DataOperation>;

export const Default: Story = {};
