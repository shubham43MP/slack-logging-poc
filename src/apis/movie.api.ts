import * as faker from 'faker'
import { Movie } from '../interface/movie.interface'

export const movieApiFaker = (): Promise<Movie> => {
    return new Promise((resolve) => {
    setTimeout(() => {
        const movie: Movie = {
            title: faker.lorem.word(),
            description: faker.lorem.words(),
            cast: [
                `${ faker.name.firstName() } ${ faker.name.lastName() }`,
                `${ faker.name.firstName() } ${ faker.name.lastName() }`
            ]
        }
        resolve(movie)
    }, 1500)
})
}