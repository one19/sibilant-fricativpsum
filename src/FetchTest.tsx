import { useQuery, gql } from '@apollo/client';

const fetchShit = gql`
  query QueryItems($input: JSONObject!) {
    things(input: $input) {
      consumedCapacity
      count
      items {
        id
        name
        createdAt
        updatedAt
      }
    }
  }
`;

type ThingQuery = {
  consumedCapacity: number,
  count: number,
  items: {
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  }[],
};

const FetchyBoy = () => {
  const { loading, error, data } = useQuery<{ things: ThingQuery }>(fetchShit, {
    variables: { input: { name: 'anything' } },
  });

  if (loading) return <p>loading</p>;
  if (error || !data) return <p>{error?.message ?? 'no data'}</p>;

  return (
    <ol>
      {data.things.items.map((thing) => (
        <li key={`thing-${thing.id}`}>{thing.name}</li>
      ))}
    </ol>
  );
};

export default FetchyBoy;
