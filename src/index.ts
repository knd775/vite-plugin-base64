import { fileTypeFromBuffer } from 'file-type';
import fs from 'fs';
import type { Plugin } from 'vite';

export const base64 = async (): Promise<Plugin<any>> => {
  return  {
    name: 'vite-plugin-base64',
    enforce: 'pre' as const,
    resolveId: (id: string) => {
      const [path, query] = id.split('?');
      if (query == 'base64') {
        return path;
      }
      return null;
    },
    transform: async (_: any, id: string) => {
      const [path, query] = id.split('?');

      if (query != 'base64' || !path) return null;

      const data = fs.readFileSync(path);
      const base64 = data.toString('base64');

      const typeResult = await fileTypeFromBuffer(data);
      const type = typeResult?.mime ?? 'application/octet-stream';

      const src = `data:${type};base64,${base64}`;

      return `export default '${src}';`;
    }
  };
};
