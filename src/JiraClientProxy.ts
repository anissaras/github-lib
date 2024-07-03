import fetch from 'node-fetch';
import { HttpProxyAgent } from 'http-proxy-agent';
import dotenv from 'dotenv';

dotenv.config();

const JIRA_API_URL = 'https://your-jira-instance.atlassian.net';
//const proxyAgent = new HttpProxyAgent(process.env.PROXY_URL);

const proxyAgent = true;

const auth = Buffer.from(`${process.env.JIRA_USERNAME}:${process.env.JIRA_PASSWORD}`).toString('base64');

export const getJiraIssueByKey = async (issueKey: string) => {
  try {
    const response = await fetch(`${JIRA_API_URL}/rest/api/2/issue/${issueKey}`, {
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      agent: proxyAgent,
    });

    if (!response.ok) {
      throw new Error(`JIRA API responded with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error();
  }
};
