import type {KnipConfig} from 'knip';

const config: KnipConfig = {
  exclude: ['types'],
  compilers: {
    graphql: () => '',
  }
};

export default config;
