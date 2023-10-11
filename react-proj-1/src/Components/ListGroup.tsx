import { MouseEvent } from "react";

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

  //Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  //IRL Items Have Properties E.G. 'ID'
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>Items Not Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className="list-group-item"
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
// Finished For Night 22:11 - 11/10/2023
export default ListGroup;
