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

const FetchyBoy = () => {
  const { loading, error, data } = useQuery(fetchShit, {
    variables: { input: { name: 'anything' } },
  });

  if (loading) return <p>loading</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <ol>
      {data.things.items.map((thing: any) => (
        <li key={`thing-${thing.id}`}>{thing.name}</li>
      ))}
    </ol>
  );
};

export default FetchyBoy;
