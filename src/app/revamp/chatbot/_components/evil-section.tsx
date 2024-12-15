import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

import Image from "next/image";

const chatItems = [
  {
    id: 1,
    message: "Hello, how are you?",
    type: "user",
  },
  {
    id: 2,
    message: "I'm fine, thank you!",
    type: "bot",
  },
  {
    id: 3,
    message: "What's your name?",
    type: "user",
  },
];

type FormValues = {
  message: string;
};

export default function EvilSection() {
  const form = useForm<FormValues>();

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="grid grid-cols-12">
      <div
        id="landing"
        className="relative w-auto col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6"
      >
        <div className="z-0 overflow-hidden">
          <video
            src="/assets/chatbot/evil-video.mp4"
            autoPlay
            loop
            muted
            className="h-screen w-full object-cover"
          />
        </div>
      </div>
      <div
        id="chatbot"
        className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6"
      >
        <div className="h-screen w-full bg-gradient-to-b from-[#06011C] to-[#1B013C]">
          <div className="h-full w-full bg-[url('/assets/chatbot/bg-line.png')] bg-cover bg-center bg-no-repeat">
            <div className="relative h-full w-full overflow-hidden">
              <div className="h-full overflow-y-auto p-8 pb-32 pt-48 lg:pt-16 md:pt-16 sm:pt-48">
                <div className="flex flex-col gap-4">
                  {chatItems.map((item) => {
                    if (item.type === "user") {
                      return (
                        <div
                          key={item.id}
                          className="flex items-center justify-end gap-4"
                        >
                          <div className="w-[80%] rounded-[16px] bg-white/10 px-5 pb-3 pt-2">
                            <div className="text-sm text-white">
                              {item.message}
                            </div>
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={item.id}
                        className="flex w-full items-start gap-2"
                      >
                        <div className="h-12 w-12 rounded-full border border-white/25 bg-white/10">
                          <div className="flex h-full w-full items-center justify-center">
                            <Image
                              src="/assets/chatbot/profile.png"
                              alt="avatar"
                              width={480}
                              height={480}
                              className="h-4 w-auto"
                            />
                          </div>
                        </div>
                        <div className="flex w-full items-center justify-start gap-4">
                          <div className="w-[80%] px-2 pb-3 pt-2">
                            <div className="text-sm text-white">
                              {item.message}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div ref={messagesEndRef} />
              </div>
              <div className="absolute bottom-8 left-0 w-full">
                <form
                  className="flex w-full items-center gap-4 px-8"
                  onSubmit={form.handleSubmit(handleSubmit)}
                >
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Ask me anything..."
                      className="w-full rounded-full border border-white/25 bg-black/25 px-4 py-4 text-sm text-white"
                      {...form.register("message")}
                    />
                  </div>
                  <button
                    type="submit"
                    className="min-h-[58px] min-w-[58px] rounded-full border border-white/25 bg-black/25 text-white"
                  >
                    <div className="flex h-full w-full items-center justify-center">
                      <Image
                        src="/assets/chatbot/btn-icon.png"
                        alt="send"
                        width={480}
                        height={480}
                        className="h-5 w-auto"
                      />
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
