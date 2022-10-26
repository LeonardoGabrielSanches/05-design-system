import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@leonardo-design-system/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    content: 'Quarta-feira, 23 de Outubro às 16h',
    onClose: () => {},
  },
  argTypes: {},
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
