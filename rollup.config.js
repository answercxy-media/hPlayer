import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
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
      typescript(),
      json(),
      postcss({
        extensions: ['.css'],
        plugins: [autoprefixer, cssnano]
      })
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
      json(),
      postcss({
        extensions: ['.css'],
        plugins: [autoprefixer, cssnano]
      }),
      serve({
        open: true, // 是否打开浏览器
        contentBase: 'dist/', // 入口HTML 文件位置
        historyApiFallback: true, // Set to true to return index.html instead of 404
        host: 'localhost',
        port: 10001
      }),
      livereload(),
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
