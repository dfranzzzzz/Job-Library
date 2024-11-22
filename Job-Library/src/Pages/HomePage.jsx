import React from "react";
import Hero from "../Components/Hero";
import HomeCards from "../Components/HomeCards";
import JobListings from "../Components/JobListings";
import ViewAllJobs from "../Components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHomePage={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
