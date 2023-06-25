/* eslint-disable @next/next/no-page-custom-font */
import { Layout } from '@/components/Layout'
import './globals.css'
import { MetadataTags } from '@/utils/MetadataTags'

export const metadata = {
  title: 'Project Euler | Felipe Scherer',
  description: 'Project Euler'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* verificar */}
        {/* https://www.devmedia.com.br/html-meta-tags-entendendo-o-uso-de-meta-tags/30328 */}
        <meta httpEquiv="content-language" content="pt-br, en-US, fr" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="copyright" content="© 2023 Felipe Scherer" />
        <meta name="rating" content="general" />
        {/* <meta httpEquiv="refresh" content="3;url=https://www.mozilla.org" /> */}

        <link
          href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          rel="icon"
          href="https://user-images.githubusercontent.com/62115215/232942205-6d7ae99f-0644-41d4-8b06-91022a1b3359.svg"
        />

        <link
          rel="preconnect"
          href="https://user-images.githubusercontent.com"
        />
        <link
          rel="dns-prefetch"
          href="https://user-images.githubusercontent.com"
        />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
          type="image/png"
          sizes="any"
        />
        <MetadataTags />
      </head>

      <body className="flex h-auto min-h-full w-full flex-col">
        <div className="flex h-full flex-col">
          <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  )
}
