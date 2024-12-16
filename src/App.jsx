import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {

  return (
    <Fragment>
      <Navbar />
      <div className="flex items-start gap-4">
        <div className="w-3/12 border border-red-400 h-[90vh]">
          <h2>Sidebar</h2>
        </div>
        <div className="w-9/12 border border-red-400 h-[90vh]">
          <Outlet />
        </div>
      </div>
    </Fragment>
  )
}


export default App;