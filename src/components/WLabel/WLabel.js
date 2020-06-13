import styled from 'styled-components'

export const WLabel = styled.label`
  padding: 0 0.5rem 0 0;
  font-size: ${(props) => props.theme.defaults.font};
  ${(props) =>
    props.theme.wavelib.WLabel.overlap
      ? `
  position: relative;
  top: 0.8rem;
  background-color: #fff;`
      : ''}
`

WLabel.defaultProps = {
  overlay: false
}
