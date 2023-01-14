import { Story, Meta } from '@storybook/react/types-6-0'
import Kanban from '.'
import { Cards } from 'components/Kanban/mock'

export default {
  title: 'Kanban',
  component: Kanban
} as Meta

export const Basic: Story = (args) => <Kanban {...args} tasks={Cards} />
