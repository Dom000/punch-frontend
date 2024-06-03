
import { Outlet } from "react-router-dom";
import Header from "../sections/headers/Header";
import Footer from "../sections/footers/Footer";


const Layout = () => {
  return (
    <div>
      <Header />
      <main className="md:pt-40 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
