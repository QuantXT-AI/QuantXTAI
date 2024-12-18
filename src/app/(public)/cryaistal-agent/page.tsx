import type { CHARACTERS } from "@/config";
import { getInitialMessage } from "@/utils/chat";
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
    character: type,
    walletAddress,
  });

  return (
    // <Suspense key={walletAddress} fallback={<LoadingStatic />}>
    <Container
      type={type as (typeof CHARACTERS)[number]["id"]}
      walletAddress={walletAddress}
      firstAskQuestionPromise={firstAskQuestionPromise}
    />
    // </Suspense>
  );
}
