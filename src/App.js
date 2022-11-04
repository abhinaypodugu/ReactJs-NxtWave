import React, { useState, useEffect, lazy, Suspense } from 'react';
import AddResource from './Pages/AddResourcepage/AddResource';
import './App.css';
import api from './Api/Resources';
import { setData } from './redux/ResourceSlice';
import { useDispatch } from 'react-redux'
import Navbar from "./Components/Navbar/Navbar";
import { toast } from "react-toastify";
import FullScreenLoader from "./Components/FullScreenLoader/FullScreenLoader";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const Homepage = lazy(() => import('./Pages/Homepage/Homepage'))
function App() {

  const [loading, setLoading] = useState();
  const dispatch = useDispatch();
  // const [resources, setResources] = useState([]);

  const addResourceHandler = (resource) => {
    // setResources([...resources, { id: uuid(), ...resource }]);
  };

  const retrieveResources = async () => {
    const response = await api.get("/resources.json");
    return response.data;
  }

  useEffect(() => {

    const getAllResources = async () => {
      try {
        setLoading(true);
        const allResources = await retrieveResources();
        if (allResources) dispatch(setData(allResources))
      }
      catch (error) {
        toast.error(error);
      }
      finally {
        setLoading(false);
      }
    };
    getAllResources();

  }, [])

  return (
    <>
      {loading ? (<FullScreenLoader />) : (
        <Suspense fallback={<FullScreenLoader />}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' exact element={<Navigate to="/home" />} />
              <Route path='/home' exact element={<Homepage />} />
              <Route path='/home/addResource' element={<AddResource addResourceHandler={addResourceHandler} />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      )}
    </>
  );
}

export default App;