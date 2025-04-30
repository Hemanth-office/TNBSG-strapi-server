import type { Attribute, Schema } from '@strapi/strapi';

export interface ElementsAbout extends Schema.Component {
  collectionName: 'components_elements_abouts';
  info: {
    description: '';
    displayName: 'overview';
    icon: 'emotionHappy';
  };
  attributes: {
    button_text: Attribute.String;
    Button_visibility: Attribute.Boolean;
    description: Attribute.Blocks;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    newTab: Attribute.Boolean;
    title: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
    url: Attribute.String;
  };
}

export interface ElementsBlogCards extends Schema.Component {
  collectionName: 'components_elements_blog_cards';
  info: {
    description: '';
    displayName: 'blog cards';
    icon: 'apps';
  };
  attributes: {
    blog_post: Attribute.Date;
    blog_title: Attribute.Blocks;
    sblogimage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Attribute.String;
  };
}

export interface ElementsBlogImportant extends Schema.Component {
  collectionName: 'components_elements_blog_importants';
  info: {
    description: '';
    displayName: 'blog Important';
    icon: 'apps';
  };
  attributes: {
    blog_description: Attribute.Blocks;
    blog_images: Attribute.Media<'images' | 'videos'>;
    blog_post: Attribute.Date;
    blog_title: Attribute.Blocks;
    url: Attribute.String;
  };
}

export interface ElementsContact extends Schema.Component {
  collectionName: 'components_elements_contacts';
  info: {
    displayName: 'contact';
    icon: 'phone';
  };
  attributes: {
    contact_descripition: Attribute.Blocks;
    contact_title: Attribute.Blocks;
  };
}

export interface ElementsFaq extends Schema.Component {
  collectionName: 'components_elements_faqs';
  info: {
    displayName: 'faq';
    icon: 'arrowDown';
  };
  attributes: {
    answer: Attribute.Text;
    titleQ: Attribute.String & Attribute.Required;
  };
}

export interface ElementsFeature extends Schema.Component {
  collectionName: 'components_elements_features';
  info: {
    description: '';
    displayName: 'Feature';
  };
  attributes: {
    description: Attribute.Text;
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    showLink: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String;
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface ElementsFeatureColumn extends Schema.Component {
  collectionName: 'components_slices_feature_columns';
  info: {
    description: '';
    displayName: 'Feature column';
    icon: 'align-center';
    name: 'FeatureColumn';
  };
  attributes: {
    description: Attribute.Text;
    icon: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ElementsFeatureRow extends Schema.Component {
  collectionName: 'components_slices_feature_rows';
  info: {
    description: '';
    displayName: 'Feature row';
    icon: 'arrows-alt-h';
    name: 'FeatureRow';
  };
  attributes: {
    description: Attribute.Text;
    link: Attribute.Component<'links.link'>;
    media: Attribute.Media<'images' | 'videos'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ElementsFooterSection extends Schema.Component {
  collectionName: 'components_links_footer_sections';
  info: {
    displayName: 'Footer section';
    icon: 'chevron-circle-down';
    name: 'FooterSection';
  };
  attributes: {
    links: Attribute.Component<'links.link', true>;
    title: Attribute.String;
  };
}

export interface ElementsLeader extends Schema.Component {
  collectionName: 'components_elements_leaders';
  info: {
    description: '';
    displayName: 'leader';
    icon: 'emotionHappy';
  };
  attributes: {
    Button_visibility: Attribute.Boolean;
    description: Attribute.Blocks;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
  };
}

export interface ElementsLogos extends Schema.Component {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logos';
    icon: 'apple-alt';
    name: 'logos';
  };
  attributes: {
    logo: Attribute.Media<'images'>;
    title: Attribute.String;
  };
}

export interface ElementsNews extends Schema.Component {
  collectionName: 'components_elements_news';
  info: {
    description: '';
    displayName: 'news';
    icon: 'file';
  };
  attributes: {
    news_image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    news_title: Attribute.Blocks;
    postDate: Attribute.Date;
    url: Attribute.String;
  };
}

export interface ElementsNewsBlogCards extends Schema.Component {
  collectionName: 'components_elements_news_blog_cards';
  info: {
    displayName: 'news blog cards';
    icon: 'apps';
  };
  attributes: {
    newsBlog_description: Attribute.Blocks;
    newsBlog_image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    newsBlog_post: Attribute.Date;
    newsBlog_title: Attribute.Blocks;
  };
}

export interface ElementsNotificationBanner extends Schema.Component {
  collectionName: 'components_elements_notification_banners';
  info: {
    description: '';
    displayName: 'Notification banner';
    icon: 'exclamation';
    name: 'NotificationBanner';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    link: Attribute.Component<'links.link'>;
    show: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.Text & Attribute.Required;
    type: Attribute.Enumeration<['alert', 'info', 'warning']> &
      Attribute.Required;
  };
}

export interface ElementsPlan extends Schema.Component {
  collectionName: 'components_elements_plans';
  info: {
    description: '';
    displayName: 'Pricing plan';
    icon: 'search-dollar';
    name: 'plan';
  };
  attributes: {
    description: Attribute.Text;
    isRecommended: Attribute.Boolean;
    name: Attribute.String;
    price: Attribute.Decimal;
    pricePeriod: Attribute.String;
    product_features: Attribute.Relation<
      'elements.plan',
      'oneToMany',
      'api::product-feature.product-feature'
    >;
  };
}

export interface ElementsSlider extends Schema.Component {
  collectionName: 'components_elements_sliders';
  info: {
    description: '';
    displayName: 'hero_Slider';
    icon: 'bulletList';
  };
  attributes: {
    newTab: Attribute.Boolean;
    showlink: Attribute.Boolean;
    slider_button_name: Attribute.String;
    slider_image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    slider_title: Attribute.Blocks;
    slider_visibility: Attribute.Boolean;
    sliderButton_visibility: Attribute.Boolean;
    sliderimage_visibility: Attribute.Boolean;
    title_visibility: Attribute.Boolean;
    type: Attribute.Enumeration<['primary', 'secondary']>;
    url: Attribute.String;
  };
}

export interface ElementsStatistics extends Schema.Component {
  collectionName: 'components_elements_statistics';
  info: {
    displayName: 'statistics';
    icon: 'chartPie';
  };
  attributes: {
    description: Attribute.Text;
    title: Attribute.String;
  };
}

export interface ElementsTeams extends Schema.Component {
  collectionName: 'components_elements_teams';
  info: {
    displayName: 'teams';
    icon: 'shield';
  };
  attributes: {
    Name: Attribute.String;
    profile_picture: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    role: Attribute.String;
    role_visibility: Attribute.Boolean;
    short_biography: Attribute.Text;
    teamPerson_visibility: Attribute.Boolean;
  };
}

export interface ElementsTestimonial extends Schema.Component {
  collectionName: 'components_slices_testimonials';
  info: {
    description: '';
    displayName: 'Testimonial';
    icon: 'user-check';
    name: 'Testimonial';
  };
  attributes: {
    authorName: Attribute.String & Attribute.Required;
    picture: Attribute.Media<'images'> & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    Address: Attribute.Component<'elements.contact'>;
    categories: Attribute.Relation<
      'layout.footer',
      'oneToMany',
      'api::category.category'
    >;
    footerLogo: Attribute.Component<'layout.logo'>;
    legalLinks: Attribute.Component<'links.link', true>;
    menuLinks: Attribute.Component<'links.link', true>;
    phone_email: Attribute.Component<'elements.contact', true>;
    socialLinks: Attribute.Component<'links.social-link', true>;
  };
}

export interface LayoutLogo extends Schema.Component {
  collectionName: 'components_layout_logos';
  info: {
    description: '';
    displayName: 'Logo';
  };
  attributes: {
    logoImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    logoText: Attribute.String;
  };
}

export interface LayoutNavbar extends Schema.Component {
  collectionName: 'components_layout_navbars';
  info: {
    description: '';
    displayName: 'Navbar';
    icon: 'map-signs';
    name: 'Navbar';
  };
  attributes: {
    button: Attribute.Component<'links.button-link', true>;
    links: Attribute.Component<'links.link', true>;
    navbarLogo: Attribute.Component<'layout.logo'>;
  };
}

export interface LinksButton extends Schema.Component {
  collectionName: 'components_links_simple_buttons';
  info: {
    description: '';
    displayName: 'Button';
    icon: 'fingerprint';
    name: 'Button';
  };
  attributes: {
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LinksButtonLink extends Schema.Component {
  collectionName: 'components_links_buttons';
  info: {
    description: '';
    displayName: 'Button link';
    icon: 'fingerprint';
    name: 'Button-link';
  };
  attributes: {
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
    url: Attribute.String;
    visibility: Attribute.Boolean;
  };
}

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'link';
    name: 'Link';
  };
  attributes: {
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface LinksSocialLink extends Schema.Component {
  collectionName: 'components_links_social_links';
  info: {
    description: '';
    displayName: 'Social Link';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    social: Attribute.Enumeration<['YOUTUBE', 'TWITTER', 'DISCORD', 'WEBSITE']>;
    text: Attribute.String;
    url: Attribute.String & Attribute.Required;
  };
}

export interface MetaMetadata extends Schema.Component {
  collectionName: 'components_meta_metadata';
  info: {
    description: '';
    displayName: 'Metadata';
    icon: 'robot';
    name: 'Metadata';
  };
  attributes: {
    metaDescription: Attribute.Text & Attribute.Required;
    metaTitle: Attribute.String & Attribute.Required;
  };
}

export interface SectionsAboutSections extends Schema.Component {
  collectionName: 'components_sections_about_sections';
  info: {
    displayName: 'about sections';
    icon: 'cube';
  };
  attributes: {
    about_sections: Attribute.Component<'elements.about'>;
    title: Attribute.Blocks;
  };
}

export interface SectionsBanner extends Schema.Component {
  collectionName: 'components_sections_banners';
  info: {
    description: '';
    displayName: 'banner';
    icon: 'bold';
  };
  attributes: {
    banner_title: Attribute.Blocks;
    bannerimage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsBlogs extends Schema.Component {
  collectionName: 'components_sections_blogs';
  info: {
    description: '';
    displayName: 'blogs';
    icon: 'dashboard';
  };
  attributes: {
    main_blog: Attribute.Component<'elements.blog-important'>;
    small_blogs: Attribute.Component<'elements.blog-cards', true>;
  };
}

export interface SectionsBottomActions extends Schema.Component {
  collectionName: 'components_slices_bottom_actions';
  info: {
    description: '';
    displayName: 'Bottom actions';
    icon: 'angle-double-right';
    name: 'BottomActions';
  };
  attributes: {
    buttons: Attribute.Component<'links.button-link', true>;
    description: Attribute.Text;
    title: Attribute.String;
  };
}

export interface SectionsContact extends Schema.Component {
  collectionName: 'components_sections_contacts';
  info: {
    description: '';
    displayName: 'contact';
    icon: 'cube';
  };
  attributes: {
    Address: Attribute.Component<'elements.contact'>;
    email: Attribute.Component<'elements.contact'>;
    Phone: Attribute.Component<'elements.contact'>;
  };
}

export interface SectionsFaqSection extends Schema.Component {
  collectionName: 'components_sections_faq_sections';
  info: {
    displayName: 'Faq section';
    icon: 'cube';
  };
  attributes: {
    card: Attribute.Component<'elements.faq', true>;
    descriptions: Attribute.Text;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SectionsFeatureColumnsGroup extends Schema.Component {
  collectionName: 'components_slices_feature_columns_groups';
  info: {
    displayName: 'Feature columns group';
    icon: 'star-of-life';
    name: 'FeatureColumnsGroup';
  };
  attributes: {
    features: Attribute.Component<'elements.feature-column', true>;
  };
}

export interface SectionsFeatureRowsGroup extends Schema.Component {
  collectionName: 'components_slices_feature_rows_groups';
  info: {
    displayName: 'Feaures row group';
    icon: 'bars';
    name: 'FeatureRowsGroup';
  };
  attributes: {
    features: Attribute.Component<'elements.feature-row', true>;
  };
}

export interface SectionsFeatures extends Schema.Component {
  collectionName: 'components_layout_features';
  info: {
    description: '';
    displayName: 'Features';
  };
  attributes: {
    description: Attribute.Text;
    feature: Attribute.Component<'elements.feature', true>;
    heading: Attribute.String;
  };
}

export interface SectionsGallerySection extends Schema.Component {
  collectionName: 'components_sections_gallery_sections';
  info: {
    description: '';
    displayName: 'gallery section';
    icon: 'picture';
  };
  attributes: {
    buttons: Attribute.Component<'links.button-link', true>;
    gallery_images: Attribute.Component<'shared.media', true>;
  };
}

export interface SectionsHeading extends Schema.Component {
  collectionName: 'components_sections_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    description: Attribute.String;
    heading: Attribute.String & Attribute.Required;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_slices_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'heading';
    name: 'Hero';
  };
  attributes: {
    slider: Attribute.Component<'elements.slider', true>;
  };
}

export interface SectionsHomeNewsblogSection extends Schema.Component {
  collectionName: 'components_sections_home_newsblog_sections';
  info: {
    description: '';
    displayName: 'home newsblog section';
    icon: 'cube';
  };
  attributes: {
    NB_button: Attribute.Component<'links.button-link'>;
    newsblog_cards: Attribute.Component<'elements.news-blog-cards', true>;
    newsBlog_heading: Attribute.Blocks;
  };
}

export interface SectionsLargeVideo extends Schema.Component {
  collectionName: 'components_slices_large_videos';
  info: {
    displayName: 'Large video';
    icon: 'play-circle';
    name: 'LargeVideo';
  };
  attributes: {
    description: Attribute.String;
    poster: Attribute.Media<'images'>;
    title: Attribute.String;
    video: Attribute.Media<'videos'> & Attribute.Required;
  };
}

export interface SectionsLeadForm extends Schema.Component {
  collectionName: 'components_sections_lead_forms';
  info: {
    description: '';
    displayName: 'Lead form';
    icon: 'at';
    name: 'Lead form';
  };
  attributes: {
    description: Attribute.Text;
    emailPlaceholder: Attribute.String;
    location: Attribute.String;
    submitButton: Attribute.Component<'links.button'>;
    title: Attribute.String;
  };
}

export interface SectionsNewsAndBlog extends Schema.Component {
  collectionName: 'components_sections_news_and_blogs';
  info: {
    description: '';
    displayName: 'news';
    icon: 'cube';
  };
  attributes: {
    News_section: Attribute.Component<'elements.news', true>;
  };
}

export interface SectionsOurCommunity extends Schema.Component {
  collectionName: 'components_sections_our_communities';
  info: {
    description: '';
    displayName: 'Our Community';
  };
  attributes: {
    description: Attribute.Blocks;
    heading: Attribute.String;
    images: Attribute.Component<'visibility.images'>;
  };
}

export interface SectionsOurHistory extends Schema.Component {
  collectionName: 'components_sections_our_histories';
  info: {
    description: '';
    displayName: 'Our History';
  };
  attributes: {
    description: Attribute.Blocks;
    heading: Attribute.String;
    images: Attribute.Component<'visibility.images'>;
  };
}

export interface SectionsOurLeaders extends Schema.Component {
  collectionName: 'components_sections_our_leaders';
  info: {
    description: '';
    displayName: 'our leaders';
    icon: 'emotionHappy';
  };
  attributes: {
    heading: Attribute.Blocks;
    leaders: Attribute.Component<'elements.leader', true>;
  };
}

export interface SectionsOurPrograms extends Schema.Component {
  collectionName: 'components_sections_our_programs';
  info: {
    description: '';
    displayName: 'Our Programs';
  };
  attributes: {
    description: Attribute.Blocks;
    heading: Attribute.String;
    images: Attribute.Component<'visibility.images'>;
  };
}

export interface SectionsOverviewSection extends Schema.Component {
  collectionName: 'components_sections_overview_sections';
  info: {
    description: '';
    displayName: 'Overview section';
    icon: 'cube';
  };
  attributes: {
    about: Attribute.Component<'elements.about'>;
    statistics: Attribute.Component<'elements.statistics', true>;
    title: Attribute.String;
  };
}

export interface SectionsPricing extends Schema.Component {
  collectionName: 'components_sections_pricings';
  info: {
    displayName: 'Pricing';
    icon: 'dollar-sign';
    name: 'Pricing';
  };
  attributes: {
    plans: Attribute.Component<'elements.plan', true>;
    title: Attribute.String;
  };
}

export interface SectionsRichText extends Schema.Component {
  collectionName: 'components_sections_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'text-height';
    name: 'RichText';
  };
  attributes: {
    content: Attribute.RichText;
  };
}

export interface SectionsTeams extends Schema.Component {
  collectionName: 'components_sections_teams';
  info: {
    displayName: 'teams';
    icon: 'cube';
  };
  attributes: {
    over_teams: Attribute.Component<'elements.teams', true>;
  };
}

export interface SectionsTestimonialsGroup extends Schema.Component {
  collectionName: 'components_slices_testimonials_groups';
  info: {
    description: '';
    displayName: 'Testimonials group';
    icon: 'user-friends';
    name: 'TestimonialsGroup';
  };
  attributes: {
    description: Attribute.Text;
    testimonials: Attribute.Component<'elements.testimonial', true>;
    title: Attribute.String;
  };
}

export interface SectionsVolunteer extends Schema.Component {
  collectionName: 'components_sections_volunteer_s';
  info: {
    description: '';
    displayName: 'Volunteer ';
    icon: 'user';
  };
  attributes: {
    text: Attribute.Blocks & Attribute.Required;
    volunteer_button: Attribute.Component<'links.button-link', true>;
  };
}

export interface SectionsWhatWeDo extends Schema.Component {
  collectionName: 'components_sections_what_we_dos';
  info: {
    displayName: 'What we Do';
  };
  attributes: {
    description: Attribute.Blocks;
    heading: Attribute.Blocks;
  };
}

export interface SectionsWhoWeAre extends Schema.Component {
  collectionName: 'components_sections_who_we_ares';
  info: {
    description: '';
    displayName: 'Who We Are';
  };
  attributes: {
    description: Attribute.Blocks;
    heading: Attribute.String;
    images: Attribute.Component<'visibility.images'>;
    title: Attribute.String;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    description: '';
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media<'images', true>;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    description: '';
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    author: Attribute.String;
    body: Attribute.Text & Attribute.Required;
    title: Attribute.String;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Attribute.Text & Attribute.Required;
    metaTitle: Attribute.String & Attribute.Required;
    shareImage: Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Attribute.Media<'images', true>;
  };
}

export interface SharedVideoEmbed extends Schema.Component {
  collectionName: 'components_sections_video_embeds';
  info: {
    description: '';
    displayName: 'Video Embed';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

export interface VisibilityImages extends Schema.Component {
  collectionName: 'components_visibility_images';
  info: {
    displayName: 'images';
    icon: 'eye';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    visibility: Attribute.Boolean;
  };
}

export interface VisibilityRichText extends Schema.Component {
  collectionName: 'components_visibility_rich_texts';
  info: {
    displayName: 'rich text';
    icon: 'eye';
  };
  attributes: {
    text: Attribute.Blocks;
    visibility: Attribute.Boolean;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.about': ElementsAbout;
      'elements.blog-cards': ElementsBlogCards;
      'elements.blog-important': ElementsBlogImportant;
      'elements.contact': ElementsContact;
      'elements.faq': ElementsFaq;
      'elements.feature': ElementsFeature;
      'elements.feature-column': ElementsFeatureColumn;
      'elements.feature-row': ElementsFeatureRow;
      'elements.footer-section': ElementsFooterSection;
      'elements.leader': ElementsLeader;
      'elements.logos': ElementsLogos;
      'elements.news': ElementsNews;
      'elements.news-blog-cards': ElementsNewsBlogCards;
      'elements.notification-banner': ElementsNotificationBanner;
      'elements.plan': ElementsPlan;
      'elements.slider': ElementsSlider;
      'elements.statistics': ElementsStatistics;
      'elements.teams': ElementsTeams;
      'elements.testimonial': ElementsTestimonial;
      'layout.footer': LayoutFooter;
      'layout.logo': LayoutLogo;
      'layout.navbar': LayoutNavbar;
      'links.button': LinksButton;
      'links.button-link': LinksButtonLink;
      'links.link': LinksLink;
      'links.social-link': LinksSocialLink;
      'meta.metadata': MetaMetadata;
      'sections.about-sections': SectionsAboutSections;
      'sections.banner': SectionsBanner;
      'sections.blogs': SectionsBlogs;
      'sections.bottom-actions': SectionsBottomActions;
      'sections.contact': SectionsContact;
      'sections.faq-section': SectionsFaqSection;
      'sections.feature-columns-group': SectionsFeatureColumnsGroup;
      'sections.feature-rows-group': SectionsFeatureRowsGroup;
      'sections.features': SectionsFeatures;
      'sections.gallery-section': SectionsGallerySection;
      'sections.heading': SectionsHeading;
      'sections.hero': SectionsHero;
      'sections.home-newsblog-section': SectionsHomeNewsblogSection;
      'sections.large-video': SectionsLargeVideo;
      'sections.lead-form': SectionsLeadForm;
      'sections.news-and-blog': SectionsNewsAndBlog;
      'sections.our-community': SectionsOurCommunity;
      'sections.our-history': SectionsOurHistory;
      'sections.our-leaders': SectionsOurLeaders;
      'sections.our-programs': SectionsOurPrograms;
      'sections.overview-section': SectionsOverviewSection;
      'sections.pricing': SectionsPricing;
      'sections.rich-text': SectionsRichText;
      'sections.teams': SectionsTeams;
      'sections.testimonials-group': SectionsTestimonialsGroup;
      'sections.volunteer': SectionsVolunteer;
      'sections.what-we-do': SectionsWhatWeDo;
      'sections.who-we-are': SectionsWhoWeAre;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.video-embed': SharedVideoEmbed;
      'visibility.images': VisibilityImages;
      'visibility.rich-text': VisibilityRichText;
    }
  }
}
