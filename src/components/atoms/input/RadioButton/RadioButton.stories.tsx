import type { Meta, StoryObj } from "@storybook/react";
import RadioButton from "./RadioButton";

const meta = {
  title: "Atoms/radioButton",
  component: RadioButton,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  argTypes: {},
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    inputId: "Default",
    onClick: () => {},
    radioName: "Default",
    dataTestid: "",
  },
};
