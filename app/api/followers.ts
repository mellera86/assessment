import { User } from "./users";

const getFollowers = async (username: string): Promise<User[]> => {
  const response = await fetch(
    `${process.env.GITHUB_API_URL}/users/${username}/followers`
  );
  const data = await response.json();
  return data;
};

export { getFollowers };
