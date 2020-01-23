import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

import pkg from './package.json';

export default {
  input : 'src/index.tsx',
  output: [
    {
      file     : pkg.main,
      format   : 'cjs',
      exports  : 'named',
      sourcemap: true
    },
    {
      file     : pkg.module,
      format   : 'es',
      exports  : 'named',
      sourcemap: true
    }
  ],
  plugins: [
    postcss({
      extensions: ['.css']
    }),
    external(),
    url({ exclude: ['**/*.svg'] }),
    resolve(),
    commonjs(),
    copy({
      targets: [
        { src: 'src/iziToast.css', dest: 'dist' }
      ]
    })
  ]
};