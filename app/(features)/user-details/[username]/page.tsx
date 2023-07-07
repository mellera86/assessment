import { BiGitRepoForked, BiWalk } from "react-icons/bi";
import {
  FollowersCard,
  OrganizationsCard,
  RepostitoryCard,
} from "./components";
import { getFollowers, getOrganizations, getRepos, getUser } from "@api";
import { Avatar } from "@shared/components";
import React from "react";

export default async function UserDetails({
  params,
}: {
  params: { username: string };
}) {
  const [repos, user, organizations, followers] = await Promise.all([
    getRepos(params?.username),
    getUser(params?.username),
    getOrganizations(params?.username),
    getFollowers(params?.username),
  ]);

  return (
    <div className="w-full flex flex-col ">
      <section className="pb-32 border-b-2">
        <div className="h-52 bg-gradient-to-r from-blue-400 to-emerald-400">
          <div className="hidden md:flex max-w-3xl mx-auto items-center justify-end h-full">
            <h1 className="text-4xl pr-12 md:pr-0 md:text-6xl font-bold text-white leading-tight">
              {user?.login}
            </h1>
          </div>
          <div className="flex relative md:absolute top-3 flex-col md:flex-row md:top-24 items-center md:left-20 md:gap-5 ">
            <Avatar
              src={user?.avatar_url!}
              alt="user avatar"
              width={220}
              height={220}
              rounded="full"
            />
            <div className="relative top-2 md:top-16 flex flex-col gap-2">
              <h1 className="text-4xl">{user?.name}</h1>
              <span className="text-xl flex items-center gap-3 justify-center md:justify-start">
                {user?.followers! > 0 && (
                  <span
                    title="Followers"
                    aria-description={`${user?.followers} followers`}
                    className="flex items-center gap-1"
                  >
                    <BiWalk />
                    {user?.followers}
                  </span>
                )}

                {user?.public_repos! > 0 && (
                  <>
                    <span>&#x2022;</span>
                    <span
                      title="Public Repositories"
                      className="flex items-center gap-1"
                      aria-description={`${user?.public_repos} public repos`}
                    >
                      <BiGitRepoForked /> {user?.public_repos}
                    </span>
                  </>
                )}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="p-8 bg-slate-100 flex flex-col md:flex-row gap-8">
        {organizations?.length > 0 && (
          <div className="flex-grow">
            <OrganizationsCard organizations={organizations} />
          </div>
        )}
        {followers?.length > 0 && (
          <div className="flex-grow">
            <FollowersCard followers={followers} />
          </div>
        )}
      </section>
      <section className="flex-grow bg-slate-200">
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-8 p-8">
          {repos?.map((repo) => {
            return (
              <React.Fragment key={repo?.id}>
                <RepostitoryCard repository={repo} />
              </React.Fragment>
            );
          })}
          {repos?.map((repo) => {
            return (
              <React.Fragment key={repo?.id}>
                <RepostitoryCard repository={repo} />
              </React.Fragment>
            );
          })}
          {repos?.map((repo) => {
            return (
              <React.Fragment key={repo?.id}>
                <RepostitoryCard repository={repo} />
              </React.Fragment>
            );
          })}
          {repos?.map((repo) => {
            return (
              <React.Fragment key={repo?.id}>
                <RepostitoryCard repository={repo} />
              </React.Fragment>
            );
          })}
          {repos?.map((repo) => {
            return (
              <React.Fragment key={repo?.id}>
                <RepostitoryCard repository={repo} />
              </React.Fragment>
            );
          })}
          {repos?.map((repo) => {
            return (
              <React.Fragment key={repo?.id}>
                <RepostitoryCard repository={repo} />
              </React.Fragment>
            );
          })}
        </div>
      </section>
    </div>
  );
}
