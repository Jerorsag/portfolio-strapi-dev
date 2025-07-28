import type { Attribute, Schema } from '@strapi/strapi';

export interface AboutTechCategory extends Schema.Component {
  collectionName: 'components_about_tech_categories';
  info: {
    description: '';
    displayName: 'Tech Category';
  };
  attributes: {
    categoryName: Attribute.String;
    displayOrder: Attribute.Integer;
    technologies: Attribute.Component<'project.stack-item', true>;
  };
}

export interface BlocksAbout extends Schema.Component {
  collectionName: 'components_blocks_abouts';
  info: {
    description: '';
    displayName: 'About';
  };
  attributes: {
    description: Attribute.RichText;
    heading: Attribute.String;
    softSkills: Attribute.Component<'shared.tag', true>;
    subtitle: Attribute.String;
    techCategories: Attribute.Component<'about.tech-category', true>;
  };
}

export interface BlocksContact extends Schema.Component {
  collectionName: 'components_blocks_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    description: Attribute.RichText;
    heading: Attribute.String;
    hubspotFormId: Attribute.String;
    successMessage: Attribute.String;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    description: Attribute.RichText;
    heading: Attribute.String;
    image: Attribute.Media<'images'>;
    links: Attribute.Component<'shared.link', true>;
  };
}

export interface BlocksProject extends Schema.Component {
  collectionName: 'components_blocks_projects';
  info: {
    description: '';
    displayName: 'Project';
  };
  attributes: {
    description: Attribute.RichText;
    heading: Attribute.String;
    proyectos: Attribute.Relation<
      'blocks.project',
      'oneToMany',
      'api::proyecto.proyecto'
    >;
    showAll: Attribute.Component<'shared.link', true>;
  };
}

export interface LayoutBanner extends Schema.Component {
  collectionName: 'components_layout_banners';
  info: {
    description: '';
    displayName: 'Banner';
  };
  attributes: {
    description: Attribute.Text;
    isVisible: Attribute.Boolean & Attribute.DefaultTo<false>;
    link: Attribute.Component<'shared.link'>;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    logo: Attribute.Component<'shared.logo-link', true>;
    navItems: Attribute.Component<'shared.link', true>;
    socialLinks: Attribute.Component<'shared.logo-link', true>;
    text: Attribute.Text;
  };
}

export interface LayoutHeader extends Schema.Component {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    logo: Attribute.Component<'shared.logo-link'>;
    navItems: Attribute.Component<'shared.link', true>;
    socialLinks: Attribute.Component<'shared.logo-link', true>;
  };
}

export interface ProjectFeaturedImage extends Schema.Component {
  collectionName: 'components_project_featured_images';
  info: {
    displayName: 'Featured Image';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
  };
}

export interface ProjectStackItem extends Schema.Component {
  collectionName: 'components_project_stack_items';
  info: {
    displayName: 'Stack Item';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Attribute.String;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    description: '';
    displayName: 'Link';
  };
  attributes: {
    href: Attribute.String;
    isButtonLink: Attribute.Boolean & Attribute.DefaultTo<false>;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    label: Attribute.String;
    type: Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface SharedLogoLink extends Schema.Component {
  collectionName: 'components_shared_logo_links';
  info: {
    description: '';
    displayName: 'Logo Link';
  };
  attributes: {
    href: Attribute.String;
    icon: Attribute.Media<'images'>;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    label: Attribute.String;
  };
}

export interface SharedTag extends Schema.Component {
  collectionName: 'components_shared_tags';
  info: {
    displayName: 'Tag';
  };
  attributes: {
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about.tech-category': AboutTechCategory;
      'blocks.about': BlocksAbout;
      'blocks.contact': BlocksContact;
      'blocks.hero': BlocksHero;
      'blocks.project': BlocksProject;
      'layout.banner': LayoutBanner;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'project.featured-image': ProjectFeaturedImage;
      'project.stack-item': ProjectStackItem;
      'shared.link': SharedLink;
      'shared.logo-link': SharedLogoLink;
      'shared.tag': SharedTag;
    }
  }
}
