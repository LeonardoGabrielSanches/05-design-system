import { colors } from '@leonardo-design-system/tokens'
import { Heading } from '../Heading'
import { Text } from '../Text'
import { CloseIcon, ToastContainer, ToastHeader } from './styles'

export interface ToastProps {
  title: string
  content: string
  onClose(): void
}

export function Toast({ title, content, onClose }: ToastProps) {
  return (
    <ToastContainer>
      <ToastHeader>
        <Heading size="sm">{title}</Heading>
        <CloseIcon size={20} color={colors.gray200} onClick={onClose} />
      </ToastHeader>

      <Text size="sm" css={{ color: colors.gray200 }}>
        {content}
      </Text>
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
