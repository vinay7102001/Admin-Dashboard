import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import PieChart from "./pages/Charts/PieChart";
import LineChart from "./pages/Charts/LineChart";
import Coupon from "./pages/Coupon";
// import Loader from "./components/Loader";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Product = lazy(() => import("./pages/Product"));
const Customer = lazy(() => import("./pages/Customer"));
const Transaction = lazy(() => import("./pages/Transaction"));
const ProductManagement = lazy(
  () => import("./components/Management/ProductManagement")
);
const NewProduct = lazy(() => import("./components/Management/NewProduct"));
const TransactionManagement = lazy(
  () => import("./components/Management/TransactionManagement")
);
const Loader = lazy(() => import("./components/Loader"));
const BarChart = lazy(() => import("./pages/Charts/BarChart"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Product />} />
          <Route path="/admin/customer" element={<Customer />} />
          <Route path="/admin/transaction" element={<Transaction />} />

          {/* Charts */}
          <Route path="/admin/charts/bar" element={<BarChart />} />
          <Route path="/admin/charts/pie" element={<PieChart />} />
          <Route path="/admin/charts/line" element={<LineChart />} />

          {/* apps */}
          <Route path="admin/app/coupon" element={<Coupon />} />

          {/*managemnet subroutes of products, transaction, customer*/}
          <Route path="admin/product/new" element={<NewProduct />} />
          <Route path="admin/product/:id" element={<ProductManagement />} />
          <Route
            path="admin/transaction/:id"
            element={<TransactionManagement />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
