import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import UserContext from "../profile/UserContext";

/** Profile editing form.
 *
 * Displays profile form and handles changes to local form state.
 * Submitting the form calls the API to save, and triggers user reloading
 * throughout the site.
 * 
 * Receives updateUser function prop from parent, which will update user information.
 * 
 * Inital form values default to blank until currentUser is updated,
 * at which point useEffect updates the values to the user data.

 * Routed as /profile
 * MyRoutes -> EditUserForm 
 */


const EditUserForm = ({ updateUser }) => {

    const navigate = useNavigate();
    const { currentUser, token, userInfoLoaded } = useContext(UserContext);
    let INITIAL_STATE = { username: "", password: "", firstName: "", lastName: "", email: "" }
    const [formData, setFormData] = useState(INITIAL_STATE);


    useEffect(() => {
        if (token && currentUser) {
            INITIAL_STATE = { password: "", firstName: currentUser.firstName, lastName: currentUser.lastName, email: currentUser.email };
            setFormData(INITIAL_STATE)
        }
    }, [currentUser])



    //Redirects unauthorized users to /login route
    if (!currentUser && userInfoLoaded) {
        return <Navigate replace to="/login" />
    }



    /** on form submit:
     *   - clear password
     *   - Tell the parent to update user
     */

    const handleSubmit = evt => {
        evt.preventDefault();

        let profileData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
        };

        updateUser(profileData)
        setFormData(INITIAL_STATE);
        navigate(`/`);
    };

    /** Update form fields */

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    /** render form */

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>

            <p className="form-control-plaintext">{currentUser ? currentUser.username : ""}</p>

            <label htmlFor="password">Password</label>
            <br />
            <input
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="firstName">First Name</label>
            <br />
            <input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="lastName">Last Name</label>
            <br />
            <input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <br />

            <button>Submit</button>
        </form>
    )

};
export default EditUserForm;