import { readFileSync } from 'fs';
import { version } from './package.json';
import { interpret } from './src/kaloc';

const args: string[] = process.argv.slice(2);
const flags: string[] = args.filter(arg => arg.startsWith('-'))

for (const flag of flags) {
  switch (flag) {
    case '--help':
    case '-h':
      console.log(`Finish later`);
      process.exit(1);
    case '--version':
    case '-v':
      console.log(`v${version}`);
      process.exit(1);
    default:
      console.log(`Unknown option: ${flag}`);
      break;
  }
}

const filePath: string = args[0];

const source: string = readFileSync(filePath, 'utf8');

const data = interpret(source);

eval(data)

