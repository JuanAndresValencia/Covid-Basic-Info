import Head from 'next/head'
import Image from 'next/image'
import General from '../components/General'

export default function Home({generalCovidData, vaccinesData}) {

  const allCovidCases = generalCovidData

  return (
    <div>
      <Head>
        <title>Covid WebApp</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <General covidGeneral={allCovidCases}/>
    </div>
  )
}

export async function getServerSideProps(context) {
  const generalCovidData = await fetch("https://covid-api.mmediagroup.fr/v1/cases").then(
    (res) => res.json()
  )

  const vaccinesData = await fetch('https://covid-api.mmediagroup.fr/v1/vaccines').then(
    (res) => res.json()
  )

  return {
    props: {
      generalCovidData,
      vaccinesData
    },
  };
}
