import type { Meta, StoryObj } from "@storybook/react";
import RequestModal from "./RequestModal";

const meta = {
  title: "Organisms/Modals/RequestModal ",
  component: RequestModal,
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
} satisfies Meta<typeof RequestModal>;

export default meta;

type Story = StoryObj<typeof RequestModal>;

export const Default: Story = {
  args: {
    text: "Default",
    okBtnFunProps: () => {},
    noBtnFunProps: () => {},
    setIsModal: () => {},
  },
};
export const startAttend: Story = {
  args: {
    text: "午前09:00で出勤登録してよろしいですか？",
    okBtnFunProps: () => {},
    noBtnFunProps: () => {},
    setIsModal: () => {},
  },
};
