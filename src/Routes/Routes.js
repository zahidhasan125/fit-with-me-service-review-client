import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main/Main';
import MyReviews from '../MyReviews/MyReviews';
import AllServices from '../Pages/AllServices/AllServices';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import ServiceDetails from '../Pages/ServiceDetails/ServiceDetails';
import SignUp from '../Pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allservices',
                element: <AllServices></AllServices>
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params})=>fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>

            },
            {
                path: '/addservice',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>

            },
        ]

    }
])