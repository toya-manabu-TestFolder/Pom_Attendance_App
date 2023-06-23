import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import MonthSchedulePageTmp from "./MonthSchedulePageTmp";

const meta = {
  title: "Templates/MonthSchedulePageTmp ",
  component: MonthSchedulePageTmp,
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
  argTypes: {},
} satisfies Meta<typeof MonthSchedulePageTmp>;

export default meta;

type Story = StoryObj<typeof MonthSchedulePageTmp>;

export const Default: Story = {
  args: {},
};
