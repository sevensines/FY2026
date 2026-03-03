import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Microsoft from "./pages/Microsoft/Microsoft.jsx";
import Azure from "./pages/Microsoft/Azure.jsx";
import Essentials from "./pages/Microsoft/Essentials.jsx";
import AzureNewsletter from "./pages/Microsoft/AzureNewsletter.jsx";
import AzureAlerts from "./pages/Microsoft/AzureAlerts.jsx";
import Student from "./pages/Microsoft/Student.jsx";
import Win10 from "./pages/Microsoft/Windows10.jsx";
import ExpertZone from "./pages/Microsoft/ExpertZone.jsx";
import PowerBI from "./pages/Microsoft/PowerBi.jsx";
import VisualStudio from "./pages/Microsoft/VisualStudio.jsx";
import Gates from "./pages/Gates/Gates.jsx";
import GivingPledge from "./pages/Gates/GivingPledge.jsx";
import AnnualLetter from "./pages/Gates/AnnualLetter.jsx";
import TMobile from "./pages/TMobile/TMobile.jsx";
import TMtuesday from "./pages/TMobile/TMtuesdays.jsx";
import TMthree from "./pages/TMobile/TMthree.jsx";
import TMjump from "./pages/TMobile/TMjump.jsx";
import TMpay from "./pages/TMobile/TMpay.jsx";
import TMprepaid from "./pages/TMobile/TMprepaid.jsx";
import TMdata from "./pages/TMobile/TMdata.jsx";
import Verizon from "./pages/Verizon/Verizon.jsx";
import ATT from "./pages/ATT/ATT.jsx";
import DirectTV from "./pages/DirectTV/DirectTV.jsx";
import Dish from "./pages/Dish/Dish.jsx";
import ADT from "./pages/ADT/ADT.jsx";
import Business from "./pages/ADT/Business.jsx";
import Residential from "./pages/ADT/Residential.jsx";
import TestLab from "./pages/Sandbox/Sandbox.jsx";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);
  return (
    <AppContainer>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path='/Microsoft' element={<Microsoft />} />
          <Route path='/Microsoft/Azure' element={<Azure />} />
          <Route path='/Microsoft/Azure/Essentials' element={<Essentials />} />
          <Route
            path='/Microsoft/Azure/Newsletter'
            element={<AzureNewsletter />}
          />
          <Route path='/Microsoft/Azure/Alerts' element={<AzureAlerts />} />
          <Route path='/Microsoft/Student' element={<Student />} />
          <Route path='/Microsoft/Windows10' element={<Win10 />} />
          <Route path='/Microsoft/ExpertZone' element={<ExpertZone />} />
          <Route path='/Microsoft/PowerBI' element={<PowerBI />} />
          <Route path='/Microsoft/VisualStudio' element={<VisualStudio />} />
          <Route exact path='/Gates' element={<Gates />} />
          <Route path='/Gates/GivingPledge' element={<GivingPledge />} />
          <Route path='/Gates/AnnualLetter' element={<AnnualLetter />} />
          <Route exact path='/T-Mobile' element={<TMobile />} />
          <Route path='/T-Mobile/Tuesdays' element={<TMtuesday />} />
          <Route path='/T-Mobile/3for1' element={<TMthree />} />
          <Route path='/T-Mobile/Jump' element={<TMjump />} />
          <Route path='/T-Mobile/Pay' element={<TMpay />} />
          <Route path='/T-Mobile/Prepaid' element={<TMprepaid />} />
          <Route path='/T-Mobile/Stash' element={<TMdata />} />
          <Route exact path='/Verizon' element={<Verizon />} />
          <Route exact path='/ATT' element={<ATT />} />
          <Route exact path='/DirecTV' element={<DirectTV />} />
          <Route exact path='/Dish' element={<Dish />} />
          <Route exact path='/ADT' element={<ADT />} />
          <Route path='/ADT/Business' element={<Business />} />
          <Route path='/ADT/Residential' element={<Residential />} />
          <Route exact path='/Lab907' element={<TestLab />} />
        </Route>
      </Routes>
    </AppContainer>
  );
}

export default App;
