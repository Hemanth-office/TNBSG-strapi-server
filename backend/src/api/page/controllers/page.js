// 'use strict';

// /**
//  *  page controller
//  */

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::page.page');



// "use strict";

// /**
//  *  homepage controller
//  */

// const collectionType = 'page'
// const schema = require(`../content-types/${collectionType}/schema.json`);
// const createPopulatedController = require("../../../helpers/populate");

// module.exports = createPopulatedController(`api::${collectionType}.${collectionType}`, schema);


const { createCoreController } = require('@strapi/strapi').factories;
const { getPopulateFromSchema } = require('../../../helpers/populate');

module.exports = createCoreController('api::page.page', ({ strapi }) => ({
  async find(ctx) {
    // Get the schema of the current content type
    const schema = strapi.contentTypes['api::page.page'];

    // Add populate logic to the query
    ctx.query = {
      ...ctx.query,
      populate: getPopulateFromSchema(schema),
    };

    // Call the default find method
    const response = await super.find(ctx);
    return response;
  },

  async findOne(ctx) {
    const schema = strapi.contentTypes['api::page.page'];

    ctx.query = {
      ...ctx.query,
      populate: getPopulateFromSchema(schema),
    };

    const response = await super.findOne(ctx);
    return response;
  },
}));

