import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import appStore from "./utils/appStore";
import Browse from "./components/Browse";
import Login from "./components/Login";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

function Root() {
  return (
    <Provider store={appStore}>
      <App />
    </Provider>
  );
}

export default Root;
