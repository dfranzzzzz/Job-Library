import React from "react";
import jobs from "../jobs.json";
import JobListing from "../Templates/JobListing";

const JobListings = ({ isHomePage = false }) => {
  const jobListings = isHomePage ? jobs.slice(0, 3) : jobs;

  return (
    <section className="bg-emerald-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-teal-800 mb-6 text-center">
          {isHomePage ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobListings.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
