import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const WButton = ({ type, link, title, children, submitted, clickHandler }) => {
  return (
    <>
      {type !== 'link' && (
        <Button onClick={clickHandler} type={type}>
          {submitted ? '' : children}
        </Button>
      )}
      {type === 'link' && (
        <Anchor href={link} title={title}>
          {children}
        </Anchor>
      )}
    </>
  )
}

WButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset', 'link']),
  submitted: PropTypes.bool
}

const Button = styled.button`
  margin: 1rem 0;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  height: 4rem;
  border: 0;
`

const Anchor = styled.a`
  margin: 1rem 0;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  height: 4rem;
  background-color: lightgray;
`
