import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Navbar } from "./Navbar";
import { Coins } from "../containers/Coins";
import { Details } from "../containers/Details";

export const Main = () => {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Navbar />
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<Coins />} />
                    <Route path="/coin/:id" element={<Details />} />
                </Routes>
            </React.Fragment>
        </BrowserRouter>
    );
}

// const Router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Navbar />,
//         errorElement: <NotFound />,
//         children: [
//             {
//                 path: "/",
//                 element: <Coins />
//             },
//             {
//                 path: "/coin/:id",
//                 element: <Details />
//             }
//         ]
//     }
// ]);

// export const Main = () => {
//     return (
//         <React.Fragment>
//             <RouterProvider router={Router} />
//         </React.Fragment>
//     );
// };



