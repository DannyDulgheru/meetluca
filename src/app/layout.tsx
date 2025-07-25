import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MeetLuca Agency',
  description: 'A modern SaaS Company based in Chisinau, Moldova, crafting digital solutions for the future.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Inter:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
