// const { createCoreController } = require("@strapi/strapi/lib/factories");
// const { createCoreController } = require('@strapi/strapi').factories;

// function populateAttribute({ components }) {
//   if (components) {
//     const populate = components.reduce((currentValue, current) => {
//       return { ...currentValue, [current.split(".").pop()]: { populate: "*" } };
//     }, {});
//     return { populate };
//   }
//   return { populate: "*" };
// }

// const getPopulateFromSchema = function (schema) {
//   return Object.keys(schema.attributes).reduce((currentValue, current) => {
//     const attribute = schema.attributes[current];
//     if (!["dynamiczone", "component"].includes(attribute.type)) {
//       return currentValue;
//     }
//     return {
//       ...currentValue,
//       [current]: populateAttribute(attribute),
//     };
//   }, {});
// };

// function createPopulatedController(uid, schema) {
//   return createCoreController(uid, () => {
//     console.log(schema.collectionName, getPopulateFromSchema(schema));
//     return {
//       async find(ctx) {
//         ctx.query = {
//           ...ctx.query,
//           populate: getPopulateFromSchema(schema),
//         };
//         return await super.find(ctx);
//       },
//       async findOne(ctx) {
//         ctx.query = {
//           ...ctx.query,
//           populate: getPopulateFromSchema(schema),
//         };
//         return await super.findOne(ctx);
//       },
//     };
//   });
// }

// module.exports = createPopulatedController;

// const { createCoreController } = require('@strapi/strapi').factories;

// const populateAttribute = ({ components }) => {
//     if (components) {
//       const populate = components.reduce((currentValue, current) => {
//         // Get the component schema using Strapi's internal APIs
//         const componentSchema = strapi.components[current];
//         if (!componentSchema) {
//           throw new Error(`Component schema not found for: ${current}`);
//         }
  
//         // Get all attributes of the component that are also components
//         const componentAttributes = Object.entries(componentSchema.attributes)
//           .filter(([, v]) => v.type === 'component')
//           .reduce(
//             (acc, [key]) => ({ ...acc, [key]: { populate: '*' } }),
//             {}
//           );
  
//         return { ...currentValue, [current.split('.').pop()]: { populate: '*' }, ...componentAttributes };
//       }, {});
//       return { populate };
//     }
//     return { populate: '*' };
//   };
  

//   const getPopulateFromSchema = (schema) => {
//     return Object.keys(schema.attributes).reduce((currentValue, key) => {
//       const attribute = schema.attributes[key];
//       if (!['dynamiczone', 'component'].includes(attribute.type)) {
//         return currentValue; // Skip attributes that are not components or dynamic zones
//       }
  
//       return {
//         ...currentValue,
//         [key]: populateAttribute(attribute), // Populate dynamic zones or components
//       };
//     }, {});
//   };
  

// function createPopulatedController(uid, schema) {
//   return createCoreController(uid, () => {
//     return {
//       async find(ctx) {
//         ctx.query = {
//           ...ctx.query,
//           populate: getPopulateFromSchema(schema),
//         };
//         return await super.find(ctx);
//       },
//       async findOne(ctx) {
//         ctx.query = {
//           ...ctx.query,
//           populate: getPopulateFromSchema(schema),
//         };
//         return await super.findOne(ctx);
//       },
//     };
//   });
// }

// module.exports = createPopulatedController;


const populateAttribute = ({ components }) => {
    if (components) {
      const populate = components.reduce((currentValue, current) => {
        const componentSchema = strapi.components[current];
        if (!componentSchema) {
          throw new Error(`Component schema not found for: ${current}`);
        }
  
        const componentAttributes = Object.entries(componentSchema.attributes)
          .filter(([, v]) => v.type === 'component')
          .reduce(
            (acc, [key]) => ({ ...acc, [key]: { populate: '*' } }),
            {}
          );
  
        return { ...currentValue, [current.split('.').pop()]: { populate: '*' }, ...componentAttributes };
      }, {});
      return { populate };
    }
    return { populate: '*' };
  };
  
  const getPopulateFromSchema = (schema) => {
    return Object.keys(schema.attributes).reduce((currentValue, key) => {
      const attribute = schema.attributes[key];
      if (!['dynamiczone', 'component'].includes(attribute.type)) {
        return currentValue;
      }
  
      return {
        ...currentValue,
        [key]: populateAttribute(attribute),
      };
    }, {});
  };
  
  // Export both functions
  module.exports = {
    populateAttribute,
    getPopulateFromSchema,
  };  
  