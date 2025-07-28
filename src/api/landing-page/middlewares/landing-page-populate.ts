/**
 * `landing-page-populate` middleware
 */

import { Strapi } from '@strapi/strapi';

const populate = {
    blocks: {
      on: {
        'blocks.hero': {
          populate: {
            links: true,
            image: {
              fields: ['alternativeText', 'url'],
            },
          },
        },
        'blocks.about': {
          populate: {
            softSkills: true,
          },
        },
        'blocks.project': true,
      },
    },
  }

export default (config, { strapi }: { strapi: Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    console.dir(ctx.query, { depth: null });
    ctx.query.populate = populate;
    strapi.log.info('In global-populate middleware.');
    await next();
  };
};