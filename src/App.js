import { Provider } from "react-redux";
import appStore from './utils/appstore'
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";



function App() {
 

  return (
    <Provider store={appStore}>  
    <Header/>
   <Outlet/> 
   <Footer/>
   </Provider>
  );
}    

export default App;
