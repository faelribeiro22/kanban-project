import { Story, Meta } from '@storybook/react/types-6-0'
import Column from '../Column'
import { Cards } from '../Column/mock'

export default {
  title: 'Column',
  component: Column
} as Meta

export const Basic: Story = (args) => (
  <Column {...args} cards={Cards} title="todo" />
)
