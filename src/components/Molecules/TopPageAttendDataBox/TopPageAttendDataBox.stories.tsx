import type { Meta, StoryObj } from "@storybook/react";
import TopPageAttendDataBox from "./TopPageAttendDataBox";

const meta = {
  title: "Molecules/TopPageAttendDataBox",
  component: TopPageAttendDataBox,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "30vw", height: "30vh" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TopPageAttendDataBox>;

export default meta;

type Story = StoryObj<typeof TopPageAttendDataBox>;

export const Default: Story = {
  args: {
    title: "登録承認状況",
    registApprovalState: "登録済み",
  },
};
export const Nodata: Story = {
  args: {
    title: "登録承認状況",
    registApprovalState: "登録なし",
  },
};
export const StartAttend: Story = {
  args: {
    title: "出勤時間",
    registApprovalState: "09:00",
  },
};
export const EndAttend: Story = {
  args: {
    title: "退勤時間",
    registApprovalState: "18:00",
  },
};
export const PaidState: Story = {
  args: {
    title: "有給取得状況",
    registApprovalState: "取得なし",
  },
};
