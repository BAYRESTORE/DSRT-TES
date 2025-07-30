DSRT-TES/
├── app/
│   ├── layout.tsx              ← Root layout (WAJIB)
│   ├── page.tsx                ← Homepage (WAJIB)
│   └── editor/
│       └── page.tsx            ← Halaman editor (OPSIONAL)
│
├── public/
│   ├── icons/
│   │   ├── icon-192x192.png    ← Ikon PWA (WAJIB)
│   │   └── icon-512x512.png
│   └── service-worker.js       ← PWA offline (WAJIB)
│
├── styles/
│   └── globals.css             ← Import Tailwind (WAJIB)
│
├── .gitignore                  ← Wajib abaikan node_modules
├── manifest.json               ← Konfigurasi PWA (WAJIB)
├── package.json                ← Konfigurasi proyek & dependensi
├── tailwind.config.js          ← Tailwind config
├── postcss.config.js           ← PostCSS untuk Tailwind
├── tsconfig.json               ← TypeScript config
├── README.md                   ← (Opsional)
