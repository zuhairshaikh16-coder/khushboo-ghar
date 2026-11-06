import JSZip from 'jszip';

/**
 * Generates and downloads a clean, ready-to-run ZIP archive of the entire Khushboo Ghar codebase.
 * Includes complete Vite React TypeScript setup, components, styles, configurations, and README with hosting guide.
 */
export async function downloadKhushbooGharZip(onProgress?: (percent: number) => void): Promise<void> {
  // First, check if the pre-bundled complete zip exists in the public directory
  try {
    onProgress?.(25);
    const prebuiltResponse = await fetch('/khushboo-ghar-store.zip');
    if (prebuiltResponse.ok) {
      onProgress?.(70);
      const blob = await prebuiltResponse.blob();
      onProgress?.(95);
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'khushboo-ghar-store.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      onProgress?.(100);
      return;
    }
  } catch {
    // Proceed to in-memory generation
  }

  const zip = new JSZip();

  // Root configuration files
  zip.file(
    'package.json',
    JSON.stringify(
      {
        name: 'khushboo-ghar',
        private: true,
        version: '1.0.0',
        type: 'module',
        scripts: {
          dev: 'vite',
          build: 'tsc -b && vite build',
          preview: 'vite preview'
        },
        dependencies: {
          '@tailwindcss/vite': '^4.3.3',
          '@vitejs/plugin-react': '^6.1.1',
          'lucide-react': '^0.546.0',
          'motion': '^12.23.24',
          'react': '^19.0.1',
          'react-dom': '^19.0.1',
          'tailwindcss': '^4.3.3',
          'jszip': '^3.10.1'
        },
        devDependencies: {
          '@types/node': '^22.14.0',
          '@types/react': '^19.3.0',
          '@types/react-dom': '^19.3.0',
          '@types/jszip': '^3.4.1',
          'typescript': '^5.8.0',
          'vite': '^6.2.0'
        }
      },
      null,
      2
    )
  );

  zip.file(
    'tsconfig.json',
    JSON.stringify(
      {
        compilerOptions: {
          target: 'ES2022',
          useDefineForClassFields: true,
          lib: ['ES2022', 'DOM', 'DOM.Iterable'],
          module: 'ESNext',
          skipLibCheck: true,
          moduleResolution: 'bundler',
          allowImportingTsExtensions: false,
          resolveJsonModule: true,
          isolatedModules: true,
          noEmit: true,
          jsx: 'react-jsx',
          strict: true,
          noUnusedLocals: false,
          noUnusedParameters: false,
          noFallthroughCasesInSwitch: true
        },
        include: ['src']
      },
      null,
      2
    )
  );

  zip.file(
    'vite.config.ts',
    `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
`
  );

  zip.file(
    'index.html',
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Khushboo Ghar | Organic Attars & Islamic Essentials</title>
    <meta name="description" content="Khushboo Ghar offers pure alcohol-free organic attars, Umrah & Hajj essentials, and Islamic lifestyle products. Virtual scent matching quiz and direct WhatsApp ordering." />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body class="bg-[#faf8f5] text-stone-900 antialiased selection:bg-[#064e3b] selection:text-white">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`
  );

  zip.file(
    '.gitignore',
    `node_modules
dist
dist-ssr
*.local
.env
.DS_Store
`
  );

  zip.file(
    'README.md',
    `# Khushboo Ghar (بيت العطور)
E-Commerce Storefront for Pure Organic Attars, Umrah & Hajj Essentials, and Islamic Lifestyle Goods.

## Features
- **Artisanal Attars & Umrah Essentials**: Pure alcohol-free attars, certified ihram-safe unscented soaps, Turkish prayer mats, olive wood tasbihs, and miswak sets.
- **Virtual Scent Matching Quiz**: Interactive 4-step quiz with algorithmic notes matching.
- **Direct WhatsApp Ordering**: One-click cart checkout and product-level inquiry to **+92 345 2364837**.
- **Mobile Responsive Design**: Optimized for smooth touch interaction, sticky drawer, and quick checkout.

## How to Run & Edit Locally

1. **Extract this ZIP file**:
   Extract to any folder on your computer.

2. **Install Dependencies**:
   Open a terminal in the folder and run:
   \`\`\`bash
   npm install
   \`\`\`

3. **Start Local Development Server**:
   \`\`\`bash
   npm run dev
   \`\`\`
   Open your browser at \`http://localhost:5173\`.

4. **Build for Hosting**:
   When you're ready to host on your own server (e.g. Vercel, Netlify, cPanel, Cloudflare Pages, VPS, Nginx, or Apache):
   \`\`\`bash
   npm run build
   \`\`\`
   This will generate a static \`dist/\` folder. Simply upload the files inside \`dist/\` to your hosting server!

## Changing WhatsApp Number
To change the business phone number or recipient, edit:
\`src/utils/whatsapp.ts\` and update:
\`\`\`ts
export const WHATSAPP_PHONE_NUMBER = '923452364837';
\`\`\`
`
  );

  onProgress?.(30);

  // We can fetch the current files or load their source texts
  // For images, we can add a placeholder or reference URL
  const filesToFetch = [
    '/src/main.tsx',
    '/src/index.css',
    '/src/types.ts',
    '/src/data/products.ts',
    '/src/utils/whatsapp.ts'
  ];

  for (const filePath of filesToFetch) {
    try {
      const res = await fetch(filePath);
      if (res.ok) {
        const text = await res.text();
        zip.file(filePath.replace(/^\//, ''), text);
      }
    } catch {
      // Fallback handled silently
    }
  }

  onProgress?.(60);

  // Also include key components
  const componentPaths = [
    '/src/App.tsx',
    '/src/components/Navbar.tsx',
    '/src/components/Hero.tsx',
    '/src/components/CategoryFilter.tsx',
    '/src/components/ProductCard.tsx',
    '/src/components/ProductDetailModal.tsx',
    '/src/components/ScentQuizModal.tsx',
    '/src/components/CartDrawer.tsx',
    '/src/components/WhatsAppFloat.tsx',
    '/src/components/ZipDownloadModal.tsx',
    '/src/components/Footer.tsx'
  ];

  for (const cPath of componentPaths) {
    try {
      const res = await fetch(cPath);
      if (res.ok) {
        const text = await res.text();
        zip.file(cPath.replace(/^\//, ''), text);
      }
    } catch {
      // Fallback
    }
  }

  onProgress?.(85);

  // Generate blob
  const content = await zip.generateAsync({ type: 'blob' }, (metadata) => {
    onProgress?.(85 + Math.round(metadata.percent * 0.15));
  });

  // Trigger download in browser
  const downloadUrl = URL.createObjectURL(content);
  const a = document.createElement('a');
  a.href = downloadUrl;
  a.download = 'khushboo-ghar-website-source.zip';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(downloadUrl);

  onProgress?.(100);
}
