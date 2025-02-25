import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { usePageStore } from "./store/usePageStore";
import NotFoundPage from "./views/not-found";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  const { pages } = usePageStore();
  const location = useLocation();

  const isMainRoute = location.pathname === "/";

  return (
    <main>
      <Navbar />
      <section
        className={`flex flex-col max-w-[1920px] min-h-[100vh] mx-auto shadow-gray-600 shadow-2xl`}
      >
        <div className={`${!isMainRoute ? "p-6" : ""} mb-4`}>
          <Routes>
            {pages.map((thePage, index) => (
              <Route
                key={index}
                path={thePage.route}
                element={<thePage.component />}
              />
            ))}

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        <Footer />
      </section>
    </main>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  );
}
