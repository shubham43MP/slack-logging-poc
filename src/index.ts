import express from 'express';
import dotenv from 'dotenv'
import { logger } from './utils/logger'
import { Synchronizer } from './utils/spammer'

const app = express();
dotenv.config()
const port = 8080 // default port to listen

const sync = new Synchronizer()
sync.harmonize()

// start the Express server
app.listen( port, () => {
    logger.info('=================================');
    logger.info(`🚀 App listening on the port ${port}`);
    logger.info('=================================');
} )