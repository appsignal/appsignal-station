import { gql } from "@apollo/client";
import client from "../apollo-client";

import HelloWorld from "../components/HelloWorld";

export default function Home({ station }) {
  return <HelloWorld station={station} />;
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
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
    `,
  });

  return {
    props: {
      station: data.stationWithEvaId,
    },
  };
}
