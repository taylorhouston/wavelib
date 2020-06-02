import React, { Fragment, useEffect } from 'react'
import styled from 'styled-components'
export const WModal = (props) => {
  useEffect(() => {
    if (props.show) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [props.show])

  const closeHandler = (e) => {
    props.closeHandler()
    document.body.style.overflow = 'auto'
  }

  const escHandler = (e) => {
    if (e.which === 27) {
      props.closeHandler()
      document.body.style.overflow = 'auto'
    }
  }

  return (
    <>
      <WModalOverlay
        data-testid={`${props.testid}overlay`}
        onMouseDown={closeHandler}
        onKeyUp={escHandler}
        show={props.show}
      />
      <WModalScrollArea show={props.show}>
        <WModalContent role='dialog'>
          <WModalX data-testid={`${props.testid}x`} onClick={closeHandler}>
            &times;
          </WModalX>
          {props.children}
        </WModalContent>
      </WModalScrollArea>
    </>
  )
}

const WModalOverlay = styled.div`
  z-index: 5000;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: auto;
  display: ${(props) => (props.show ? 'block' : 'none')};
`

const WModalContent = styled.div`
  padding: 1.5rem;
  position: relative;
  background: white;
  filter: drop-shadow(0 3px 5px mediumgray);
`

const WModalScrollArea = styled.div`
  position: relative;
  z-index: 5001;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: ${(props) => (props.show ? 'block' : 'none')};
`

const WModalX = styled.div`
  position: absolute;
  font-size: 3rem;
  z-index: 5002;
  line-height: 1.5rem;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
`

WModal.defaultProps = {
  closable: true,
  show: false,
  closeHandler: () => {}
}
