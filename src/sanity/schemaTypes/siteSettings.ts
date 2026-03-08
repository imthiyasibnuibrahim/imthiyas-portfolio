import { CogIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Your Name',
      type: 'string',
      description: 'e.g., Imthiyas Ibnu Ibrahim'
    }),
    defineField({
      name: 'role',
      title: 'Current Role / Tagline',
      type: 'string',
      description: 'e.g., Computer Science Engineer & Cloud Architect'
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 4,
      description: 'The main introductory paragraph on the homepage.'
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'resume',
      title: 'Resume Document',
      type: 'file',
      description: 'Upload your PDF resume here. It will be linked in the Hero section.',
      options: {
        storeOriginalFilename: true,
      }
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Global Site Settings',
        subtitle: 'Edit Name, Hero Text, and Social Links'
      }
    }
  }
})
