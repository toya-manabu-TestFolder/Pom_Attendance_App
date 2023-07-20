import type { Meta, StoryObj } from "@storybook/react";
import RegistarPageTmp from "./RegistarPageTmp";

const meta = {
  title: "Temlates/RegistarPageTmp",
  component: RegistarPageTmp,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  argTypes: {},
} satisfies Meta<typeof RegistarPageTmp>;

export default meta;

type Story = StoryObj<typeof RegistarPageTmp>;

export const Default: Story = {
  args: {},
};
