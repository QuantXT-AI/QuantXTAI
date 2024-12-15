import React from "react";
import Container from "./_components/container";

interface PageProps {
  searchParams: {
    type: string;
  };
}

export default function Page({ searchParams }: PageProps) {
  return <Container type={searchParams.type} />;
}
