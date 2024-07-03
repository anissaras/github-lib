import axios from 'axios';


const GITHUB_API_URL = 'https://api.github.com';

const githubClient = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Authorization: `token `,
  },
});

export const getCommitBySHA = async (owner: string, repo: string, sha: string) => {
  try {
    const response = await githubClient.get(`/repos/${owner}/${repo}/commits/${sha}`);
    return response.data;
  } catch (error) {
    throw new Error();
  }
};
