import type { Meta, StoryObj } from "@storybook/react";
import Box from "./Box";
import Span from "../Span/Span";
import "./Box.css";
import { useState } from "react";

const meta = {
  title: "Atoms/Box ",
  component: Box,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  decorators: [
    (Story) => (
      <>
        <Story />
      </>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    title: "Default",
    element: "",
  },
};
export const Big: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: "864px", height: "639px", fontSize: "1.4rem" }}>
        <Story />
      </div>
    ),
  ],
  args: { ...Default.args },
};
export const Middle: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: "352px", height: "186px", fontSize: "0.5rem" }}>
        <Story />
      </div>
    ),
  ],
  args: { ...Default.args },
};
export const startTime: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: "352px", height: "186px", fontSize: "0.5rem" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    ...Default.args,
    element: (
      <div className="Time">
        <Span
          color="#F9F4FC"
          onClickSpan={() => {}}
          style="display_block"
          text="09&nbsp;:&nbsp;00"
        />
      </div>
    ),
  },
};
export const EndTime: Story = {
  decorators: [
    (Story) => {
      const [isEndTimeRegist, setIsEndTimeRegist] = useState(false);
      return (
        <>
          <Story />
          <button
            onClick={() => setIsEndTimeRegist(isEndTimeRegist ? false : true)}
          >
            change
          </button>
          <div style={{ width: "352px", height: "186px", fontSize: "0.5rem" }}>
            <Box
              element={
                <div className={isEndTimeRegist ? "Time" : "disabled"}>
                  <Span
                    color="#F9F4FC"
                    onClickSpan={() => {}}
                    style="display_block"
                    text="09 : 00"
                  />
                </div>
              }
              title="Default"
            />
          </div>
        </>
      );
    },
  ],
  args: {
    ...Default.args,
    element: (
      <div className={`isEndTimeRegist ? Time : disabled`}>
        <Span
          color="#F9F4FC"
          onClickSpan={() => {}}
          style="display_block"
          text="09&nbsp;:&nbsp;00"
        />
      </div>
    ),
  },
};
