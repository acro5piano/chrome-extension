#!/bin/bash

for src in $(find sites/ -name 'index.ts'); do
    outfile=$(dirname $src)/index.js
    node_modules/.bin/esbuild --bundle "$src" > $outfile
    echo "build: $src -> $outfile"
done
