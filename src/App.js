import { useContext } from "react";
import Table from "./components/Table";
import Insert from "./components/Insert";
import EditModal from "./components/EditModal";
import { ListContext } from "./context";
function App() {

  const {theme} = useContext(ListContext)

  return (
    <div className={`wrapper d-flex align-items-center justify-content-center ${theme}`}>
      <div
        className={`container py-4 px-3 border box-shadow ${theme}`}
      >
        <EditModal />
        <div className="row">
          <div className="col-5">
            <Insert />
          </div>
          <div className="col-7 p-3 border table-wrap">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
