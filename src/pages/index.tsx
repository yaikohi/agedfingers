import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import NavbarLink from "../components/NavbarLink";
import PageHeader from "../components/PageHeader";
import { trpc } from "../utils/trpc";

type TodoCardProps = {
  name: string;
  description: string;
};

const Home: NextPage = () => {
  return (
    <>
      <PageHeader />

      <Navbar>
        <NavbarLink href="/" link="home" />
        <NavbarLink href="/armor" link="armor" />
      </Navbar>

      <main className="container flex flex-col items-center justify-center h-screen p-4 mx-auto">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          Aged <span className="text-purple-300">Fingers</span>{" "}
        </h1>

        <p className="text-2xl text-gray-700">I need to do the following things:</p>

        <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3">
          <TodoCard name="Fix the database" description="Login, build builds, share builds?" />
          <TodoCard
            name="Functionality"
            description="Drag & drop functionality for adding items to a build."
          />
          <TodoCard name="Styling" description="Speaks for itself." />
          <TodoCard name="tRPC" description="Yeah I want to learn this." />
        </div>
        <TRPCTest />
      </main>
    </>
  );
};

const TodoCard = ({ name, description }: TodoCardProps) => {
  return (
    <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </section>
  );
};

const TRPCTest = () => {
  const session = trpc.useQuery(["auth.getSession"]);
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <div className="flex items-center justify-center w-full pt-6 text-2xl text-blue-500">
        {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
      </div>
      {session.data ? (
        <>
          <p>Hello {session.data.user?.name} </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Home;
