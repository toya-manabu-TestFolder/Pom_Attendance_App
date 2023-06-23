import type { Meta, StoryObj } from "@storybook/react";
import Headers from "./Headers";

const meta = {
  title: "Organisms/Headers",
  component: Headers,
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
} satisfies Meta<typeof Headers>;

export default meta;

type Story = StoryObj<typeof Headers>;

export const Default: Story = {
  args: {},
};
