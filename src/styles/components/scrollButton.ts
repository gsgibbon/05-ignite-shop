import { styled } from "..";

export const ScrollRight = styled('button', {
  zIndex: 1,
  
  width: '8.5rem',
  height: '100%',
  border: 'none',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',

  position: 'absolute',
  right: 0,

  background: 'linear-gradient(to right, rgba(12, 12, 14, 0) 0%, rgba(12, 12, 14, 0.7) 100%)',

  svg: {
    color: '$gray300',
    cursor: 'pointer',

    '&:hover': {
      color: '$white'
    }
  }
})


export const ScrollLeft = styled('button', {
  zIndex: 1,
  
  width: '8.5rem',
  height: '100%',
  border: 'none',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',

  position: 'absolute',
  left: 0,

  background: 'linear-gradient(to left, rgba(12, 12, 14, 0) 0%, rgba(12, 12, 14, 0.7) 100%)',

  svg: {
    color: '$gray300',
    cursor: 'pointer',
    '&:hover': {
      color: '$white'
    }
  }
})