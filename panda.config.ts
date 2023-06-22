import { defineConfig } from '@pandacss/dev'
 
export default defineConfig({
  preflight: true,
  include: ['./imports/ui/**/*.{ts,tsx,js,jsx}', './client/**/*.{ts,tsx,js,jsx}', ],
  exclude: [],
  outExtension: "js",
  outdir: 'styled-system'
})