import {Routes,Route} from "react-router-dom"
// import logo from './logo.svg';
import './App.css';
import FirstTimePage from './FirstTimePage';
import BodyDetails from "./MainPages/Body/Bodydetails";
import BodyDetailsReview from "./MainPages/Body/BodyDetailsReview";
import MainPage from "./MainPages/MainPage";
import store from "./Store";
import {Provider} from "react-redux"
import PurchageItem from "./MainPages/PurchangeItems";
import TemperatureGraph from "./MainPages/Body/GraphPage";

function App() {
  return (
    <>
    <Provider store={store}>
    <Routes>
      <Route path="/" element={<FirstTimePage />}/>
      <Route path="/main-page" element={<MainPage />} />
      <Route path="/main-page/details" element={<BodyDetails />} />
      <Route path="/main-page/details-review" element={<BodyDetailsReview />} />
      <Route path="/graph-page" element={<TemperatureGraph />} />
      <Route path="/purchage-item" element={<PurchageItem />} />
      <Route path="*" element={<FirstTimePage />}/>
    </Routes>
    </Provider>
    </>
  );
}

export default App;
