import { useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Vaccines = ({vaccinesData}) => {

  console.log(vaccinesData)

  return (
    <Container>
      <HeaderOptions>
        <Link href='/'>
          <p>Home</p>
        </Link>
        <Link href='/Countries'>
          <p>Countries</p>
        </Link>
      </HeaderOptions>
      <TextContainer>
        <h1>global statistics</h1>
      </TextContainer>

      <CountriesContainer>
        {
          vaccinesData.map((country, i) => (
            <SingleCountry>
              <h2>{country.Country}</h2>
              <p>Confirmed Cases: {country.TotalConfirmed}</p>
              <p>Confirmed Deaths: {country.TotalDeaths}</p>
              <p>Confirmed Recovered: {country.TotalRecovered}</p>
            </SingleCountry>
          ))
        }
      </CountriesContainer>
    </Container>
  )
}

export async function getServerSideProps(context) {
    const vaccinesData = await fetch('https://api.covid19api.com/summary').then(
      (res) => res.json()
    )
  
    return {
      props: {
        vaccinesData : vaccinesData.Countries
      },
    };
}

export default Vaccines;


const Container = styled.div`
   width: 100%;
   height: 100%;
   background: #6441A5;  /* fallback for old browsers */
   background: -webkit-linear-gradient(to right, #2a0845, #6441A5);  /* Chrome 10-25, Safari 5.1-6 */
   background: linear-gradient(to right, #2a0845, #6441A5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
   display: flex;
   flex-direction: column;
   align-items: center;
   color: white;
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

const TextContainer = styled.div`
   margin-top: 40px;
   
   h1{
     text-transform: uppercase;
   }
`

const CountriesContainer = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   padding: 20px;
   justify-content: center;
   
`

const SingleCountry = styled.div`
   width: 300px;
   margin: 10px;
   -webkit-box-shadow: 10px 10px 22px -6px rgba(0,0,0,0.75);
   -moz-box-shadow: 10px 10px 22px -6px rgba(0,0,0,0.75);
   box-shadow: 10px 10px 22px -6px rgba(0,0,0,0.75);
   background-color: transparent;
   padding: 15px;
   cursor: pointer;
   transition: transform 1s;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

   &:hover{
     transform: scale(1.1);
     transition: transform 1s;
     border: 2px solid;
   }

   h2{
     font-size: 22px;
     text-transform: uppercase;
   }

   p{
     font-size: 17.5px;
     font-weight: 300;
   }
`
