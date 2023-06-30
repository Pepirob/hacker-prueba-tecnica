import { style } from '@vanilla-extract/css'

export const black = style({
  color: 'black'
})

export const footer = style({
  display: 'flex',
  gap: '6px'
})

export const header = style({
  display: 'flex',
  gap: '.5rem'
})

export const commentsLink = style({
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline'
  },
  color: '#999999'
})
