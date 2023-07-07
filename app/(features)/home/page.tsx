import React from "react";
import { UserCard } from "./components";
import { getUsers } from "@api";

export default async function Home() {
  const users = await getUsers();

  return (
    <div className="w-full">
      <section className="bg-gradient-to-r from-purple-500 to-indigo-600">
        <div className="mx-auto px-4 py-6 md:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Welcome to the Github User Peeker!
            </h1>
            <p className="text-lg md:text-xl text-white mb-12">
              Click on a user to peek!
            </p>
          </div>
        </div>
      </section>
      <section className="bg-indigo-300 p-6">
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-8">
          {users.map((user) => {
            return (
              <React.Fragment key={user?.id}>
                <UserCard user={user} />
              </React.Fragment>
            );
          })}
        </div>
      </section>
    </div>
  );
}
