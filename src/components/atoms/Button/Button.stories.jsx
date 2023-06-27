/* eslint-disable storybook/story-exports */
import Button from "./Button";
export default {
  // ↓storyBookのサイドバータイトルを指定
  title: "Common/Button",
  //↓扱うコンポーネントを指定
  component: Button,
};
// ↓storyBookのButton直下にコンポーネントが作られる。
export const HelloButton = () => <Button>Hello World</Button>;
export const ClickButton = () => <Button>Click!</Button>;
