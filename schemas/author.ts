import { defineField, defineType } from 'sanity';

const authorSchema = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: rule => rule.required(),
    }),
    defineField({
      title: 'Avatar',
      name: 'avatar',
      type: 'image',
      validation: rule => rule.required(),
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'string',
    }),
  ],
});

export default authorSchema;
