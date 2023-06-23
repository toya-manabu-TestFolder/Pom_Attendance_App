import type { Meta, StoryObj } from "@storybook/react";
import h2 from "./h2";

const meta = {
  title: "Atoms/H2/Ver.2",
  component: h2,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  argTypes: {},
} satisfies Meta<typeof h2>;

export default meta;

type Story = StoryObj<typeof h2>;

export const Default: Story = {
  args: {
    text: "Default",
  },
};
export const Calender: Story = {
  args: {
    text: "カレンダー",
  },
};
export const DayAttendanceInput: Story = {
  args: {
    text: "日次勤怠入力一覧",
  },
};
export const MonthAttendanceInput: Story = {
  args: {
    text: "月次勤怠入力",
  },
};
