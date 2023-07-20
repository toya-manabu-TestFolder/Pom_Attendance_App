import type { Meta, StoryObj } from "@storybook/react";
import InputForm from "./InputForm";
import * as InputStories from "../../atoms/input/Input.stories";
import * as LabelStories from "../../atoms/label/Label.stories";

const meta = {
  title: "Molecules/InputForm",
  component: InputForm,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
} satisfies Meta<typeof InputForm>;

export default meta;

type Story = StoryObj<typeof InputForm>;

export const Default: Story = {
  args: {
    label_value: LabelStories.Default.args?.label_value,
    label_id: LabelStories.Default.args?.label_id,
    input_placeholder: InputStories.Default.args?.input_placeholder,
    input_style: InputStories.Default.args?.input_style,
    input_type: InputStories.Default.args?.input_type,
    input_id: InputStories.Default.args?.input_id,
  },
};
