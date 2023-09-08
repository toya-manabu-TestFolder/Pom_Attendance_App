import type { Meta, StoryObj } from "@storybook/react";
import Comment from "./Comment";
import { Provider, useSelector } from "react-redux";
import { store } from "../../../../app/store";
import { State } from "../../../../features/DayScheduleSlice";

const meta = {
  title: "Organisms/DayAttendaceSettingComponent/Comment",
  component: Comment,
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
} satisfies Meta<typeof Comment>;

export default meta;

type Story = StoryObj<typeof Comment>;

export const Default: Story = {
  render: () => {
    const DayScheduleState = useSelector(State);
    const DayAttendanceData = DayScheduleState.DayAttendanceData;
    return <Comment Comment={DayAttendanceData.comment} />;
  },
};
