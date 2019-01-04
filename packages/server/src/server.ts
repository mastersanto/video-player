import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';

import schema from './schema';

import { execute, subscribe } from 'graphql';
import { createServer, Server } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';

export default async (port: number): Promise<Server> => {
  const app = express();

  const server: Server = createServer(app);

  app.use('*', cors({ origin: 'http://localhost:3000' }));

  app.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress({
      schema
    })
  );

  if (module.hot) {
    app.use(
      '/graphiql',
      graphiqlExpress({
        endpointURL: '/graphql',
        subscriptionsEndpoint: `ws://localhost:${port}/subscriptions`,
        // tslint:disable-next-line
        query:
          '# Welcome to your own GraphQL server!\n#\n' +
          '# Press Play button above to execute GraphQL query\n#\n' +
          '# You can start editing source code and see results immediately\n\n' +
          'query hello($subject:String) {\n  hello(subject: $subject)\n}\n\n' +
          'query Clip ($id:ID!) {\n  clip(id: $id) {\n    id, name, start, end\n  }\n}\n\n' +
          'query Clips {\n  clips{id, name, start, end} \n}\n\n' +
          'mutation DeleteClip($id:ID!) {\n  deleteClip(id:$id) \n}\n\n' +
          'mutation SaveClip($id:ID, $name: String, $start: Int, $end: Int) {\n' +
          '  saveClip(id:$id, name:$name, start:$start, end:$end) {\n' +
          '    id, name, start, end\n' +
          '  }\n' +
          '}\n',
        variables: { id: '0' }
      })
    );
  }

  return new Promise<Server>(resolve => {
    server.listen(port, () => {
      // tslint:disable-next-line
      new SubscriptionServer(
        {
          execute,
          subscribe,
          // tslint:disable-next-line
          schema
        },
        {
          server,
          // tslint:disable-next-line
          path: '/subscriptions'
        }
      );
      resolve(server);
    });
  });
};
