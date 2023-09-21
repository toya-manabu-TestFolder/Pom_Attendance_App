import type { Meta, StoryObj } from "@storybook/react";
import TotalTime from "./TotalTime";
import { Provider, useSelector } from "react-redux";
import { store } from "../../../../app/store";
import { State } from "../../../../features/DayScheduleSlice";

const meta = {
  title: "Organisms/DayAttendaceSettingComponent/TotalTime",
  component: TotalTime,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <div style={{ width: "354px", height: "225px" }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
} satisfies Meta<typeof TotalTime>;

export default meta;

type Story = StoryObj<typeof TotalTime>;

export const Default: Story = {
  render: () => {
    const DayScheduleState = useSelector(State);
    const DayAttendanceData = DayScheduleState.DayAttendanceData;
    return (
      <TotalTime
        attendStartTime={DayAttendanceData.start_time}
        attendEndTime={DayAttendanceData.end_time}
        breakTime={DayAttendanceData.break_time}
      />
    );
  },
};
