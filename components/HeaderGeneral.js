import Head from 'next/head'
import styled from 'styled-components'
import Link from 'next/link'

const HeaderGeneral = ({covidGeneral}) => {

  let globalData = covidGeneral.Global.All

  return (
    <Container>
      <Gradient></Gradient>
      <HeaderOptions>
        <Link href='/'>
          <p>Home</p>
        </Link>
        <Link href='/Countries'>
          <p>Countries</p>
        </Link>
      </HeaderOptions>

      <HeaderCentral>
        <TitleContainer>
          <h1>Covid Tracker</h1>
        </TitleContainer>

        <DataContainer>
          <IndividualData>
            <CasesContainer>
              <h1>CONFIRMED CASES</h1>
              <h2>{globalData.confirmed}</h2>
            </CasesContainer>
            <DeathsContainer>
              <h1>CONFIRMED DEATHS</h1>
              <h2>{globalData.deaths}</h2>
            </DeathsContainer>
            <RecoveredContainer>
              <h1>CONFIRMED RECOVERED</h1>
              <h2>{globalData.recovered}</h2>
            </RecoveredContainer>
          </IndividualData>
        </DataContainer>
      </HeaderCentral>
    </Container>
  )
}





export default HeaderGeneral;

const Container = styled.div`
   width: 100%;
   height: 100%;
   min-height: 100vh;
   background-color: purple;
   background-image: url('/images/header-covid.jpg');
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
   padding-bottom: 100px;

`

const Gradient = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  background: rgb(0,0,0);
  background: linear-gradient(80deg, rgba(0,0,0,1) 13%, rgba(0,0,0,0.6474964985994398) 55%, rgba(6,1,1,1) 86%);
`

const HeaderOptions = styled.div`
   position: relative;
   color: white;
   width: 100%;
   height: auto;
   display: flex;
   justify-content: center;
   cursor: pointer;

   p{
     margin: 35px 50px;
     text-transform: uppercase;
     font-size: 19px;
     font-weight: 400;
     cursor: pointer;
     position: relative;
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   
     &:before{
       content: '';
       height: 2px;
       background-color: #9C6FD7;
       position: absolute;
       bottom: -8px;
       left: 0px;
       right: 0px;
       transform: scale(0)
       

     }
     &:hover{
       &:before{
         transform: scale(1);
         transition: all 0.5s;
       }
       
     }

     @media screen and (max-width: 600px){
       margin: 20px 20px;
     }
   
   }
`

const HeaderCentral = styled.div`
   color: white;
   position: relative;
   width: 100%;
   height: 100vh;
   min-height: 100%;
   height: auto;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`

const TitleContainer = styled.div`

   h1{
     font-size: 40px;
     text-transform: uppercase;
     margin-top: 60px;
   }
`

const DataContainer = styled.div`
   width: 80%;
   max-width: 1600px;
   display: flex;
   flex-direction: column;
   align-items: center;
`


const IndividualData = styled.div`
   position: relative;
   height: 350px;
   display: flex;
   width: 100%;
   align-items: center;
   justify-content: center;

   @media screen and (max-width: 1000px){
     flex-direction: column;
     padding-top: 70px;
   }
   
   
`

const CasesContainer = styled.div`
   cursor: pointer;
   margin: 30px;
   margin: 0 auto;
   width: 400px;
   height: 120px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   -webkit-box-shadow: -4px -8px 26px -5px rgba(156,111,215,1);
   -moz-box-shadow: -4px -8px 26px -5px rgba(156,111,215,1);
   box-shadow: -4px -8px 26px -5px rgba(156,111,215,1);
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   transition: all 1s;

   &:hover{
     transform: scale(1.2);
     transition: all 1s;
   }

   @media screen and (max-width: 1500px){
     width: 270px;
     margin: 20px;
   }

   h1{
     font-size: 25px;
     font-weight: 300;
     padding: 10px 5px;

     @media screen and (max-width: 1000px){
     font-size: 19px;
     }
   }

   @media screen and (max-width: 1000px){
     font-size: 10px;
   }

   h2{
     font-size: 20px;
     font-weight: 500;
     padding: 10px 5px;

     @media screen and (max-width: 1000px){
     font-size: 17px;
     }
   }
`

const DeathsContainer = styled(CasesContainer)`

`

const RecoveredContainer = styled(CasesContainer)`

`
