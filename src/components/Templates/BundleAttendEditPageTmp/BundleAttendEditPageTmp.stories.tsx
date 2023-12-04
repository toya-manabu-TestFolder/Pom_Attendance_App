import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import { BrowserRouter } from "react-router-dom";
import BundleAttendEditPageTmp from "./BundleAttendEditPageTmp";

const meta = {
  title: "Templates/BundleAttendEditPageTmp ",
  component: BundleAttendEditPageTmp,
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
} satisfies Meta<typeof BundleAttendEditPageTmp>;

export default meta;

type Story = StoryObj<typeof BundleAttendEditPageTmp>;

export const Default: Story = {
  args: {},
};
