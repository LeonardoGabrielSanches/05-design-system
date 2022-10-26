import { Text } from '../Text'
import { TooltipContainer } from './styles'

export interface TooltipProps {
  text: string
}

export function Tooltip({ text }: TooltipProps) {
  return (
    <TooltipContainer>
      <Text size="sm">{text}</Text>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
