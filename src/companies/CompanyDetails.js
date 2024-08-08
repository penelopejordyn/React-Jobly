import { useContext, } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import JoblyApi from "../api/api.js";
import Jobs from "../jobs/Jobs.js";
import { Navigate } from "react-router-dom";
import UserContext from "../profile/UserContext";

/** Company Detail page.
 *
 * Renders information about company, along with the jobs at that company.
 *
 * Routed at /companies/:handle
 *
 * MyRoutes -> CompanyDetail -> Jobs
 */


const CompanyDetails = () => {


    const { handle } = useParams();
    const { currentUser, userInfoLoaded } = useContext(UserContext);
    const [company, setCompany] = useState(null);


    useEffect(() => {
        async function getCompany() {
            let company = await JoblyApi.getCompany(handle);
            setCompany(company);
            console.log(company)
        };
        getCompany();
    }, [handle]);


    //Redirects unauthorized users to /login route
    if (!currentUser && userInfoLoaded) {
        return <Navigate replace to="/login" />
    } else {


        if (!company) return (
            <div>loading</div>);


        return (
            <div>
                <div>
                    <h4>{company.name}</h4>
                    <p>{company.description}</p>
                    <Jobs jobs={company.jobs} companyJobs={company.jobs} />

                </div>
            </div>
        )
    }

};
export default CompanyDetails;