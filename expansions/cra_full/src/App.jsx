import { Routes, Route } from "react-router-dom";

import Layout from "./app/Layout";
import Home from "./app/pages/Home";
import NotFound from "./app/pages/NotFound";
import Invoices from "./app/pages/Invoices";
import Counter from "./features/counter/Counter";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default App;
