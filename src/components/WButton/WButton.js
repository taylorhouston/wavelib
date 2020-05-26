import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const WButton = ({ type, link, title, children, submitted }) => {
  return (
    <>
      {type !== 'link' && (
        <button type={type} className='Button' disabled={submitted}>
          {submitted ? '' : children}
        </button>
      )}
      {type === 'link' && (
        <a className='Button__a' href={link} title={title}>
          {children}
        </a>
      )}
    </>
  )
}

WButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset', 'link']),
  submitted: PropTypes.bool
}


const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.6rem;
  height: 4rem;
`
