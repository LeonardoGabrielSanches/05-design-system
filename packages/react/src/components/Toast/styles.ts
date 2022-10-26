import { X } from 'phosphor-react'
import { styled } from '../../styles'
import { Box } from '../Box'

export const ToastContainer = styled(Box, {
  maxWidth: '22.5rem',
})

export const ToastHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '$1',
})

export const CloseIcon = styled(X, {
  cursor: 'pointer',
})
