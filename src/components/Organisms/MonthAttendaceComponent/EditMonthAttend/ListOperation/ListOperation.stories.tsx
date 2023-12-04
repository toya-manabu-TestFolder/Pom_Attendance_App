import type { Meta, StoryObj } from "@storybook/react";
import ListOperation from "./ListOperation";

const meta = {
  title: "Organisms/MonthAttendaceComponent/ListOperation",
  component: ListOperation,
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
} satisfies Meta<typeof ListOperation>;

export default meta;

type Story = StoryObj<typeof ListOperation>;

export const Default: Story = {};
