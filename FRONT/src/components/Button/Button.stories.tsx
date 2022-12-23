import { Story, Meta } from '@storybook/react/types-6-0'
// import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      }
    },
    minimal: {
      control: {
        type: 'boolean'
      }
    },
    secondary: {
      control: {
        type: 'boolean'
      }
    }
  }
} as Meta<ButtonProps>

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Buy now'
}
