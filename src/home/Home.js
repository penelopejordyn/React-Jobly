
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../profile/UserContext";

/** Homepage of site.
 *
 * Shows welcome message or login/register buttons.
 *
 * Routed at /
 *
 * MyRoutes -> Homepage
 */

const Home = () => {

    const { currentUser } = useContext(UserContext);

    return (
        <div>
            <h1>Jobly</h1>
            <h3>All the jobs in one, convenient place.</h3>
            {currentUser ? <div>Welcome Back {currentUser.username || currentUser.firstName}</div>
                : (
                    <p>
                        <Link className="btn btn-primary font-weight-bold mr-3"
                            to="/login">
                            Log in
                        </Link>
                        <Link className="btn btn-primary font-weight-bold"
                            to="/signup">
                            Sign up
                        </Link>
                    </p>
                )}

        </div>
    )

};
export default Home;