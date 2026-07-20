import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Heaven Management | Votre entreprise, managée de A à Z',
  description: 'Propriété intellectuelle,Création et formalisation d\'entreprise , Comptabilité d\'entreprise de base, Accompagnement juridique, communication , un seul interlocuteur pour toutes vos bases business à Dakar, Sénégal.',
  generator: 'v0.app',
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
  keywords: ['propriété intellectuelle', 'création entreprise', 'comptabilité', 'juridique', 'Dakar', 'Sénégal'],
  openGraph: {
    title: 'Heaven Management | Votre entreprise, managée de A à Z',
    description: 'Propriété intellectuelle,Création et formalisation d\'entreprise , Comptabilité d\'entreprise de base, Accompagnement juridique, communication , un seul interlocuteur pour toutes vos bases business.',
    locale: 'fr_SN',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
