import './globals.css';

export const metadata = {
  title: 'Twistr',
  description: 'A tool help you migrate tweets to Nostr',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
