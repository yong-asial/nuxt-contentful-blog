const contentful = require('contentful');

// use default environemtn config for convenience
// these will be set via 'env' property in nuxt.config.js

const config = {
  space: '3t102s8odkme',
  accessToken: 'd674547b8aafd6973c4a32cb6c5daeaf10a9a488ffcf020c2cfff17135829482'
}

// export 'createClient' to use it in page components

module.exports = {
  createClient () {
    return contentful.createClient(config)
  }
}

