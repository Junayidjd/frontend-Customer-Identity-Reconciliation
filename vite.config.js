import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/identify": {
        // target: 'http://localhost:3000', // Backend server URL
        target: "https://backend-assignment-moonrider.onrender.com", // Backend server URL
        changeOrigin: true,
      },
    },
  },
});













// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// });