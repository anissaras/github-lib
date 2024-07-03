import fetch from 'node-fetch';
import { HttpProxyAgent } from 'http-proxy-agent';
import dotenv from 'dotenv';

dotenv.config();

const GITHUB_API_URL = 'https://api.github.com';
// const proxyAgent = new HttpProxyAgent(process.env.PROXY_URL);

const proxyAgent = true;


export const getCommitBySHA = async (owner: string, repo: string, sha: string) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/repos/${owner}/${repo}/commits/${sha}`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
      agent: proxyAgent,
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error();
  }
};
