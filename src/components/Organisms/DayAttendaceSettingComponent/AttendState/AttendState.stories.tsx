import type { Meta, StoryObj } from "@storybook/react";
import AttendState from "./AttendState";
import { Provider, useSelector } from "react-redux";
import { store } from "../../../../app/store";
import { State } from "../../../../features/DayScheduleSlice";

const meta = {
  title: "Organisms/DayAttendaceSettingComponent/AttendState",
  component: AttendState,
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
} satisfies Meta<typeof AttendState>;

export default meta;

type Story = StoryObj<typeof AttendState>;

export const Default: Story = {
  render: () => {
    const DayScheduleState = useSelector(State);
    const DayAttendanceData = DayScheduleState.DayAttendanceData;
    return <AttendState attendState={DayAttendanceData.attendance_type} />;
  },
};
