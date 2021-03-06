// gatsby-node.js
const path = require('path');


console.log({ ffffff : path.resolve(__dirname, '../packages/hooks/')});

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../packages'), 'node_modules'],
      alias: {
        '@snappmarket/ui': path.resolve(__dirname, '../packages/ui/'),
        '@snappmarket/icons': path.resolve(__dirname, '../packages/icons/'),
        '@snappmarket/helpers': path.resolve(__dirname, '../packages/helpers/'),
        '@snappmarket/hooks': path.resolve(__dirname, '../packages/hooks/'),
      }
    }
  });
};
