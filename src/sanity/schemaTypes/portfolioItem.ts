import { ImageIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const portfolioItem = defineType({
  name: 'portfolioItem',
  title: 'Portfolio Item',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Photography', value: 'Photography' },
          { title: 'Cinematography', value: 'Cinematography' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables UI for cropping highlighting
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date/Year Shot',
      type: 'string',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Feature on Homepage?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
})
