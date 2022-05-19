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
          gender: item.gender,
          origin: item.origin.name,
          location: item.location.name,
        };
      });
      return cleanData;
    });
};

//EXPORTAR EL SERVICIO FETCH
export default getList;
