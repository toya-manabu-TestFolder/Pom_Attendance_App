import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import { BrowserRouter } from "react-router-dom";
import HomePageTmp from "./HomePageTmp";

const meta = {
  title: "Templates/HomePageTmp ",
  component: HomePageTmp,
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
          <div style={{ width: "100vw", height: "100vh" }}>
            <Story />
          </div>
        </BrowserRouter>
      </Provider>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof HomePageTmp>;

export default meta;

type Story = StoryObj<typeof HomePageTmp>;

export const Default: Story = {
  args: {
    attendanceData: {
      payds: [
        {
          title: "残日数",
          value: String(12.0) + "日",
        },
        { title: "付与日数", value: String(14.0) + "日" },
        { title: "取得日数", value: String(2.0) + "日" },
        { title: "取得時間", value: String(0.0) + "時間" },
      ],
      RegistedWorkTimes: {
        startTime: "09:00",
        endTime: "18:00",
      },
      loginUser: "たぬき",
    },
  },
};
