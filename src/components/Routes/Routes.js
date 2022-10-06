
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from '../Home';
import Books from "../Books";
import About from '../About';
import BookDetails from '../BookDetails';

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
                path: 'books',
                loader: async ()=>{
                    return fetch('https://api.itbook.store/1.0/new')
                },
                element: <Books></Books>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path:'book/:id',
                loader: async({params}) => {
                    return fetch(`https://api.itbook.store/1.0/books/${params.id}`)
                },
                element: <BookDetails></BookDetails>
            }
        ]
    },
    {

    }
])