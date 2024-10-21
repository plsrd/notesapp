import { defineFunction } from '@aws-amplify/backend';

export const myFirstFunction = defineFunction({
  name: 'my-first-funciton',
  entry: './handler.ts',
});
