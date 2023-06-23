import type { Meta, StoryObj } from "@storybook/react";
import PaidTime from "./PaidTime";
import { Provider, useSelector } from "react-redux";
import { store } from "../../../../app/store";
import { State } from "../../../../features/DayScheduleSlice";

const meta = {
  title: "Organisms/DayAttendaceSettingComponent/PaidTime",
  component: PaidTime,
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
} satisfies Meta<typeof PaidTime>;

export default meta;

type Story = StoryObj<typeof PaidTime>;

export const Default: Story = {
  render: () => {
    const DayScheduleState = useSelector(State);
    const DayAttendanceData = DayScheduleState.editedDayAttendanceData;
    return <PaidTime PaidTime={DayAttendanceData.paid_time} disabled={false} />;
  },
};
