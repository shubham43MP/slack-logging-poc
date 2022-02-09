import { WebClient, LogLevel } from '@slack/web-api'
import { logger } from '../utils/logger';
import { config } from '../utils/constants';

// WebClient insantiates a client that can call API methods
const client = new WebClient(config.SLACK_TOKEN, {
    // LogLevel can be imported and used to make debugging simpler
    logLevel: LogLevel.DEBUG
  });

export class SlackController {
    publishMessage = async (id: string, text: string) => {
        try {
        if(config.SLACK_TOKEN === '' || config.SLACK_TOKEN === undefined) throw new Error('Please define SLACK_TOKEN in env')
          await client .chat.postMessage({
            // The token you used to initialize your app
            token: config.SLACK_TOKEN, // This token needs to be a valid one
            channel: id,
            text
          });
          logger.info('Posted successfully to Slack Channel');
        }
        catch (error) {
          logger.info(`Error Posting Slack Channel : ${ error.message }`);
        }
      }
}