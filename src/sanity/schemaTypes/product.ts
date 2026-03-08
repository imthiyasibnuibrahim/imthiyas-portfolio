import { TagIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Store Product',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Product Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Digital Asset', value: 'Digital Asset' },
          { title: 'Physical Print', value: 'Physical Print' },
          { title: 'Preset', value: 'Preset' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'rating',
      title: 'Rating (0-5)',
      type: 'number',
      initialValue: 5.0,
      validation: (Rule) => Rule.min(0).max(5),
    }),
    defineField({
      name: 'badge',
      title: 'Badge (Optional)',
      description: 'e.g., "Best Seller", "Custom Order"',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'price',
      media: 'mainImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: `$${subtitle || '0.00'}`,
        media,
      }
    },
  },
})
