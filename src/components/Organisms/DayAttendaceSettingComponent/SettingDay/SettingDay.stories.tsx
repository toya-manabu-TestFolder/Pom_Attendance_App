import type { Meta, StoryObj } from "@storybook/react";
import SettingDay from "./SettingDay";

const meta = {
  title: "Organisms/DayAttendaceSettingComponent/SettingDay",
  component: SettingDay,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof SettingDay>;

export default meta;

type Story = StoryObj<typeof SettingDay>;

export const Default: Story = {
  args: {
    toDay: "",
  },
};
