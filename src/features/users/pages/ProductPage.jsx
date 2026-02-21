import React from "react";
import { useEffect } from "react";
import OurService from "../components/OurService";
import WomensCloth from "../components/WomensCloth";
import ContactUs from "../components/ContactUs";
import FirstPage from "../components/FirstPage";
import About from "../components/About";
<<<<<<< HEAD
import BurgerMenu from "../components/BurgerMenu";
=======
import KidsCloth from "../components/KidsCloth";
>>>>>>> 86a1311dfe48e8db7c35c522bf7b4f2a7b28ad51
import { useLocation } from "react-router-dom";
import useCRUD from "../hooks/useCRUD";
const ProductPage = () => {
  const nav = useLocation();
  
  const { datas } = useCRUD(
    "https://www.ayu.server.ayubceramic.com/product",nav.pathname
  );
  
  useEffect(() => {
    // Map of paths to section IDs
    const pathToId = {
      "/": "firstPage",
      "/mens": "Men",
        "/kids": "kids",
      "/contact_us": "contactUs",
      "/about": "about",
       "/women": "women",
    };

    const sectionId = pathToId[nav.pathname];
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [nav.pathname]);


  return (
    <center className="">
   
   <div id="firstPage">
        <FirstPage />
      </div>
   <div id="Men">
        <OurService />
      </div>
<div id="women">
        <WomensCloth />
      </div>
<<<<<<< HEAD
=======
<div id="kids">
        <KidsCloth />
      </div>
>>>>>>> 86a1311dfe48e8db7c35c522bf7b4f2a7b28ad51
 
  <div id="contactUs">
        <ContactUs />
      </div>
<div id="about">
  <About />
</div>



    </center>
  );
};

export default ProductPage;
