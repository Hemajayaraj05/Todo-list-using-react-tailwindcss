import AddTask from "../component/AddTask";
import Header from "../component/Header";
import ListTask from "../component/ListTask";

function DashBoard() {
  return (
    <>
      <Header />
      <AddTask />
      <ListTask />
    </>
  );
}

export default DashBoard;
