import React from "react";
import { Boletin, Footer, Header } from "@/commons";
import { HomeComponent } from "@/pods";
import * as classes from "./home.styles";

export const HomeLayout: React.FC = () => {

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    const sectionId = window.location.hash.substring(1);
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleScroll();
    };
  }, []);


  return (
    <div className={classes.root}>
      <Header />
      <HomeComponent />
      <hr className={classes.hr} />
      <Boletin />
      <Footer />
    </div>
  );
};
