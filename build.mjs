#!/usr/bin/env node

import 'zx/globals'

await $`
for src in $(find sites/ -name 'index.ts'); do
    outfile=$(dirname $src)/index.js
    node_modules/.bin/esbuild --bundle "$src" > $outfile
    echo "build: $src -> $outfile"
done
`

const sites = await $`ls sites/`

const content_scripts = []

for (const domain of sites.stdout.trim().split(/\n/g)) {
  const content_script = {
    matches: [`https://${domain}/*`],
  }
  const [js] = await glob(`./sites/${domain}/*.js`)
  if (js) {
    content_script.js = [js]
  }
  const [css] = await glob(`./sites/${domain}/*.css`)
  if (css) {
    content_script.css = [css]
  }
  content_scripts.push(content_script)
}

const manifest = {
  manifest_version: 3,
  author: 'kazuya gosho',
  name: 'acro5piano',
  description: 'my chrome extension',
  version: '0.0.1',
  homepage_url: 'https://github.com/acro5piano/chrome-extension',
  content_scripts: content_scripts,
}

await fs.writeFile(
  './manifest.json',
  JSON.stringify(manifest, undefined, 2),
  'utf-8',
)
