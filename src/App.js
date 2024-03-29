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
import AppexCharts from "./MainPages/Body/AppexChart";
import HighCharts from "./MainPages/Body/HighChart";
import HighChartWrapper from "./MainPages/Body/HighChartWrapper";

function App() {
  return (
    <>
    <Provider store={store}>
    <Routes>
      {/* <Route path="/" element={<FirstTimePage />}/> */}
      <Route path="/" element={<HighChartWrapper />} />
      <Route path="/main-page" element={<MainPage />} />
      <Route path="/main-page/details" element={<BodyDetails />} />
      <Route path="/main-page/details-review" element={<BodyDetailsReview />} />
      <Route path="/graph-page" element={<TemperatureGraph />} />
      <Route path="/apex-graph-page" element={<AppexCharts />} />
      <Route path="/highchart-graph-page" element={<HighCharts />} />
      <Route path="/purchage-item" element={<PurchageItem />} />
      <Route path="*" element={<HighChartWrapper />}/>
    </Routes>
    </Provider>
    </>
  );
}

export default App;
