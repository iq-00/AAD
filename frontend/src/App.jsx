import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

let Login = lazy(() => import("../pages/SignIn"));
let SignUp = lazy(() => import("../pages/SignUp"));
let Home = lazy(() => import("../pages/Home"));
let Profile = lazy(() => import("../pages/Profile"));
let SendGift = lazy(() => import("../pages/SendGift"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={"Home loading..."}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback={"Profile loading..."}>
                <Profile />
              </Suspense>
            }
          />
          <Route
            path="/sendgift"
            element={
              <Suspense fallback={"send gift loading..."}>
                <SendGift />
              </Suspense>
            }
          />
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
