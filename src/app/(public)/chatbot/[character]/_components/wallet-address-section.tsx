import {
  AlertCircle,
  ArrowRight,
  Loader2,
  Pencil,
  RotateCcw,
  Wallet,
} from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useState, useTransition } from "react";

import Form from "next/form";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { cn, formatZodError } from "@/lib/utils";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WalletAddressOrENSRequestSchema } from "@/dto";
import { resolveENS } from "@/lib/ens";

interface WalletAddressSectionProps {
  walletAddress?: string;
  characterId?: string;
  characterPrimaryColor?: string;
  characterAvatarImage: string;
  isPending: boolean;
  setIsExiting: (value: boolean) => void;
}

export function WalletAddressSection({
  walletAddress,
  characterId,
  characterPrimaryColor,
  characterAvatarImage,
  isPending,
  setIsExiting,
}: WalletAddressSectionProps) {
  const router = useRouter();
  const [walletAddressInput, setWalletAddressInput] = useState<string>(
    walletAddress ?? "",
  );
  const [error, setError] = useState("");
  const [isPendingRefresh, startTransition] = useTransition();
  const [isResolvingENS, setIsResolvingENS] = useState(false);

  const handleWalletSubmit = useCallback(
    async (input: string) => {
      setIsResolvingENS(true);
      setError("");

      try {
        const resolvedAddress = await resolveENS(input);

        if (!resolvedAddress) {
          setError("Invalid ENS name or Ethereum address");
          setIsResolvingENS(false);
          return;
        }

        const targetUrl = `/chatbot/${characterId}?walletAddress=${resolvedAddress}`;

        if (walletAddress !== resolvedAddress) {
          setIsExiting(true);
          setTimeout(() => {
            router.push(targetUrl);
          }, 500);
        } else {
          router.push(targetUrl);
        }
      } catch (error) {
        console.error("Error resolving ENS:", error);
        setError("Failed to resolve ENS name");
      } finally {
        setIsResolvingENS(false);
      }
    },
    [characterId, router, walletAddress, setIsExiting],
  );

  const handleRefreshSession = useCallback(() => {
    if (!walletAddress || !characterId) return;

    startTransition(async () => {
      window.location.reload();
    });
  }, [characterId, walletAddress]);

  return (
    <>
      <div className="relative border-stone-300 border-b pt-10 pb-4">
        {walletAddress && (
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 flex-grow-0"
            onClick={handleRefreshSession}
            disabled={isPending || isPendingRefresh}
          >
            <RotateCcw
              className={cn("h-4 w-4", isPendingRefresh && "animate-spin")}
            />
            <span className="sr-only">Refresh session</span>
          </Button>
        )}

        <div
          style={{ backgroundColor: characterPrimaryColor }}
          className="mx-auto mb-6 block h-[72px] w-[72px] overflow-hidden rounded-full p-2"
        >
          <Image
            src={characterAvatarImage}
            alt={characterId || ""}
            width={72}
            height={72}
            className="object-cover"
          />
        </div>

        <Form
          action=""
          className="mx-auto flex max-w-md gap-4 px-4"
          onSubmit={async (e) => {
            e.preventDefault();
            setError("");

            const result = WalletAddressOrENSRequestSchema.safeParse({
              walletAddressOrENS: walletAddressInput,
            });

            if (!result.success) {
              setError(formatZodError(result.error).details?.[0].message);
              return;
            }

            if (walletAddress) {
              setIsExiting(true);
              setTimeout(() => {
                router.push(`/chatbot/${characterId}`);
              }, 500);
            } else {
              await handleWalletSubmit(walletAddressInput);
            }
          }}
        >
          <div className="relative w-full">
            <Input
              type="text"
              id="wallet-address"
              placeholder="Enter your Ethereum address or ENS name"
              value={walletAddressInput}
              onChange={(e) => setWalletAddressInput(e.target.value)}
              disabled={isPending || isResolvingENS}
              className="w-full bg-white pl-10"
              readOnly={!!walletAddress}
            />
            <Wallet className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4" />
          </div>
          <Button
            type="submit"
            size="icon"
            disabled={isPending || isResolvingENS}
          >
            {isResolvingENS ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : walletAddress ? (
              <Pencil className="h-4 w-4" />
            ) : (
              <ArrowRight className="h-4 w-4" />
            )}
            <span className="sr-only">
              {walletAddress
                ? "Change wallet address"
                : "Submit wallet address"}
            </span>
          </Button>
        </Form>
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="mx-auto mt-4 px-4"
        >
          <Alert variant="destructive" className="bg-background">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </motion.div>
      )}
    </>
  );
}
