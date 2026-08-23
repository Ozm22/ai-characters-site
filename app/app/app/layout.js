import './globals.css';

export const metadata = {
  title: 'منصة الذكاء الاصطناعي',
  description: 'محادثة واقعية بدون قيود',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-gray-900 text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
