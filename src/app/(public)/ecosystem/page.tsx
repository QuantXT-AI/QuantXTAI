import { createClient } from "@/client/supabase/server";
import Container from "./_components/container";

export default async function Page() {
  const supabase = await createClient();
  const { data } = await supabase.from("configs").select();

  return <Container config={data?.length ? data?.[0] : null} />;
}
