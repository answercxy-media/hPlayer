import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

const input = 'src/index.ts';
const name = 'HPlayer';

export default [
  {
    input,
    plugins: [
      commonjs({
        sourceMap: false
      }),
      resolve(),
      typescript()
    ],

    output: [
      {
        file: 'dist/hPlayer.js',
        format: 'umd',
        name
      },
      {
        file: 'dist/hPlayer.cjs.js',
        format: 'cjs',
        name
      },
      {
        file: 'dist/hPlayer.es.js',
        format: 'es',
        name
      }
    ]
  },
  {
    input,
    plugins: [
      commonjs({
        sourceMap: false
      }),
      resolve(),
      typescript(),
      uglify()
    ],

    output: [
      {
        file: 'dist/hPlayer.min.js',
        format: 'umd',
        name
      }
    ]
  }
];
