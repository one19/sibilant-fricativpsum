import { ReactNode } from 'react';
import {
  ApolloClient,
  ApolloProvider as Provider,
  InMemoryCache,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://bullshit.execute-api.ap-southeast-2.amazonaws.com/stage/graphql',
  cache: new InMemoryCache(),
});

export type Props = {
  children: ReactNode;
};
const ApolloProvider = ({ children }: Props) => (
  <Provider client={client}>{children}</Provider>
);

export default ApolloProvider;
