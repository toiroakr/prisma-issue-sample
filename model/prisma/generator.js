const helper = require('@prisma/generator-helper');
const fs = require('fs');
const path = require('path');

helper.generatorHandler({
  onManifest() {
    return {
      defaultOutput: '../node_modules/@prisma/client/runtime/index.js',
      prettyName: 'Prisma Runtime Path Fixer',
    };
  },
  async onGenerate(options) {
    const output = options.generator.output?.value;

    if (output) {
      try {
        const content = fs.readFileSync(path.resolve(output)).toString().replace(/util\/types/g, 'util/support/types');
        fs.writeFileSync(output, content);
      } catch (error) {
        console.error(error);
        throw error;
      }
    } else {
      throw new Error('No output specified for Prisma Runtime Path Fixer');
    }
  },
});
