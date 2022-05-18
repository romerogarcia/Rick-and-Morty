const getList = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())

    .then((data) => {
      console.log(data);
      const cleanData = data.results.map((item, index) => {
        return {
          name: item.name,
          status: item.status,
          species: item.species,
          image: item.image,
          id: index,
          episode: item.episode,
        };
      });
      return cleanData;
    });
};

//EXPORTAR EL SERVICIO FETCH
export default getList;
