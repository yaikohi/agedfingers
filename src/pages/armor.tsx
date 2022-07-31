import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import NavbarLink from "../components/NavbarLink";
import PageHeader from "../components/PageHeader";
import { trpc } from "../utils/trpc";

type ArmorCardProps = {
  name: string;
  description: string;
  source: string;
};

const Armor: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  const url = "https://eldenring.fanapis.com/images/armors/17f696e0685l0i0nblzy58h0qvewk.png";
  return (
    <>
      <PageHeader />

      <Navbar>
        <NavbarLink href="/" link="home" />
        <NavbarLink href="/armor" link="armor" />
      </Navbar>

      <main className="container flex flex-col items-center justify-center h-screen p-4 mx-auto">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          Armor
        </h1>
        <p className="text-2xl text-gray-700">Some armor cards</p>
        <div className="grid gap-3 pt-3 mt-3 text-left md:grid-cols-2 lg:w-2/3">
          <ArmorCard
            name="Some greaves xd"
            description="Images don't seem to display very nicely"
            source={url}
          />
        </div>
        <div className="flex items-center justify-center w-full pt-6 text-2xl text-blue-500">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div>
      </main>
    </>
  );
};

const ArmorCard = ({ name, description, source }: ArmorCardProps) => {
  return (
    <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
      <h2 className="my-2 text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <Image
        width={100}
        height={200}
        alt="Armor from Elden Ring"
        className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
        src={source}
      />
    </section>
  );
};

export default Armor;
