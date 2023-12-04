import type { Meta, StoryObj } from "@storybook/react";
import RegistarPageTmp from "./RegistarPageTmp";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "Templates/RegistarPageTmp",
  component: RegistarPageTmp,
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
} satisfies Meta<typeof RegistarPageTmp>;

export default meta;

type Story = StoryObj<typeof RegistarPageTmp>;

export const Default: Story = {
  args: {
    registarDataState: {
      registarData: {
        name: "",
        furigana: "",
        gender_id: "",
        birthday: "2022-02-02",
        mailaddress: "",
        phone: "000-0000-0000",
        password: "pass",
        configrationPass: "pass",
      },
      errors: {
        name: "",
        birthday: "",
        configrationPass: "",
        furigana: "",
        gender: "",
        mailaddress: "",
        password: "",
        phone: "",
      },
      inputPassState: {
        text: "",
        type: "",
        toggle: true,
      },
    },
  },
};

export const Error: Story = {
  args: {
    registarDataState: {
      registarData: {
        name: "",
        furigana: "",
        gender_id: "",
        birthday: "2022-02-02",
        mailaddress: "",
        phone: "000-0000-0000",
        password: "pass",
        configrationPass: "pass",
      },
      errors: {
        configrationPass: "※ 入力内容がありません!!",
        furigana: "※ 入力内容がありません!!",
        mailaddress: "※ 入力内容がありません!!",
        name: "※ 入力内容がありません!!",
        password: "※ 入力内容がありません!!",
        phone: "",
        birthday: "",
        gender: "",
      },
      inputPassState: {
        text: "",
        type: "",
        toggle: true,
      },
    },
  },
};
