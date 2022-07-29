import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import tag from './tag';
import post from './post';
import author from './author';
import blockContent from './block-content';

const schema = createSchema({
  name: 'default',
  types: schemaTypes.concat([author, blockContent, post, tag]),
});

export default schema;
