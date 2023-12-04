import type { Meta, StoryObj } from "@storybook/react";
import MenuModal from "./MenuModal";

const meta = {
  title: "Organisms/Modals/MenuModal",
  component: MenuModal,
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
} satisfies Meta<typeof MenuModal>;

export default meta;

type Story = StoryObj<typeof MenuModal>;

export const Default: Story = {
  args: {
    setIsMenu: () => false,
  },
};
