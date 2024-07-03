// import { getCommitBySHA } from './githubClient';

// const owner = 'anissaras';
// const repo = 'EshopV2';
// const sha = 'cf2ac98';

// getCommitBySHA(owner, repo, sha)
//   .then(commit => {
//     console.log('Commit Details:', commit);
//   })
//   .catch(error => {
//     console.error('Error fetching commit:', error.message);
//   });

import express from 'express';
import { getCommitBySHA } from './githubClient';

const app = express();
const port = 3000;

app.get('/commit/:owner/:repo/:sha', async (req, res) => {
  const { owner, repo, sha } = req.params;

  try {
    const commit = await getCommitBySHA(owner, repo, sha);
    res.json(commit);
  } catch (error) {
    res.status(500).json("Une erreur est survenue");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

