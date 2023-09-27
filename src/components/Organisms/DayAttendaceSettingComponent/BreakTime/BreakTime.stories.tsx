import type { Meta, StoryObj } from "@storybook/react";
import BreakTime from "./BreakTime";
import { Provider, useSelector } from "react-redux";
import { store } from "../../../../app/store";
import { State } from "../../../../features/DayScheduleSlice";

const meta = {
  title: "Organisms/DayAttendaceSettingComponent/BreakTime",
  component: BreakTime,
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
} satisfies Meta<typeof BreakTime>;

export default meta;

type Story = StoryObj<typeof BreakTime>;

export const Default: Story = {
  args: {
    breakTime: "09:00:00",
  },
  render: () => {
    const DayScheduleState = useSelector(State);
    const DayAttendanceData = DayScheduleState.editedDayAttendanceData;
    return (
      <BreakTime breakTime={DayAttendanceData.break_time} disabled={false} />
    );
  },
};
