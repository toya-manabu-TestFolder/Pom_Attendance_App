import type { Meta, StoryObj } from "@storybook/react";
import Img from "./Img";

const meta = {
  title: "Atoms/Img",
  component: Img,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [{ name: "default", value: "#FBD13D" }],
    },
  },
  argTypes: {},
} satisfies Meta<typeof Img>;

export default meta;

type Story = StoryObj<typeof Img>;

export const TitleLogo: Story = {
  args: {
    src: "../../../../public/navigation/titleLogo.png",
    alt: "タイトルロゴ",
    style: "",
  },
};
export const LoginUser: Story = {
  args: {
    src: "../../../../public/navigation/loginUser.png",
    alt: "ログインしているユーザー名",
    style: "",
  },
};
export const SpaceImg: Story = {
  args: {
    src: "../../../../public/navigation/space.png",
    alt: "空白",
    style: "",
  },
};
