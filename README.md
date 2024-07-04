# here we are
hello generalhp_4hgQ3xDkantenK8w9PrCakJxX87Se81EkrWkaboun

const makeHttpRequest = (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = '';

      // Réception des chunks de données
      response.on('data', (chunk) => {
        data += chunk;
      });

      // Fin de la réception des données
      response.on('end', () => {
        if (response.statusCode === 200) {
          resolve(data);
        } else {
          reject(new Error(`Failed to fetch data, status code: ${response.statusCode}`));
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
};

// Utilisation de la fonction pour faire une requête
makeHttpRequest('https://api.github.com')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
