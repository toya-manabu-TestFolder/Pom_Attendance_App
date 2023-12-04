import type { Meta, StoryObj } from "@storybook/react";
import ErrorModal from "./ErrorModal";

const meta = {
  title: "Organisms/Modals/ErrorModal ",
  component: ErrorModal,
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
} satisfies Meta<typeof ErrorModal>;

export default meta;

type Story = StoryObj<typeof ErrorModal>;

export const Default: Story = {
  args: {
    errorText: "Default",
    closeBtnFun: () => {},
    toggleModal: true,
  },
};
