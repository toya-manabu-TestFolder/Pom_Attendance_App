import type { Meta, StoryObj } from "@storybook/react";
import DayAttendRegistConfirm from "./DayAttendRegistConfirm";
import { Provider, useSelector } from "react-redux";
import { store } from "../../../../app/store";
import { State } from "../../../../features/DayScheduleSlice";

const meta = {
  title: "Organisms/Modals/DayAttendRegistConfirm ",
  component: DayAttendRegistConfirm,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <div style={{ width: "100vw", height: "100vh" }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof DayAttendRegistConfirm>;

export default meta;

type Story = StoryObj<typeof DayAttendRegistConfirm>;

export const Default: Story = {
  render: () => {
    const DayScheduleState = useSelector(State);
    const DayAttendanceData = DayScheduleState.editedDayAttendanceData;
    return (
      <DayAttendRegistConfirm
        registData={DayAttendanceData}
        okBtnFunProps={() => {}}
        noBtnFunProps={() => {}}
        setIsModal={() => false}
      />
    );
  },
};
