import { gql, useQuery } from "@apollo/client";
import HelloWorld from "../components/HelloWorld";

const STATION_QUERY = gql`
  {
    stationWithEvaId(evaId: 8000105) {
      name
      location {
        latitude
        longitude
      }
      picture {
        url
      }
    }
  }
`

export default function Home() {
  const { loading, error, data } = useQuery(STATION_QUERY)

  if ( loading ) return "Loading"
  if ( error ) return `Error: ${error}`

  return <HelloWorld station={data.stationWithEvaId} />;
}
