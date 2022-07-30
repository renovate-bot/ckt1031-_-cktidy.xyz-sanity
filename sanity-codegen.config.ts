import { SanityCodegenConfig } from 'sanity-codegen';

import prettierConfig from './prettier.config';

const config: SanityCodegenConfig = {
  schemaPath: './schemas/schema',
  outputPath: './schema.ts',
  prettierResolveConfigOptions: prettierConfig,
};

export default config;
