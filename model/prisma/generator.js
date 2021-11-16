const helper = require('@prisma/generator-helper');
const fs = require('fs');
const path = require('path');

helper.generatorHandler({
  onManifest() {
    return {
      defaultOutput: './types/_prisma',
      prettyName: 'Prisma Type Only Generator',
    };
  },
  async onGenerate(options) {
    const output = options.generator.output?.value;

    if (output) {
      try {
        // content are "Model User" & "Enums" extracted from "node_modules/.prisma/client/index.d.ts".
        let content = fs.readFileSync(path.resolve('node_modules/.prisma/client/index.d.ts')).toString();
        content = content.replace(/\/\*\*\n \* Client([\s\S]+?)\/\*\*/g, '/**')
        content = content.replace(/\/\*\*\n \* ## {2}Prisma Client[\s\S]+/g, '');
        content = content.replace(/(export const \w+):/g, '$1 =').trim();

        fs.mkdirSync(output, { recursive: true });
        fs.writeFileSync(path.join(output, 'index.ts'), content);
      } catch (error) {
        console.error(error);
        throw error;
      }
    } else {
      throw new Error('No output specified for Prisma Type Only Generator');
    }
  },
});
