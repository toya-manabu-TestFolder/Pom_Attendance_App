/* eslint-disable storybook/story-exports */
import Button from "./Button";
export default {
  // ↓storyBookのサイドバータイトルを指定
  title: "Common/Button",
  //↓扱うコンポーネントを指定
  component: Button,
};
// ↓storyBookのButton直下にコンポーネントが作られる。
export const Default = () => <Button>Hello World</Button>;
export const Primary = () => <Button color="primary">Click!</Button>;
export const Danger = () => <Button color="primary">Click!</Button>;
