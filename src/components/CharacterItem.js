import { Link } from 'react-router-dom';

function CharacterItem(props) {
  return (
    <Link to={`/character/${props.characterList.id}`}>
      <h2 className="list__li__title">{props.characterList.name} </h2>

      <img
        className="list__li__img"
        alt={props.characterList.image}
        title="Póster de la película"
        src={props.characterList.image}
      />

      <p className="list__li__status">- {props.characterList.status} -</p>
    </Link>
  );
}
export default CharacterItem;
