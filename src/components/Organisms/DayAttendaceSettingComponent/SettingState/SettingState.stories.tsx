import type { Meta, StoryObj } from "@storybook/react";
import SettingState from "./SettingState";

const meta = {
  title: "Organisms/DayAttendaceSettingComponent/SettingState",
  component: SettingState,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof SettingState>;

export default meta;

type Story = StoryObj<typeof SettingState>;

export const Default: Story = {
  args: {
    registState: "登録なし",
  },
};
