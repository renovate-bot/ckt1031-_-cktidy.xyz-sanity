const authorSchema = {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      title: 'Avatar',
      name: 'avatar',
      type: 'image',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },
  ],
};

export default authorSchema;
