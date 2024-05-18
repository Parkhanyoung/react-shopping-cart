import "./App.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CartPage from "./pages/CartPage";
import { ROUTE_PATH } from "./constants/routePath";
import OrderSummaryPage from "./pages/OrderSummaryPage";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <ErrorBoundary fallbackRender={({ error }) => error.message}>
          <Routes>
            <Route path={ROUTE_PATH.cart} element={<CartPage />} />
            <Route path={ROUTE_PATH.orderSummary} element={<OrderSummaryPage />} />
          </Routes>
        </ErrorBoundary>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
