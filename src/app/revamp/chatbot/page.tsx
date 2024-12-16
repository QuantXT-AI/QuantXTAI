import { getInitialMessage } from "@/utils/chat";
import Container from "./_components/container";

interface IPageProps {
  searchParams: {
    type: string;
    walletAddress: string;
  };
}

export default function Page({ searchParams }: IPageProps) {
  const { type, walletAddress } = searchParams;

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
