const postSchema = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      codegen: { required: true },
      validation: rule => rule.required().max(50),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      codegen: { required: true },
      validation: rule => rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
      codegen: { required: true },
      validation: rule => rule.required(),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      codegen: { required: true },
      validation: rule => rule.required(),
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'enable_comment',
      title: 'Enable Comment',
      type: 'boolean',
      codegen: { required: true },
      validation: rule => rule.required(),
    },
    {
      name: 'breif',
      title: 'Breif',
      type: 'text',
      codegen: { required: true },
      validation: rule => rule.required(),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'markdown',
      codegen: { required: true },
      validation: rule => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'thumbnail',
    },
  },
};

export default postSchema;
