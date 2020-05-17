import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

export const Button = ({ type, link, title, children, submitted }) => {
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

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset', 'link']),
  submitted: PropTypes.bool
}
