import express from 'express';
import { getCommitBySHA } from './githubClientProxy';
import { getJiraIssueByKey } from './JiraClientProxy';

const app = express();
const port = 3000;

app.get('/commit/:owner/:repo/:sha', async (req, res) => {
  const { owner, repo, sha } = req.params;

  try {
    const commit = await getCommitBySHA(owner, repo, sha);
    res.json(commit);
  } catch (error) {
    res.status(500).json("erreur github");
  }
});

app.get('/jira/:issueKey', async (req, res) => {
  const { issueKey } = req.params;

  try {
    const issue = await getJiraIssueByKey(issueKey);
    res.json(issue);
  } catch (error) {
    res.status(500).json("erreur jira");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
