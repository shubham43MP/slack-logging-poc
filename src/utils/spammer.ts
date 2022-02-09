import { v4 as uuidv4 } from 'uuid'
import { movieApiFaker } from '../apis/movie.api'
import { logger } from './logger'
import { SlackController } from '../instances/slack'
import { LogController } from '../instances/log'
import { Movie } from '../interface/movie.interface'

export class Synchronizer {
    slackInst = new SlackController()
    logInst = new LogController()

    harmonize = () => {
        try {
            setInterval(() => {
                movieApiFaker().then(async (data: Movie) => {
                    try {
                        // This is the place where one can add multiple instance to emit to different places
                        this.slackInst.publishMessage(`${ uuidv4() }`, JSON.stringify(data))
                        this.logInst.logMessage(data)
                    } catch (e) {
                        logger.info('Error Caught while Synchronising')
                    }
                })
            }, 10000)
        } catch(e) {
            logger.info('Internal Server Occured')
        }
    }
}