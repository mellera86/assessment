import { User } from "./users";

const getRepos = async (username: string): Promise<Repository[]> => {
  const response = await fetch(
    `${process.env.GITHUB_API_URL}/users/${username}/repos`
  );
  const data = await response.json();
  return data;
};

export interface Repository {
  id?: number;
  node_id?: string;
  name?: string;
  full_name?: string;
  private?: boolean;
  owner?: User;
  html_url?: string;
  description?: string;
  created_at?: string;
  language?: string;
}

export { getRepos };
