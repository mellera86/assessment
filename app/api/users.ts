const getUsers = async (): Promise<User[]> => {
  const response = await fetch(`${process.env.GITHUB_API_URL}/users`);
  const data = await response.json();
  return data;
};

const getUser = async (username: string): Promise<User | undefined> => {
  const response = await fetch(
    `${process.env.GITHUB_API_URL}/users/${username}`
  );
  const data = await response.json();
  return data;
};

export interface User {
  login?: string;
  id?: number;
  node_id?: string;
  avatar_url?: string;
  gravatar_id?: string;
  url?: string;
  html_url?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  site_admin?: boolean;
  name?: string;
  company?: string | null;
  blog?: string | null;
  location?: string | null;
  email?: string | null;
  hireable?: boolean | null;
  bio?: string | null;
  twitter_username?: string | null;
  public_repos?: number;
  public_gists?: number;
  followers?: number;
  following?: number;
  created_at?: string;
  updated_at?: string;
}

export { getUsers, getUser };
