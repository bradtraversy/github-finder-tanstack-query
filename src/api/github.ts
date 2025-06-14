export const fetchGithubUser = async (username: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_GITHUB_API_URL}/users/${username}`
  );

  if (!res.ok) throw new Error('User not found');

  const data = await res.json();
  return data;
};

export const searchGithubUser = async (query: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_GITHUB_API_URL}/search/users?q=${query}`
  );

  if (!res.ok) throw new Error('User not found');

  const data = await res.json();
  return data.items;
};
