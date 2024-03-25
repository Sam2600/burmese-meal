import React from "react";
import { NavLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-orange-300">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-orange-300 sm:text-5xl">
            Still in Progress
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            These Pages are still working in progress. Please come back later!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <NavLink
              to={"/"}
              className="rounded-md border bg-orange-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-orange-300 hover:border-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </NavLink>
            <a
              href="mailto:kghtetsan26@gmail.com"
              className="text-sm font-semibold text-gray-900 hover:text-orange-300"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};
