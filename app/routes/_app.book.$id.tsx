import { useParams } from "@remix-run/react";

export default
function Book() {
  const { id } = useParams();

  return <div>Book {id}</div>;
}
