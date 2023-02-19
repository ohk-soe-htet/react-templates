import { Link, Outlet } from "react-router-dom";
import Nav from "./Nav";

const index = () => {
    return (
        <>
            <header>
                <h1>Starter CRA App</h1>
                <Nav>
                    <Link to="/invoices">Invoices</Link>
                    <Link to="/counter">Counter</Link>
                </Nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default index;
