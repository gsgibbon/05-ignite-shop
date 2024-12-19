import { styled } from "..";

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',

  variants: {
    isSuccessPage: {
      true: {
        justifyContent: 'center',
      },
      false: {
        justifyContent: 'space-between',
      }
    }
  },

  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
})

export const ButtonShoppingContainer = styled('button', {
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
  cursor: 'pointer',

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