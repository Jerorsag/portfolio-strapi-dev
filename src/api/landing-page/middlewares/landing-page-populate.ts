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
        }
      },
      'blocks.about': {
        populate: {
          softSkills: true,
          technologies: {
            populate: {
              icon: {
                fields: ['alternativeText', 'url'],
              },
            },
          },
        },
      },
      'blocks.project': {
        populate: {
          proyectos: {
            populate: {
              stackUsed: {
                populate: {
                  icon: {
                    fields: ['alternativeText', 'url'],
                  },
                },
              },
              image: {
                populate: {
                  image: {
                    fields: ['alternativeText', 'url'],
                  },
                },
              },
              linksProject: true
            },
          },
        },
      },
      'blocks.contact': true,
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