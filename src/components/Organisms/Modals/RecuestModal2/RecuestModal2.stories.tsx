import type { Meta, StoryObj } from "@storybook/react";
import RecuestModal2 from "./RecuestModal2";

const meta = {
  title: "Organisms/Modals/RecuestModal2 ",
  component: RecuestModal2,
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
} satisfies Meta<typeof RecuestModal2>;

export default meta;

type Story = StoryObj<typeof RecuestModal2>;

export const Default: Story = {
  args: {
    text: "Default",
    okBtnFunProps: () => {},
    noBtnFunProps: () => {},
    setIsModal: () => {},
    message: "",
  },
};
