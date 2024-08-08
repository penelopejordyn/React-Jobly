import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../profile/UserContext";
import SearchForm from "../common/SearchForm";
import JoblyApi from "../api/api";
import JobCard from "./JobCard";

/** Show limited information about a job.
 *
 * Is rendered by JobCardList to show a "card" for each job.
 *
 * Receives CompanyJobs prop from parent, which will populate the list of jobs if not null.
 *
 * Jobs -> JobCard
 */


const Jobs = ({ companyJobs }) => {

    const [jobs, setJobs] = useState([]);
    const { currentUser, userInfoLoaded } = useContext(UserContext);


    //Searches for Job
    async function searchJobs(data) {
        let jobs = await JoblyApi.getAllJobs(data.search);
        setJobs(jobs);
    };


    // Set the job list. 
    useEffect(() => {
        async function getAllJobs() {
            let jobs = await JoblyApi.getAllJobs();
            setJobs(jobs);
        };
        if (companyJobs) {
            setJobs(companyJobs)
        } else {
            getAllJobs();
        }
    }, []);





    //Redirects unauthorized users to /login route
    if (!currentUser && userInfoLoaded) {
        return <Navigate replace to="/login" />
    }

    return (
        <div>
            jobs
            {!companyJobs ? <SearchForm searchFunction={searchJobs} /> : null}

            {jobs.map(job => (
                <JobCard key={job.id} id={job.id} title={job.title} salary={job.salary} equity={job.equity} companyName={job.companyName} />
            ))}
        </div>
    )


};
export default Jobs;