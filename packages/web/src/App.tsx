import { gql } from 'apollo-boost';
import * as React from 'react';
import { Query } from 'react-apollo';

const LOCAL_HELLO = gql`
  query localHello($subject: String) {
    localHello(subject: $subject) @client
  }
`;

const SERVER_HELLO = gql`
  query serverHello($subject: String) {
    hello(subject: $subject)
  }
`;

const LocalHello = () => (
  <Query query={LOCAL_HELLO} variables={{ subject: 'World' }}>
    {({ loading, error, data }) => {
      if (loading) {
        return 'Loading...';
      }

      return <h2>Local Salutation: {error ? error.message : data.localHello}</h2>;
    }}
  </Query>
);

const ServerHello = () => (
  <Query query={SERVER_HELLO} variables={{ subject: 'World' }}>
    {({ loading, error, data }) => {
      if (loading) {
        return 'Loading...';
      }

      return (
        <h2>
          Server Salutation:&nbsp;
          {error
            ? error.message + '. You probably don`t have GraphQL Server running at the moment - thats okay'
            : data.hello}
        </h2>
      );
    }}
  </Query>
);

const LOCAL_CLIPS = gql`
  query localClips {
    localClips @client {
      id
      name
      start
      end
    }
  }
`;

const SERVER_CLIPS = gql`
  query serverClips {
    clips {
      id
      name
      start
      end
    }
  }
`;

const LocalClips = () => (
  <Query query={LOCAL_CLIPS}>
    {({ loading, error, data }) => {
      if (loading) {
        return 'Loading...';
      }
      if (error) {
        console.log('Error > ', error);
        return 'Error!!!';
      }
      console.log('LocalClips > data >>> ', data);
      return (
        <section className="ClipsList">
          <h2>LOCAL CLIPS</h2>
          {data.localClips.map((clip: any) => (
            <article key={clip.id}>
              <h1>{clip.name}</h1>
            </article>
          ))}
        </section>
      );
    }}
  </Query>
);

const ServerClips = () => (
  <Query query={SERVER_CLIPS}>
    {({ loading, error, data }) => {
      if (loading) {
        return 'Loading...';
      }
      if (error) {
        console.log('Error > ', error);
        return 'Error!!!';
      }
      console.log('ServerClips > data >>> ', data);
      return (
        <section className="ClipsList">
          <h2>SERVER CLIPS</h2>
          {data.clips.map((clip: any) => (
            <article key={clip.id}>
              <h1>{clip.name}</h1>
            </article>
          ))}
        </section>
      );
    }}
  </Query>
);

const App = () => (
  <div>
    <h1>Welcome to your own GraphQL web front end!</h1>
    <h2>You can start editing source code and see results immediately</h2>
    <LocalHello />
    <ServerHello />
    <LocalClips />
    <ServerClips />
  </div>
);

export default App;
