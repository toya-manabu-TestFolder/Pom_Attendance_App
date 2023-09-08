import type { Meta, StoryObj } from "@storybook/react";
import AttendTime from "./AttendTime";
import { Provider, useSelector } from "react-redux";
import { store } from "../../../../app/store";
import { State } from "../../../../features/DayScheduleSlice";

const meta = {
  title: "Organisms/DayAttendaceSettingComponent/AttendTime",
  component: AttendTime,
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
} satisfies Meta<typeof AttendTime>;

export default meta;

type Story = StoryObj<typeof AttendTime>;

export const Default: Story = {
  args: {
    startTime: "09:00:00",
    endTime: "09:00:00",
  },
  render: () => {
    const DayScheduleState = useSelector(State);
    const DayAttendanceData = DayScheduleState.DayAttendanceData;
    return (
      <AttendTime
        endTime={DayAttendanceData.end_time}
        startTime={DayAttendanceData.start_time}
      />
    );
  },
};
