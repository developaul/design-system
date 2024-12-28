import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@acme/ui/button";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => (
    <Button
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Turborepo!");
      }}
    >
      Hello Primary
    </Button>
  ),
  name: "Button/Primary",
  args: {
    children: "Hello",
    type: "button",
    style: {
      color: "blue",
      border: "1px solid gray",
      padding: 10,
      borderRadius: 10,
    },
  },
};

export const Secondary: Story = {
  render: (props) => (
    <Button
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Turborepo!");
      }}
    >
      Hello Secondary
    </Button>
  ),
  name: "Button/Secondary",
  args: {
    children: "Hello",
    type: "button",
    style: {
      color: "red",
      border: "1px solid gray",
      padding: 10,
      borderRadius: 10,
    },
  },
};

export const Tertiary: Story = {
  render: (props) => (
    <Button
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Turborepo!");
      }}
    >
      Hello Tertiary
    </Button>
  ),
  name: "Button/Tertiary",
  args: {
    children: "Hello",
    type: "button",
    style: {
      color: "green",
      border: "1px solid gray",
      padding: 10,
      borderRadius: 10,
    },
  },
};