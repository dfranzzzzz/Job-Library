import React from "react";
import { Link } from "react-router-dom";

const ViewAllJobs = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
      <Link
        className="block bg-teal-950 text-white text-center py-4 px-6 rounded-xl hover:bg-teal-900"
        to="/jobs"
      >
        View All Jobs
      </Link>
    </section>
  );
};

export default ViewAllJobs;
