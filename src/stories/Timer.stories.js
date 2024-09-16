import React from "react";
import Timer from "../components/timer/Timer";

// default export defines the component in Storybook
export default {
  title: "Components/Timer", // storybook will list this under 'Components'
  component: Timer,
};

// template to create different variations of the Timer
const Template = (args) => <Timer {...args} />;

// default Timer story
export const Default = Template.bind({});
Default.args = {
  title: "My Timer",
  endTime: 152,
  elapsedTime: 0,
};

// timer with elapsed time story
export const WithElapsedTime = Template.bind({});
WithElapsedTime.args = {
  title: "My Elapsed Timer",
  endTime: 152,
  elapsedTime: 13,
};
