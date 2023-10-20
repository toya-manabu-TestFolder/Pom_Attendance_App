import type { Meta, StoryObj } from "@storybook/react";
import CommentModal from "./CommentModal";
import { Provider, useSelector } from "react-redux";
import { store } from "../../../../app/store";
import { State } from "../../../../features/DayScheduleSlice";

const meta = {
  title: "Organisms/DayAttendaceSettingComponent/CommentModal",
  component: CommentModal,
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
} satisfies Meta<typeof CommentModal>;

export default meta;

type Story = StoryObj<typeof CommentModal>;

export const Default: Story = {
  render: () => {
    const DayScheduleState = useSelector(State);
    const DayAttendanceData = DayScheduleState.editedDayAttendanceData;
    return (
      <CommentModal Comment={DayAttendanceData.comment} disabled={false} />
    );
  },
};
