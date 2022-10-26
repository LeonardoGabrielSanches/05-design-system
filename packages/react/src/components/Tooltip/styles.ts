import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  maxWidth: '14rem',
  position: 'absolute',

  '&:before': {
    content: '',
    borderStyle: 'solid',
    borderColor: '$gray900 transparent',
    borderWidth: '0.375rem 0.375rem 0 0.375rem',
    top: '100%',
    position: 'absolute',
    left: '50%',
  },
})
