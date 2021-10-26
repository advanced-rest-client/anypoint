import chalk from 'chalk';
import getPort, {portNumbers} from 'get-port';
import { startServer, stopServer } from './test/ExchangeApi.mjs';
/** @typedef {import('@web/dev-server').DevServerConfig} DevServerConfig */
/** @typedef {import('@web/dev-server-core').ServerStartParams} ServerStartParams */

/** @type number */
let exchangeApiPort;

/* eslint-disable consistent-return */
export default /** @type DevServerConfig */ ({
  plugins: [
    {
      name: 'mock-api',

      serve(context) {
        if (context.path === '/demo/env.js') {
          const data = {
            exchangeApiPort,
          };
          return `export default ${JSON.stringify(data)}`;
        }
        return undefined;
      },

      /**
       * @param {ServerStartParams} args
       */
      async serverStart(args) {
        exchangeApiPort = await getPort({ port: portNumbers(8000, 8100) });
        await startServer(exchangeApiPort);
        args.logger.group();
        args.logger.log(`${chalk.white('Exchange API:')} ${chalk.cyanBright(`http://localhost:${exchangeApiPort}`)}`);
        args.logger.groupEnd();
        args.logger.log('');
      },
      
      async serverStop() {
        await stopServer();
      },
    },
  ],
});
