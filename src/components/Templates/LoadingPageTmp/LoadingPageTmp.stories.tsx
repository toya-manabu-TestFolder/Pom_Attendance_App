import type { Meta, StoryObj } from "@storybook/react";
import LoadingPageTmp from "./LoadingPageTmp";

const meta = {
  title: "Organisms/Modals/LoadingPageTmp ",
  component: LoadingPageTmp,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  decorators: [(Story) => <Story />],
  argTypes: {},
} satisfies Meta<typeof LoadingPageTmp>;

export default meta;

type Story = StoryObj<typeof LoadingPageTmp>;

export const Default: Story = {
  args: {},
};
