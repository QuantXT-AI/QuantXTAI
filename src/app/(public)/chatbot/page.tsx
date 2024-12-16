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
    character: type?.toLowerCase(),
    walletAddress,
  });

  return (
    <Container
      type={type}
      walletAddress={walletAddress}
      firstAskQuestionPromise={firstAskQuestionPromise}
    />
  );
}
