const getOrganizations = async (username: string): Promise<Organization[]> => {
  const response = await fetch(
    `${process.env.GITHUB_API_URL}/users/${username}/orgs`
  );
  const data = await response.json();
  return data;
};

export interface Organization {
  login?: string;
  id?: number;
  node_id?: string;
  url?: string;
  repos_url?: string;
  events_url?: string;
  hooks_url?: string;
  issues_url?: string;
  members_url?: string;
  public_members_url?: string;
  avatar_url?: string;
  description?: string;
}

export { getOrganizations };
