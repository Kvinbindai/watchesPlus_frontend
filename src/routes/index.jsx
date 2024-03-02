import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import OuterPage from "../layouts/OuterPage";
import Wrapper from "../layouts/Wrapper";
import ProductDetailPage from "../pages/ProductDetailPage";
import { Outlet } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Wrapper />,
        children: [
          {
            path: "",
            element: <>HomePage</>, //hompage
          },
          {
            path: "search",
            element: <>SearchPage</>, //search + all watches
          },
          {
            path: "profile",
            element: <Outlet/>, //search + all watches
            children :[
              {
                path :'',
                element : <>ProfilePage</> 
              },
              {
                path :'wishlist',
                element : <>WishlistPage</> 
              },
              {
                path :'history',
                element : <>HistoryPage</> 
              },
              {
                path :'inventory',
                element : <>InventoryPage</> ,
                children : [
                  {
                    path : ':inventoryId',
                    element: <>Watch in InventoryId</>
                  }
                ]
              },
              {
                path :'wallet',
                element : <>WalletPage</>
              },
            ]
          },
          {
            path: "watch",
            element: <Outlet />,
            children: [
              {
                path: ":watchId",
                element: <ProductDetailPage />,
              },
            ],
          },
        ],
      },
      {
        path: "/register",
        element: (
          <OuterPage>
            <RegisterPage />
          </OuterPage>
        ),
      },
      {
        path: "/login",
        element: (
          <OuterPage>
            <LoginPage />
          </OuterPage>
        ),
      },
      {
        path: "/forgot-password",
        element: (
          <OuterPage>
            <ForgotPasswordPage />
          </OuterPage>
        ),
      },
    ],
  },
  {
    path: "/homepage",
    element: (
      <>
        <Navbar />
        <HomePage />
      </>
    ),
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
