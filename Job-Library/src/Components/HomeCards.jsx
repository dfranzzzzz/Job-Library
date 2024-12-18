import React from "react";
import { Link } from "react-router-dom";
import Card from "../Templates/Card";

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">For Professionals</h2>
            <p className="mt-2 mb-4">
              Browse our available jobs and start your career today
            </p>
            <Link
              className="inline-block bg-teal-950 text-white rounded-lg px-4 py-2 hover:bg-teal-900"
              to="/jobs"
            >
              Browse Jobs
            </Link>
          </Card>
          <Card bg="bg-emerald-200">
            <h2 className="text-2xl font-bold">For Employers</h2>
            <p className="mt-2 mb-4">
              List your job to find the perfect professional for the role
            </p>
            <Link
              className="inline-block bg-emerald-600 text-white rounded-lg px-4 py-2 hover:bg-emerald-700"
              to="/add-job"
            >
              Add Job
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
