import styled from 'styled-components'
import Header from './HeaderGeneral'

const General = ({covidGeneral}) => {
  
  return (
    <Container>
      <Header covidGeneral={covidGeneral}/>
    </Container>
  )
}

export default General

const Container = styled.div`

`
