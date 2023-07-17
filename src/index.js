import React from 'react';
import ReactDOM from 'react-dom/client';
import CountryListPage from './pages/CountryListPage';
import CountryShowPage from './pages/CountryShowPage';
import {
	createBrowserRouter,
	RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <CountryListPage />
	},
	{
		path: "/countries",
		children: [
			{
				index: true,
				element: <CountryListPage />,
			},
			{
				path: ":country",
				element: <CountryShowPage />
			}
		]
	},
])

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
	<RouterProvider router={router} />
);