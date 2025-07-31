import { Nunito } from 'next/font/google';

import './globals.css';
import PageTransition from '@/components/PageTransition';
import Providers from '@/components/Providers';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Load Nunito from Google Fonts
const nunito = Nunito({
  weight: ['200', '300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap', // ensures text is visible immediately
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch session data on the server
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      {/* Apply Nunito font directly so it's used instantly */}
      <body className={`${nunito.className} antialiased`}>
        <Providers session={session}>
          <Header />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
