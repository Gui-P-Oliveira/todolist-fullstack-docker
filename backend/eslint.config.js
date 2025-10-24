import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',      
      globals: {
        ...globals.node  // Isto define 'process', 'require', etc. como globais conhecidos
      }      
    }
  },
]);
