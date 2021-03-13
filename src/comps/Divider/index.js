import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 314px;
  display: flex;
  justify-content: space-between;
  color: #ffff;
`
const HrCont = styled.div`
  width: 40%;
`

const Divider = () => {
  return (
    <Container>
      <HrCont>
        <hr />
      </HrCont>
      or
      <HrCont>
        <hr />
      </HrCont>
    </Container>
  )
}

Divider.defaultProps = {}

export default Divider
