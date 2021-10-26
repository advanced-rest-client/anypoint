import getPort, {portNumbers} from 'get-port';
import { startServer, stopServer } from './test/ExchangeApi.mjs';

/** @typedef {import('@web/test-runner').TestRunnerConfig} TestRunnerConfig */

/** @type number */
let exchangeApiPort;

export default /** @type TestRunnerConfig */ ({
  files: 'test/**/*.test.js',
  // files: 'test/variables/*.test.js',
  nodeResolve: true,
  testFramework: {
    config: {
      timeout: 5000,
    }
  },
  plugins: [
    {
      name: 'mock-api',
      serve(context) {
        if (context.path === '/test/env.js') {
          const data = {
            exchangeApiPort,
          };
          return `export default ${JSON.stringify(data)}`;
        }
        return undefined;
      },

      async serverStart() {
        exchangeApiPort = await getPort({ port: portNumbers(8000, 8100) });
        await startServer(exchangeApiPort);
      },

      async serverStop() {
        await stopServer();
      },
    },
  ],

  
  // testRunnerHtml: testFramework =>
  // `<html>
  //   <body>
  //     <script type="module" src="${testFramework}"></script>
  //   </body>
  // </html>`,
})
