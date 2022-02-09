import { Movie } from '../interface/movie.interface';
import { logger } from '../utils/logger';

export class LogController {
    logMessage = (movieData: Movie) => {
        try {
            logger.info('Logging Movie data', movieData)
        } catch(e) {
            logger.info(`Caught while logging movie data: ${ e.message }`);
        }
    }
}