import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const CounterApp = lazy(() => import("./apps/counter/App"));
const WidgetsApp = lazy(() => import("./apps/widgets/App"));

import { LoadingSpinner } from "./ui/LoadingSpinner";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="counter" element={<CounterApp />} />
            <Route path="widgets" element={<WidgetsApp />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
