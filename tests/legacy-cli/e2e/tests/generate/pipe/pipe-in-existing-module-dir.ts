import { join } from 'path';
import { ng } from '../../../utils/process';
import { expectFileToMatch } from '../../../utils/fs';

export default function () {
  const modulePath = join('src', 'app', 'foo', 'foo.module.ts');

  return Promise.resolve()
    .then(() => ng('generate', 'module', 'foo'))
    .then(() => ng('generate', 'pipe', 'foo', '--no-flat'))
    .then(() => expectFileToMatch(modulePath, /import { FooPipe } from '.\/foo.pipe'/));
}
