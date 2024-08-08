
import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import UserContext from "../profile/UserContext";


/** Navigation bar for site. Shows up on every page.
 *
 * When user is logged in, shows links to main areas of site. When not,
 * shows link to Login and Signup forms.
 *
 * Rendered by App.
 */

function Nav() {
    const { currentUser, setCurrentUser, setToken } = useContext(UserContext);

    //Logout User
    async function logoutUser() {
        setToken(null);
        setCurrentUser(null);
        setToken(null);

    }



    if (!currentUser) {
        return (
            <div className="MyNavBarClass">
                <p> <NavLink exact to="/">Jobly</NavLink></p>
                <p> <NavLink exact to="/login">Login</NavLink></p>
                <p> <NavLink exact to="/signup">Sign Up</NavLink></p>

            </div>
        );

    } else {

        return (
            <div className="MyNavBarClass">
                <p> <NavLink exact to="/">Jobly</NavLink></p>
                <p> <NavLink exact to="/companies">Companies</NavLink></p>
                <p> <NavLink exact to="/jobs">Jobs</NavLink></p>
                <p> <NavLink exact to="/profile">Profile</NavLink></p>
                <p> <Link className="nav-link" to="/" onClick={logoutUser}>Logout {currentUser.firstName || currentUser.username}</Link></p>

            </div>
        );
    }
}
export default Nav