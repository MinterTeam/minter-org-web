import faker from 'faker';
import minterorg from '~/api/minterorg';

/**
 * @param data
 * @return {Promise<User|{confirmations: Array}>}
 */
export function register(data) {
    return minterorg.register(data, true);
}

/**
 * @return {Promise<Card>}
 */
export function getUserCard() {
    return Promise.resolve({
        bg: faker.image.abstract(1920, 400),
        avatar: faker.internet.avatar(),
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        description: /*faker.name.jobArea() + ' ' + faker.name.jobTitle()*/ faker.lorem.sentences(),
        content: {
            title: faker.lorem.sentence(),
            desc1: faker.lorem.paragraph(),
            desc2: faker.lorem.paragraph(),
            video: '',
        }
    })
}

/**
 * @return {Promise<Card>}
 */
export function getProductCard() {
    return Promise.resolve({
        bg: faker.image.abstract(1920, 400),
        avatar: faker.image.technics(175, 175),
        image: faker.image.image(640, 360),
        name: faker.commerce.productAdjective() + ' ' + faker.commerce.productMaterial() + ' ' + faker.commerce.color() + ' ' + faker.commerce.product(),
        description: faker.lorem.sentences(),
        author: faker.name.firstName() + ' ' + faker.name.lastName(),
        content: {
            title: 'About',
            desc1: 'Prospectus Pro is a new and bold contemporary serif typeface in 48 styles, designed by Dave Bailey, and available exclusively from The Lost Type Co-op. Try the fonts yourself on the mini-site here!',
            title2: 'Licensing',
            desc2: 'You can Pay-What-You-Want for a Personal Use License.  A 1-5 User Commercial License is available for $175 USD.  Additional licensing for up to 100 users is also available.',
            video: '',
        }
    })
}




/**
 * @typedef Card
 * @property {string} bg
 * @property {string} avatar
 * @property {string} image
 * @property {string} name
 * @property {string} description
 * @property {string} author
 * @property {Object} content
 * @property {string} content.title
 * @property {string} content.desc1
 * @property {string} content.desc2
 * @property {string} content.video
 */
