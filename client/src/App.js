// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import HomePage from "./pages/HomePage";
// import RegisterPage from "./pages/RegisterPage";
// import LoginPage from "./pages/LoginPage";
// import CreateListing from "./pages/CreateListing";
// import ListingDetails from "./pages/ListingDetails";
// import TripList from "./pages/TripList";
// import WishList from "./pages/WishList";
// import PropertyList from "./pages/PropertyList";
// import ReservationList from "./pages/ReservationList";
// import CategoryPage from "./pages/CategoryPage";
// import SearchPage from "./pages/SearchPage";

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/create-listing" element={<CreateListing />} />
//           <Route path="/properties/:listingId" element={<ListingDetails />} />
//           <Route
//             path="/properties/category/:category"
//             element={<CategoryPage />}
//           />
//           <Route path="/properties/search/:search" element={<SearchPage />} />
//           <Route path="/:userId/trips" element={<TripList />} />
//           <Route path="/:userId/wishList" element={<WishList />} />
//           <Route path="/:userId/properties" element={<PropertyList />} />
//           <Route path="/:userId/reservations" element={<ReservationList />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// // import React from "react";
// // import LoginPage from "./pages/LoginPage";

// // const App = () => {
// //   return (
// //     <div>
// //       <LoginPage />
// //     </div>
// //   );
// // };

// // export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CreateListing from "./pages/CreateListing";
import ListingDetails from "./pages/ListingDetails";
import TripList from "./pages/TripList";
import WishList from "./pages/WishList";
import PropertyList from "./pages/PropertyList";
import ReservationList from "./pages/ReservationList";
import CategoryPage from "./pages/CategoryPage";
import SearchPage from "./pages/SearchPage";

// Define routes
const router = createBrowserRouter(
  [
    { path: "/", element: <HomePage /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/create-listing", element: <CreateListing /> },
    { path: "/properties/:listingId", element: <ListingDetails /> },
    {
      path: "/properties/category/:category",
      element: <CategoryPage />,
    },
    {
      path: "/properties/search/:search",
      element: <SearchPage />,
    },
    { path: "/:userId/trips", element: <TripList /> },
    { path: "/:userId/wishList", element: <WishList /> },
    { path: "/:userId/properties", element: <PropertyList /> },
    { path: "/:userId/reservations", element: <ReservationList /> },
  ],
  {
    future: {
      v7_startTransition: true, // ✅ Opt into React.startTransition behavior
      v7_relativeSplatPath: true,
    },
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
