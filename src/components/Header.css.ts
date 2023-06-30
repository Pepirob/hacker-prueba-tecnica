import { style } from '@vanilla-extract/css'

export const header = style({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#FF6600',
  gap: '16px',
  padding: '0.3rem'
})

export const link = style({
  textDecoration: 'none',
  color: 'black',
  fontWeight: '800'
})

export const image = style({
  border: '1px white solid',
  width: '1.4rem',
  margin: '0'
})
