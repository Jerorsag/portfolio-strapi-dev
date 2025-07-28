/**
 * `global-populate` middleware
 */

import { Strapi } from '@strapi/strapi';

const populate = {
    banner: {
      populate: {
        link: true,
      },
    },
    header: {
      populate: {
        logo: {
          populate: {
            icon: {
              fields: ["alternativeText", "url"],
            },
          },
        },
        navItems: true,
        socialLinks: {
          populate: {
            icon: {
              fields: ["alternativeText", "url"],
            },
          },
        },
      },
    },
    footer: {
      populate: {
        logo: {
          populate: {
            icon: {
              fields: ["alternativeText", "url"],
            },
          },
        },
        navItems: true,
        socialLinks: {
          populate: {
            icon: {
              fields: ["alternativeText", "url"],
            },
          },
        },
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