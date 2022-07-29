const authorSchema = {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: rule => rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: rule => rule.required().max(100),
    },
    {
      title: 'Avatar',
      name: 'avatar',
      type: 'image',
      validation: rule => rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },
  ],
};

export default authorSchema;
