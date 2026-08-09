# زمین‌نما — ZaminNama (zaminnama/init)

این شاخه شامل منابع اولیه برای دموی پروژه‌ی «زمین‌نما» است: داده‌های نمونه، لوگوها، اسکافولد فرانت‌اند (React + Vite + Tailwind RTL-ready)، مستندات و مشخصات استودیو AI.

لینک دموی آنلاین: https://zamin-nama-ai.lovable.app/

محتویات شاخه:
- /design: لوگوهای SVG (نسخهٔ مینیمال و توپوگرافی)
- /data/seeds: seed JSON با 30 رکورد زمین و یک GeoJSON برای محدوده‌ها
- /frontend: اسکافولد React + Vite + Tailwind (نسخهٔ اولیه demo)
- /ai-studio: مستندات API و نمونه خروجی
- .env.example: متغیرهای محیطی placeholder
- README.dev.md: دستورالعمل اجرای لوکال و توضیحات

نحوه اجرا (مختصر):
1. در شاخه `/frontend` دستور `npm install` سپس `npm run dev` را اجرا کنید.
2. کلیدهای Mapbox/Cesium را در `.env` قرار دهید یا تغییر دهید.

موارد بعدی که می‌توانم انجام دهم:
- کامل کردن UI صفحات و اتصال Mapbox/Cesium (نیاز به API keys)
- تولید و آپلود مدل‌های glTF نمونه برای چند زمین
- آپلود فایل Figma یا لینک پروژه‌ی Figma

