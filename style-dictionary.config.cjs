/** @type {import('style-dictionary').Config} */
const config = {
  source: ['src/tokens/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'src/assets/styles/generated/',
      files: [{
        destination: '_variables.scss',
        format: 'scss/variables'
      }]
    },
    css: {
      transformGroup: 'css',
      buildPath: 'src/assets/styles/generated/',
      files: [{
        destination: 'variables.css',
        format: 'css/variables',
        options: {
          selector: ':root'
        }
      }]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'src/assets/styles/generated/',
      files: [{
        destination: 'tokens.js',
        format: 'javascript/module'
      }]
    },
    ts: {
      transformGroup: 'js',
      buildPath: 'src/assets/styles/generated/',
      files: [{
        destination: 'tokens.d.ts',
        format: 'typescript/module-declarations'
      }]
    }
  }
};

module.exports = config;
