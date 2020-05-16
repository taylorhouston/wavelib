import React, { useState } from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
