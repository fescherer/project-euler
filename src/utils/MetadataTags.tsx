import { appConfig } from './config'

export function MetadataTags() {
  return (
    <>
      {/*----------------- Metadata Tags -----------------*/}

      {/*----------------- opengraph-image -----------------*/}
      {/* https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image */}
      <meta property="og:image" content={appConfig.metada['og-graph'].image} />
      <meta
        property="og:image:type"
        content={appConfig.metada['og-graph'].type}
      />
      <meta
        property="og:image:width"
        content={appConfig.metada['og-graph'].width}
      />
      <meta
        property="og:image:height"
        content={appConfig.metada['og-graph'].height}
      />

      {/*----------------- twitter-image -----------------*/}
      {/* https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#twitter-image */}
      <meta name="twitter:image" content={appConfig.metada['og-graph'].image} />
      <meta
        name="twitter:image:type"
        content={appConfig.metada['og-graph'].type}
      />
      <meta
        name="twitter:image:width"
        content={appConfig.metada['og-graph'].width}
      />
      <meta
        name="twitter:image:height"
        content={appConfig.metada['og-graph'].height}
      />
      {/*----------------- opengraph-image.alt.txt -----------------*/}
      {/* https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#opengraph-imagealttxt */}
      <meta
        property="og:image:alt"
        content={appConfig.metada['og-graph'].alt}
      />
      <meta
        property="og:image:alt"
        content={appConfig.metada['og-graph'].alt}
      />

      <meta property="twitter:url" content={appConfig.metada.relCanonical} />
      <link rel="canonical" href={appConfig.metada.relCanonical} />
    </>
  )
}
