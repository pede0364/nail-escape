import {
    HomepageMeta,
  } from './dataDef';
  
/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Aimee Pederson",
  description:
    "Aimee Pederson | Frontend Developer, Conversion Rate Optimization Expert, QA Engineer",
};

/**
 * Section definition
 */
export const SectionId = {
  About: 'about',
  Contact: 'contact',
  Gallery: 'gallery',
  Header: 'header',
  Hero: 'hero',
  Services: 'services',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];