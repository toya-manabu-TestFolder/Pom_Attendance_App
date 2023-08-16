import type { Meta, StoryObj } from "@storybook/react";
import InputConfirmationPageTmp from "./InputConfirmationPageTmp";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "Templates/InputConfirmationPageTmp",
  component: InputConfirmationPageTmp,
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
} satisfies Meta<typeof InputConfirmationPageTmp>;

export default meta;

type Story = StoryObj<typeof InputConfirmationPageTmp>;

export const Default: Story = {
  args: {
    confirmationState: {
      confirmationData: [
        { name: "お名前", value: "遠矢 学", type: "text" },
        { name: "フリガナ", value: "トオヤ マナブ", type: "text" },
        { name: "性別", value: "男性", type: "text" },
        { name: "生年月日", value: "2022/02/02", type: "text" },
        { name: "メールアドレス", value: "manabu@example.com", type: "text" },
        { name: "電話番号", value: "000-0000-0000", type: "text" },
        { name: "パスワード", value: "pass", type: "password" },
      ],
      inputPassState: {
        text: "表示",
        type: "password",
        toggle: true,
      },
      sendData: {
        name: "",
        furigana: "",
        gender_id: 0,
        birthday: "",
        mailaddress: "",
        phone: "",
        password: "",
      },
      error: "",
    },
  },
};
