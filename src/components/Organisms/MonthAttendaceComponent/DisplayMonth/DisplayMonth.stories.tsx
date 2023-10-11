import type { Meta, StoryObj } from "@storybook/react";
import DisplayMonth from "./DisplayMonth";
import { Provider, useSelector } from "react-redux";
import { store } from "../../../../app/store";
import { State } from "../../../../features/DayScheduleSlice";

const meta = {
  title: "Organisms/MonthAttendaceComponent/DisplayMonth",
  component: DisplayMonth,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "584px", height: "179px" }}>
        <Provider store={store}>
          <Story />
        </Provider>
      </div>
    ),
  ],
} satisfies Meta<typeof DisplayMonth>;

export default meta;

type Story = StoryObj<typeof DisplayMonth>;

export const Default: Story = {};
