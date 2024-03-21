import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import { Suspense, lazy } from "react";
let Login = lazy(() => import("../pages/SignIn"));
let SignUp = lazy(() => import("../pages/SignUp"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}

          <Route
            path="/signin"
            element={
              <Suspense fallback={"Sign in loading..."}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/signup"
            element={
              <Suspense fallback={"Sign up Loading..."}>
                <SignUp />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
