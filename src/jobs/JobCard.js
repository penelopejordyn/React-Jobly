
import React, { useState, useContext, useEffect } from "react"; import {
    Card, CardBody, CardTitle
} from "reactstrap";
import JoblyApi from "../api/api";
import UserContext from "../profile/UserContext";



/** Show limited information about a job.
 *
 * Is rendered by Jobs to show a "card" for each job.
 * 
 * Has "apply" button.

 * Jobs -> JobCard
 */



const JobCard = ({ id, title, salary, equity, companyName }) => {

    const { currentUser, applications, setApplications, userInfoLoaded } = useContext(UserContext);
    const [hasApplied, setHasApplied] = useState()



    useEffect(() => {
        if (userInfoLoaded) {

            setHasApplied(applications.includes(id))
        }

    }, [userInfoLoaded]);




    //Apply to Job
    async function jobApply() {
        await JoblyApi.jobApply(currentUser.username, id);
        setApplications(prevIds => ([...prevIds, id]));
        setHasApplied(true);
    };



    return (
        <section>
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                        {title}
                    </CardTitle>
                    {companyName}
                    <p>Salary: {salary}</p>
                    <p>Equity: {equity}</p>
                    <button
                        className="btn btn-danger font-weight-bold text-uppercase float-right"
                        onClick={jobApply}
                        disabled={hasApplied}
                    >
                        {hasApplied ? "Applied" : "Apply"}
                    </button>

                </CardBody>
            </Card>
        </section>
    )

};
export default JobCard;