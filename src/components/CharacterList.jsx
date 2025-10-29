function CharacterList({ characters }) {
  return (
    <div className="character-list">
      {characters.map((char) => (
        <div
          className="character-card"
          key={char.id}
        >
          <img
            src={char.image}
            alt={char.title}
          />
          <h3>{char.title}</h3>
          <p className="date">{char.date}</p>
          <p className="caption">{char.caption}</p>
        </div>
      ))}
    </div>
  );
}

export default CharacterList;
