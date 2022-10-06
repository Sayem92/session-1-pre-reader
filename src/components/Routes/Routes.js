
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from '../Home'
import Book from '../Book'
import About from '../About'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                path: 'home',
                element: <Home></Home>
            },
            {
               index :'true',
                element: <Home></Home>
            },
            {
                path: 'book',
                element: <Book></Book>
            },
            {
                path: 'about',
                element: <About></About>
            },
        ]
    },
    {

    }
])