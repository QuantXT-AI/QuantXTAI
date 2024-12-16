import React from "react";

import Container from "./_components/container";

interface IPageProps {
  searchParams: {
    type: string;
  };
}

export default function Page({ searchParams }: IPageProps) {
  return <Container type={searchParams.type} />;
}
