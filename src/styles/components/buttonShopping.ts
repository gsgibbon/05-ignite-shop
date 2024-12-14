import { styled } from "..";

export const ButtonShoppingContainer = styled('div', {
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  padding: '0.75rem',
  border: 'none',
  borderRadius: 6,

  color: '$gray500',
  background: '$gray800',

  span: {
    width: '1.375rem',
    height: '1.375rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    top: -7,
    right: -7,

    borderRadius: 20,

    background: '$green500',
    color: '$white',
    fontSize: 14,
    fontWeight: 'bold'
  }
})