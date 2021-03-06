import '../styles/CharacterList.scss';
import '../styles/CharacterDetails.scss';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router';
import Filters from './Filters';
import NotFound from './NotFound';
import getList from '../services/Api';
import Header from './Header';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import FilterGender from './FilterGender';

function App() {
  //variables de estado
  const [dataList, setDataList] = useState([]);
  const [newNameValue, setNewNameValue] = useState('');
  const [FilterStatus, setFilterStatus] = useState('');
  const [FilterGender, setFilterGender] = useState('');

  useEffect(() => {
    getList().then((dataFromApi) => {
      setDataList(dataFromApi);
    });
  }, []);

  //manejadoras
  const handleInputName = (value) => {
    setNewNameValue(value);
  };

  const handleInputStatus = (value) => {
    setFilterStatus(value);
  };

  const handleInputGender = (value) => {
    setFilterGender(value);
  };

  //filtros
  const dataFilter = dataList
    .filter((series) => {
      return series.name.toLowerCase().includes(newNameValue.toLowerCase());
    })
    .filter((series) => {
      return FilterStatus === '' ? true : series.status === FilterStatus;
    })
    .filter((series) => {
      return FilterGender === '' ? true : series.gender === FilterGender;
    });

  //datos de la película seleccionada por usuario
  const { pathname } = useLocation();
  const dataPath = matchPath('/character/:characterId', pathname);
  const characterId =
    dataPath !== null ? parseInt(dataPath.params.characterId) : null;
  const characterFound = dataList.find((item) => item.id === characterId);
  console.log({ characterId, characterFound });

  //reset
  const handleReset = () => {
    setFilterStatus('');
    setNewNameValue('');
    setFilterGender('');
  };

  return (
    <div div className="background-color">
      <Header />
      <main className="main__container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  handleInputName={handleInputName}
                  dataFilter={dataFilter}
                  handleInputStatus={handleInputStatus}
                  FilterStatus={FilterStatus}
                  handleInputGender={handleInputGender}
                  FilterGender={FilterGender}
                  handleReset={handleReset}
                />

                {/*Mi lista de peliculas*/}
                <CharacterList dataList={dataFilter} />
              </>
            }
          />

          <Route
            path="/character/:characterId"
            element={<CharacterDetail characterId={characterFound} />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
