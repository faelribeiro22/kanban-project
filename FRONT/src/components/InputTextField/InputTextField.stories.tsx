import { Story, Meta } from '@storybook/react/types-6-0'
import InputTextField from '.'

export default {
  title: 'InputTextField',
  component: InputTextField,
  argTypes: {
    onInput: { action: 'changed' }
  }
} as Meta

export const Basic: Story = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <InputTextField {...args} />
  </div>
)

export const WithLabel: Story = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <InputTextField id="largura" {...args} />
  </div>
)

export const WithError: Story = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <InputTextField {...args} />
  </div>
)

WithLabel.args = {
  label: 'Largura da parede',
  forLabel: 'largura'
}

WithError.args = {
  error: 'Ops ... something is wrong'
}
