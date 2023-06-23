import type { Meta, StoryObj } from "@storybook/react";
import InputForm from "./InputForm";

const meta = {
  title: "Molecules/InputForm",
  component: InputForm,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100vw" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof InputForm>;

export default meta;

type Story = StoryObj<typeof InputForm>;

export const Default: Story = {
  args: {
    label_id: "text",
    label_value: "Default",
    input_placeholder: "Default",
    input_style: "",
    input_type: "text",
    input_id: "text",
    inputValue: "",
    onChange: () => {},
    errorText: "",
    inputPassProps: "",
    disabled: false,
    dataTestid: "",
  },
};
export const InputPassword: Story = {
  args: {
    ...Default.args,
    label_value: "パスワード",
    label_id: "password",
    input_placeholder: "パスワードを入力してください。",
    input_type: "password",
    input_id: "password",
  },
};

export const ErrorName: Story = {
  args: {
    ...Default.args,
    input_style: "InputError",
    input_placeholder: "",
    errorText: "エラーが発生しています！！",
  },
};
