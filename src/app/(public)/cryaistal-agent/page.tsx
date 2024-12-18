import type { CHARACTERS } from "@/config";
import { getInitialMessage } from "@/utils/chat";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import Container from "./_components/container";

interface IPageProps {
  searchParams: Promise<{
    type: string;
    walletAddress: string;
    wallet:string;
  }>;
}

export default async function Page({ searchParams }: IPageProps) {
  const { type, walletAddress, wallet } = await searchParams;

  if (!type) {
    const defaultType = "GOOD";
    return redirect(
      `/cryaistal-agent?type=${defaultType}${walletAddress ? `&walletAddress=${walletAddress}` : ""}${wallet ? `&wallet=${wallet}` : ""}`,
    );
  }

  const firstAskQuestionPromise = getInitialMessage({
    character: type,
    walletAddress,
  });

  return (
    <Suspense
      key={walletAddress}
      fallback={
        <div className="flex min-h-screen items-center justify-center text-white">
          Loading...
        </div>
      }
    >
      <Container
        type={type as (typeof CHARACTERS)[number]["id"]}
        walletAddress={walletAddress}
        wallet={wallet}
        firstAskQuestionPromise={firstAskQuestionPromise}
      />
    </Suspense>
  );
}
