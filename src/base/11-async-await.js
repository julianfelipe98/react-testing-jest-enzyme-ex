// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

// contatenacion de promesas

export const getImagen =() => {
    return new Promise((resolve, reject) => {
        const apiKey = "KTD3EP9UIopRGz4w9TsUqaHkgATuSkE0";
        const request = fetch(
          `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
        );
        // contatenacion de promesas
        request
          .then((resp) => resp.json())
          .then(({ data }) => {
            const { url } = data.images.original;
            resolve(url);
          })
          .catch((err) =>reject(err));
      });
    
};

