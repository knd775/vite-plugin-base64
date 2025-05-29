import { defineConfig } from "vite";
import { base64 } from "./src";

export default defineConfig({
    plugins: [base64()],
});
