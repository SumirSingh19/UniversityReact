import { Outlet , createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import AboutLibrary from "./components/AboutLibrary";
import VisionMission from "./components/VIsionMission";
import LibraryRules from "./components/LibraryRules";
import About from "./components/About";
import LibraryFacilities from "./components/LibraryFacilities";
import LibraryStaff from "./components/LibraryStaff";
import MOU from "./components/MOU";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  )
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about-library",
        element:<AboutLibrary/>,
      },
      {
        path: "/vision-mission",
        element:<VisionMission/>,
      },
      {
        path: "/library-rules",
        element:<LibraryRules/>,
      },
      {
        path: "/about",
        element:<About/>
      },
      {
        path: "/library-facilities",
        element:<LibraryFacilities/>,
      },
      {
        path: "/library-staff",
        element: <LibraryStaff/>
      },
      {
        path: "/mou",
        element: <MOU/>
      },
    ]

  },
]) 

export { appRouter };
