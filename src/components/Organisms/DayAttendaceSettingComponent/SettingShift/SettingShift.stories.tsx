import type { Meta, StoryObj } from "@storybook/react";
import SettingShift from "./SettingShift";
import { Provider, useSelector } from "react-redux";
import { store } from "../../../../app/store";
import { State } from "../../../../features/DayScheduleSlice";

const meta = {
  title: "Organisms/DayAttendaceSettingComponent/SettingShift",
  component: SettingShift,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} satisfies Meta<typeof SettingShift>;

export default meta;

type Story = StoryObj<typeof SettingShift>;

export const Default: Story = {
  render: () => {
    const DayScheduleState = useSelector(State);
    const DayAttendanceData = DayScheduleState.DayAttendanceData;
    return (
      <SettingShift
        endTime={DayAttendanceData.default_end_time}
        registState={DayAttendanceData.attendance_type}
        startTime={DayAttendanceData.default_start_time}
        disabled={false}
      />
    );
  },
};
