import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const WButton = ({
  type,
  link,
  title,
  children,
  submitted,
  clickHandler,
  themeColor,
  textColor = '#fff'
}) => {
  return (
    <Button
      onClick={clickHandler}
      type={type}
      themeColor={themeColor}
      textColor={textColor}
    >
      {submitted ? '' : children}
    </Button>
  )
}

WButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  submitted: PropTypes.bool
}

const Button = styled.button`
  margin: 1rem 0;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  height: 4rem;
  border: 0;
  background-color: ${(props) =>
    props.themeColor
      ? props.theme.colors[props.themeColor]
      : props.theme.colors.primary};
`
