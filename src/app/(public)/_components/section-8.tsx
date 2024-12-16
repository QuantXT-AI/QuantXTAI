import Image from "next/image";
import Link from "next/link";

const items = [
  {
    title: "ABOUT",
    links: [
      {
        title: "Documentation",
        href: "/",
      },
      {
        title: "Get Token",
        href: "/",
      },
      {
        title: "Features",
        href: "/",
      },
      {
        title: "Stacking",
        href: "/",
      },
      {
        title: "FAQ",
        href: "/",
      },
    ],
  },
  {
    title: "CONNECT",
    links: [
      {
        title: "About",
        href: "/",
      },
      {
        title: "Changelog",
        href: "/",
      },
      {
        title: "Architecture",
        href: "/",
      },
      {
        title: "Resources",
        href: "/",
      },
      {
        title: "Community",
        href: "/",
      },
    ],
  },
  {
    title: "FIND US",
    links: [
      {
        title: "Twitter",
        href: "/",
      },
      {
        title: "Instagram",
        href: "/",
      },
      {
        title: "Discord",
        href: "/",
      },
      {
        title: "Telegram",
        href: "/",
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
