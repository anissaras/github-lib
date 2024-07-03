export interface Commit {
    sha: string;
    commit: {
      author: {
        name: string;
        email: string;
        date: string;
      };
      message: string;
    };
    author: {
      login: string;
      id: number;
      avatar_url: string;
    };
    // Ajoutez d'autres champs si nécessaire
  }
  