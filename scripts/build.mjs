import { cp, mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();
const dist = resolve(root, 'dist');
const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || '';
const supabaseBucket = process.env.VITE_SUPABASE_BUCKET || 'labflow-uploads';

await mkdir(dist, { recursive: true });
await Promise.all([
  cp(resolve(root, 'index.html'), resolve(dist, 'index.html')),
  cp(resolve(root, 'app.js'), resolve(dist, 'app.js')),
  cp(resolve(root, 'styles.css'), resolve(dist, 'styles.css')),
]);

await writeFile(
  resolve(dist, 'config.js'),
  `window.LABFLOW_CONFIG = ${JSON.stringify({
    supabase: {
      url: supabaseUrl,
      anonKey: supabaseAnonKey,
      bucket: supabaseBucket,
    },
  })};\n`,
);
