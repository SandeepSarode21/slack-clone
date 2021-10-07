import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";

function App() {
  return (
    <div className="App">
      {/*Header*/}
      <Header />

      <div className="app__body">
        <SideBar />
        {/*SideBar*/}
        {/*React router -> Chat Screen*/}
      </div>
    </div>
  );
}

export default App;
