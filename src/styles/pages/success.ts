import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  }, 

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300'
    }
  },
  
})

export const ImageContainer = styled('div', {
  marginBottom: '4rem',

  display: 'flex',
  marginLeft: 52,
  
  '>div': {
    width: 140,
    height: 140,

    marginLeft: -52,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 100,

    img: {
      objectFit: 'cover'
    }
  }
})