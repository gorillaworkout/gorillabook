import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import { Search, SearchProps } from "."

export default {
  title: "Component/Search",
  component: Search,
  argTypes: {
    title: { control: "string" }
  }
} as Meta

const Template: Story<SearchProps> = (args) => <Search {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {}

// Title = "Hello World"
export const TitleHelloWorld = Template.bind({})
TitleHelloWorld.args = {
  title: "Hello 22"
}
