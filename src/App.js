import './App.scss';
import {Routes, Route, Navigate} from "react-router-dom";
import Header from './components/UiComponents/Header';
import ProductByItem from "./components/purchaseByItem/ProductByItem";
import ProductByStore from "./components/purchaseByStore/ProductByStore";


function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route exact path={`/`} element={<Navigate replace to="/ProductByItem/DeliveryList"/>} />
          <Route exact path="/ProductByItem/*" element={<ProductByItem/>}/>
          <Route exact path="/ProductByStore" element={<ProductByStore/>}/>
        </Routes>
    </div>
  );
}

export default App;
