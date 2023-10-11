function ListGroup() {
  let items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "Beijing",
    "London",
    "Toronto",
    "Paris",
  ];
  items = [];

  //IRL Items Have Properties E.G. 'ID'
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>Items Not Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
