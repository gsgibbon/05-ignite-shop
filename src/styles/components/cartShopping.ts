import { styled } from "..";

export const CartShoppingContainer = styled('div', {
  background: '$gray800',
  width: ' 480px',
  height: '100%',
  padding: '3rem',

  position: 'absolute',
  right: 0,
  zIndex: 2,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '>p': {
    marginTop: '3rem',
    textAlign: 'center',
    fontSize: "$md",
    color: '$gray300',
  },
})

export const ListProductContainer = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  svg: {
    color: '$gray500',
    position: 'absolute',
    right: 14,
    top: 14,
    cursor: 'pointer',

    '&:hover': {
      color: '$gray300'
    },
  },

  h2: {
    fontSize: '$lg',
    lineHeight: '160%',
  },
})

export const Product = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',

  img: {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
  },

  '>div': {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    alignItems: 'flex-start',
    gap: '0.5rem',
    lineHeight: '160%',
    
    div: {
      p: {
        marginBottom: 2,
        fontSize: "$md",
        color: '$gray300',
      },
  
      strong: {
        fontSize: "$md",
        color: '$gray100',
      },
    },
  }
})

export const ButtonCartContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',

  div: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.6rem',
    
    '>button': {
      width: 20,
      height: 20,
      fontSize: '$lg',
      borderRadius: 25, 

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      background: '$green500',
      color: '$gray300',

      '&:hover': {
        background: '$green300',
        color: '$gray100'
      },
    },
    
    span: {
      color: '$gray300',
    },
  },

  button: {
    textAlign: 'initial',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '$green500',
    
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',

    "&:hover": {
      color: '$green300',
    }
  },
})

export const DetailsCart = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  div: {
    p: {
      display: 'flex',
      justifyContent: 'space-between',
  
      lineHeight: '160%',
      fontSize: '1rem',
      color: '$gray300',

      span: {
        fontSize: '$md',
      }
    },
  
    strong: {
      display: 'flex',
      justifyContent: 'space-between',
  
      lineHeight: '160%',
      fontSize: '$md',
      color: '$gray100',
  
      span: {
        fontSize: '$xl',
        lineHeight: '140%',
      }
    },
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '2rem 1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:disabled' : {
      opacity: 0.6,
      cursor: 'not-allowed'
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    }
  }
})