import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import LandingPage from './Landing/LandingPage';
import CollectionPage from './Components/CollectionPage';
import About from './About/About';
import Action from './Components/Action';
import SearchResults from './Components/SearchResults';
// import Action from './GenrePages/Action';
import Drama from './GenrePages/Drama';
import Adventure from './GenrePages/Adventure';
import Comedy from './GenrePages/Comedy';
import AdminDashboard from './Admin/AdminDashboard';
import AddUserAdmin from './Admin/AddUserAdmin';
import DeleteUserAdmin from './Admin/DeleteUserAdmin';
import AddAnime from './Admin/AddAnime';
import EditAnime from './Admin/EditAnime';
import AnimeManagement from './Admin/AnimeManagement';
import HelpMenu from './Components/HelpMenu';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import DeleteAnime from './Admin/DeleteAnime';

const router = createBrowserRouter(
  createRoutesFromElements(
     <>
    <Route path="/App" element={<App />} />
    <Route path="/admin" element={<AdminDashboard />} />
    <Route path="/admin/anime-management" element={<AnimeManagement />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Registration" element={<Registration />} />
    <Route path="/About" element={<About />} />
    <Route path="/" element={<LandingPage />} />
    <Route path="/collection" element={<CollectionPage />} />
    <Route path="/action" element={<Action />} />
    <Route path="/search" element={<SearchResults />} />
    <Route path="/drama" element={<Drama />} />
    <Route path="/adventure" element={<Adventure />} />
    <Route path="/comedy" element={<Comedy />} />
    <Route path="/admin/add-user-admin" element={<AddUserAdmin />} /> 
    <Route path="/admin/delete-user-admin" element={<DeleteUserAdmin />} /> 
    <Route path="/admin/add-anime" element={<AddAnime />} />
    <Route path="/admin/edit-anime/:name" element={<EditAnime />} />
    <Route path="/admin/delete-anime/:name" element={<DeleteAnime />} />
    <Route path="/help" element={<HelpMenu />} />

          {/* Add more routes as needed */}
     </>
     
  )
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
