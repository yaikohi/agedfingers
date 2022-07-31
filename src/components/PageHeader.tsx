import Head from "next/head";
import React from "react";

type PageHeaderProps = {
  title?: string;
  description?: string;
};

export default function PageHeader({
  title = "Aged Fingers",
  description = "Online Elden Ring Build builder.",
}: PageHeaderProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
