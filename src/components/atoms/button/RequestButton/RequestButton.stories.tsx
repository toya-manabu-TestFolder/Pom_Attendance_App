import type { Meta, StoryObj } from "@storybook/react";
import RequestButton from "./RequestButton";

const meta = {
  title: "Atoms/RequestButton",
  component: RequestButton,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <div
        style={{
          width: "200px",
          height: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof RequestButton>;

export default meta;

type Story = StoryObj<typeof RequestButton>;

export const Default: Story = {
  args: {
    type: "button",
    text: "Default",
    style: "",
    onClick: () => {},
    dataTestid: "",
    disabled: false,
  },
};
export const Pushed: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};
