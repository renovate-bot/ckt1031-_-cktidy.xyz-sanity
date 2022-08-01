const authorSchema = {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      codegen: { required: true },
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
      codegen: { required: true },
      validation: rule => rule.required(),
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      codegen: { required: true },
      validation: rule => rule.required(),
    },
    {
      title: 'Avatar',
      name: 'avatar',
      type: 'image',
      codegen: { required: true },
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
