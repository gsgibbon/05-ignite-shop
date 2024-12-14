import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: 656,
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '1.25rem 2rem 1.25rem 1.25rem',
    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '6.875rem',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      width: '15.75rem',
      heigth: '2rem',

      strong: {
        fontSize: '$lg',
        color: '$gray100'
      },
        
      span: {
        fontSize: '$xl',
        fontWeight: 'bold',
        color: '$green300'
      },
    },

    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '$green500',
      border: 'none',
      borderRadius: 6,
      color: '$white',
      cursor: 'pointer',

      padding: 12,

      '&:hover': {
        background: '$green300',
      }
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  }
})