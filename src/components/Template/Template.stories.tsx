import type { Meta, StoryObj } from "@storybook/react"

import { Template } from "./Template"

const meta: Meta<typeof Template> = {
  component: Template,
}

type Story = StoryObj<typeof Template>

export const Main: Story = {
  args: {
    prop1: "prop1",
    prop2: "prop2",
  },
}

export default meta
