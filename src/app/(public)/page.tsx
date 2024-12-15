import Link from "next/link";

export default async function Page() {
  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-center">
      Homepage
      <br />
      <Link href="/chatbot/good" className="text-blue-500 hover:underline">
        Chatbot Good
      </Link>
      <Link href="/chatbot/bad" className="text-blue-500 hover:underline">
        Chatbot Bad
      </Link>
    </div>
  );
}
