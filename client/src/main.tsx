import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import IfHouseCommittee from './pages/IfHouseCommittee/IfHouseCommittee.tsx';
import Main from './pages/main/Main.tsx';
import IfCameras from './pages/IfCameras/IfCameras.tsx';
import IfAssetsManagment from './pages/IfAssetsManagment/IfAssetsManagment.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import HousePage from './pages/IfHouseCommittee/HousePage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path:"/",
        element: <Main/>
      },
      {
        path:"/houses",
        element: <IfHouseCommittee/>
      },
      {
        path: "/:id",
        element: <HousePage/>
      },
      {
        path:"/cameras",
        element: <IfCameras/>
      },
      {
        path:"/assets",
        element: <IfAssetsManagment/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
