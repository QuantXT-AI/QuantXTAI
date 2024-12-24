import Image from "next/image";
import Link from "next/link";

const items = [
  {
    title: "ABOUT",
    links: [
      {
        title: "Foundation",
        href: "/foundation",
      },
      {
        title: "Trading Lab",
        href: "/trading-lab",
      },
      {
        title: "Ecosystem",
        href: "/ecosystem",
      },
      {
        title: "Partners",
        href: "/partners",
      },
    ],
  },
  {
    title: "CONNECT",
    links: [
      {
        title: "Community",
        href: process.env.NEXT_PUBLIC_COMMUNITY_URL ?? '',
      },
      {
        title: "Docs",
        href: process.env.NEXT_PUBLIC_DOCS_URL ?? '',
      },
      {
        title: "Chatbot",
        href: "/cryaistal-agent",
      },
    ],
  },
  {
    title: "FIND US",
    links: [
      {
        title: "Twitter",
        href: process.env.NEXT_PUBLIC_X_URL ?? '',
      },
      {
        title: "Instagram",
        href: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? '',
      },
      {
        title: "Discord",
        href: process.env.NEXT_PUBLIC_DISCORD_URL ?? '',
      },
      {
        title: "Telegram",
        href: process.env.NEXT_PUBLIC_TELEGRAM_URL ?? '',
      },
    ],
  },
];

export default function Section8() {
  return (
    <footer className="w-full">
      <div className="w-full bg-[url('/assets/home/section-8/bg.png')] bg-cover bg-bottom bg-no-repeat">
        <div className="container mx-auto h-full w-full max-w-6xl px-4 pb-48 pt-16">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div>
              <h4 className="text-2xl font-bold text-white">
                <Image
                  src="/assets/home/section-8/logo.png"
                  alt=""
                  width={480}
                  height={480}
                  className="h-16 w-auto"
                />
              </h4>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {items?.map((item, index) => {
                return (
                  <div key={index}>
                    <p className="mb-4 text-xl font-medium text-white">
                      {item?.title}
                    </p>
                    <div className="flex flex-col gap-2">
                      {item?.links?.map((link, index) => {
                        return (
                          <Link
                            href={link?.href}
                            className="text-sm font-normal text-white/50 md:text-base"
                            key={index}
                          >
                            {link?.title}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
