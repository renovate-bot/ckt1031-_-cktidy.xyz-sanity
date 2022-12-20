import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { markdownSchema } from 'sanity-plugin-markdown';
import { codeInput } from '@sanity/code-input';
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'cktidy',
  projectId: 'n2cwm9uv',
  dataset: 'production',
  plugins: [deskTool(), media(), visionTool(), markdownSchema(), codeInput()],
  schema: {
    types: schemaTypes,
  },
});
