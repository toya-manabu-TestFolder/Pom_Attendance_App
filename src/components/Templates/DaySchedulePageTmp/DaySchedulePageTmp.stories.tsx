import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import { BrowserRouter } from "react-router-dom";
import DaySchedulePageTmp from "./DaySchedulePageTmp";

const meta = {
  title: "Templates/DaySchedulePageTmp ",
  component: DaySchedulePageTmp,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </Provider>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof DaySchedulePageTmp>;

export default meta;

type Story = StoryObj<typeof DaySchedulePageTmp>;

export const Default: Story = {
  args: {},
};
