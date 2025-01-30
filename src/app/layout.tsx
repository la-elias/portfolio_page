import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from "classnames";

import { Footer, Header } from "@/components/index";
import { baseURL, effects, style } from "@/app/resources";
import { headers } from "next/headers";
import { Metadata } from "next";

import { meta, og, schema, social } from "@/once-ui/resources/config";
import { Background, Column, Flex, ToastProvider } from "@/once-ui/components";

import { Inter } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

const primary = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const code = Roboto_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

type FontConfig = {
  variable: string;
};

/*
	Replace with code for secondary and tertiary fonts
	from https://once-ui.com/customize
*/
const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;
/*
 */

export async function generateMetadata(): Promise<Metadata> {
  const host = (await headers()).get("host");
  const metadataBase = host ? new URL(`https://${host}`) : undefined;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: og.title,
      description: og.description,
      url: "https://" + baseURL,
      images: [
				{
					url: og.image,
					alt: og.title,
				},
			],
      type: og.type as
        | "website"
        | "article"
        | "book"
        | "profile"
        | "music.song"
        | "music.album"
        | "music.playlist"
        | "music.radio_station"
        | "video.movie"
        | "video.episode"
        | "video.tv_show"
        | "video.other",
    },
    twitter: {
			card: 'summary_large_image',
			title: og.title,
			description: og.description,
			images: [og.image],
		},
    metadataBase,
  };
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": schema.type,
  url: "https://" + baseURL,
  logo: schema.logo,
  name: schema.name,
  description: schema.description,
  email: schema.email,
  sameAs: Object.values(social).filter(Boolean),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      as="html"
      lang="en"
      background="page"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-theme={style.theme}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
      className={classNames(
        primary.variable,
        code.variable,
        secondary ? secondary.variable : "",
        tertiary ? tertiary.variable : "",
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </head>
      {/* <body> */}
        <ToastProvider>
            <Column as="body" fillWidth  margin="0" padding="0" style={{ minHeight: "100vh" }}>
            <Background
                mask={{
                  cursor: effects.mask.cursor,
                  x: effects.mask.x,
                  y: effects.mask.y,
                  radius: effects.mask.radius,
                }}
                gradient={{
                  display: effects.gradient.display,
                  x: effects.gradient.x,
                  y: effects.gradient.y,
                  width: effects.gradient.width,
                  height: effects.gradient.height,
                  tilt: effects.gradient.tilt,
                  colorStart: effects.gradient.colorStart,
                  colorEnd: effects.gradient.colorEnd,
                  opacity: effects.gradient.opacity as
                  | 0
                  | 10
                  | 20
                  | 30
                  | 40
                  | 50
                  | 60
                  | 70
                  | 80
                  | 90
                  | 100,
                }}
                dots={{
                  display: effects.dots.display,
                  color: effects.dots.color,
                  size: effects.dots.size as any,
                  opacity: effects.dots.opacity as any,
                }}
                lines={{
                  display: effects.lines.display,
                  opacity: effects.lines.opacity as any,
                }}
                grid={{
                  display: effects.grid.display,
                  color: effects.grid.color,
                  // width: effects.grid.width as any,
                  // height: effects.grid.height as any,
                  opacity: effects.grid.opacity as any,
                }}
              />
              {/* Main content area (similar to the first layout) */}
              {/* <Flex fillWidth minHeight="16"></Flex> */}
              <Header />
              <Flex
                position="relative"
                zIndex={0}
                fillWidth
                paddingY="l"
                paddingX="l"
                horizontal="center"
                flex={1}
              >
                <Flex horizontal="center" fillWidth minHeight="0">                  
                    {children}
                </Flex>
              </Flex>

              {/* Footer at the bottom */}
              <Footer />
            </Column>
        </ToastProvider>
      {/* </body> */}
    </Flex>
  );
}
