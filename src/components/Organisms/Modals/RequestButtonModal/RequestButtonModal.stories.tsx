import type { Meta, StoryObj } from "@storybook/react";
import RequestButtonModal from "./RequestButtonModal";

const meta = {
  title: "Organisms/Modals/RequestButtonModal ",
  component: RequestButtonModal,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100vw", height: "100vh" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof RequestButtonModal>;

export default meta;

type Story = StoryObj<typeof RequestButtonModal>;

export const Default: Story = {
  args: {
    text: "Default",
  },
};
export const startAttend: Story = {
  args: {
    text: "午前09:00で出勤登録してよろしいですか？",
  },
};
