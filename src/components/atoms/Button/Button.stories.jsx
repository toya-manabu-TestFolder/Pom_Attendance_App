/* eslint-disable storybook/story-exports */
import Button from "./Button";
export default {
  // ↓storyBookのサイドバータイトルを指定
  title: "Common/Button",
  //↓扱うコンポーネントを指定
  component: Button,
};
// ↓storyBookのButton直下にコンポーネントが作られる。
// ↓Templateを作成する事で、パターン毎に<Button></Button>を書かなくて良い
const Template = (args) => <Button {...args} />;
export const Default = () => Template.bind({});
Default.args = {
  children: "Default",
};
export const Danger = Template.bind({});
Danger.args = {
  children: "Danger",
  color: "danger",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  color: "primary",
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  children: "Small",
  color: "primary",
  size: "sm",
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  ...PrimarySmall.args,
  children: "Large",
  size: "lg",
};
