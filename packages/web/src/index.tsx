import ApolloClient from 'apollo-boost';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';

import App from './App';

const GRAPHQL_API_URL = 'http://localhost:8080/graphql';

const CLIPS = [
  {
    __typename: 'Clip',
    end: 30,
    id: '0',
    name: 'Clip One',
    start: 10
  },
  {
    __typename: 'Clip',
    end: 45,
    id: '1',
    name: 'Clip Two',
    start: 31
  }
];

const client = new ApolloClient({
  clientState: {
    resolvers: {
      Query: {
        localHello(obj: any, { subject }: { subject: string }) {
          return `Hello, ${subject}! from Web UI`;
        },
        localClips: () => CLIPS
        /*
        localClips(obj: any, { clips }: { clips: [any] }) {
          return CLIPS;
        }
        */
        // localClips: (obj: any, { clips }: { clips: [any] }) => CLIPS
        // localClips: (obj: any, { clips }: { clips: [any] }) => CLIPS
      }
    }
  },
  uri: GRAPHQL_API_URL
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
