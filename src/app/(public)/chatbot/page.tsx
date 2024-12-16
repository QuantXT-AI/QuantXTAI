import { getInitialMessage } from "@/utils/chat";
import { Suspense } from "react";
import Container from "./_components/container";

interface IPageProps {
  searchParams: Promise<{
    type: string;
    walletAddress: string;
  }>;
}

export default async function Page({ searchParams }: IPageProps) {
  const { type, walletAddress } = await searchParams;

  const firstAskQuestionPromise = getInitialMessage({
    character: type?.toLowerCase(),
    walletAddress,
  });

  return (
    <Suspense
      key={walletAddress}
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <Container
        type={type}
        walletAddress={walletAddress}
        firstAskQuestionPromise={firstAskQuestionPromise}
      />
    </Suspense>
  );
}
