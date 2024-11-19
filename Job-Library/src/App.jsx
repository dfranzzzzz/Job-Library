import React from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import HomeCards from "./Components/HomeCards";
import JobListings from "./Components/JobListings";
import ViewAllJobs from "./Components/ViewAllJobs";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  );
};

export default App;
