import type { NextPage } from "next";
import Header from "../components/header";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <section className="w-full max-w-xl mx-auto mt-12 px-4 h-full md:px-0 flex justify-between flex-wrap">
        <article className="rounded-xl shadow-lg p-4 w-[calc(50%_-_6px)] mb-4">
          <h2 className="text-2xl">Kanye west</h2>
          <p className="text-base">Listener: 1220</p>
        </article>
        <article className="rounded-xl shadow-lg p-4 w-[calc(50%_-_6px)] mb-4">
          <h2 className="text-2xl">Twice</h2>
          <p className="text-base">Listener: 1220</p>
        </article>
        <article className="rounded-xl shadow-lg p-4 w-[calc(50%_-_6px)] mb-4">
          <h2 className="text-2xl">Kanye west</h2>
          <p className="text-base">Listener: 1220</p>
        </article>
        <article className="rounded-xl shadow-lg p-4 w-[calc(50%_-_6px)] mb-4">
          <h2 className="text-2xl">Twice</h2>
          <p className="text-base">Listener: 1220</p>
        </article>
        <article className="rounded-xl shadow-lg p-4 w-[calc(50%_-_6px)] mb-4">
          <h2 className="text-2xl">Kanye west</h2>
          <p className="text-base">Listener: 1220</p>
        </article>
        <article className="rounded-xl shadow-lg p-4 w-[calc(50%_-_6px)] mb-4">
          <h2 className="text-2xl">Twice</h2>
          <p className="text-base">Listener: 1220</p>
        </article>
      </section>
    </div>
  );
};

export default Home;
