import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from '@leonardo-design-system/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    text: '21 de Outubro - Indisponível',
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
