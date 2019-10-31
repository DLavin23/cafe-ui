import styled from 'styled-components'
import {
  background,
  border,
  boxShadow,
  color,
  compose,
  flexbox,
  layout,
  position,
  typography,
  space,
  variant,
} from 'styled-system'

const Box = styled('div')(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  compose(
    background,
    border,
    boxShadow,
    color,
    flexbox,
    layout,
    position,
    typography,
    space,
    variant
  )
)

Box.defaultProps = {
  fontFamily: 'sans',
}

export default Box
