import type { Meta, StoryObj } from "@storybook/react";
import ModalButton from "./ModalButton";

const meta = {
  title: "Atoms/Modals/ModalButton",
  component: ModalButton,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px", height: "200px", padding: "10px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ModalButton>;

export default meta;

type Story = StoryObj<typeof ModalButton>;

export const OK: Story = {
  args: {
    type: "button",
    onClick: () => {},
    dataTestId: "",
    imgSrc: "/public/Modals/RequestModal/Ok.png",
    imgAlt: "OKボタン",
  },
};
export const NO: Story = {
  args: {
    type: "button",
    onClick: () => {},
    dataTestId: "",
    imgSrc: "/public/Modals/RequestModal/NO.png",
    imgAlt: "NOボタン",
  },
};
