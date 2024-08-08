import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



/** NewUser form.
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls registerUser function prop
 * - redirects to / route
 *
 * MyRoutes -> NewUserForm
 * Routed as /signup
 */

const NewUserForm = ({ registerUser }) => {
    const INITIAL_STATE = { username: "", password: "", firstName: "", lastName: "", email: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const navigate = useNavigate();


    /** Handle form submit:
     *
     * Calls registerUser func prop and, if successful, redirect to /.
     */
    const handleSubmit = evt => {
        evt.preventDefault();
        registerUser(formData)
        setFormData(INITIAL_STATE);
        navigate(`/`);
    };



    /** Update form data field */
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
            <br />
            <input
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
            />
            <br />
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
    );
};

export default NewUserForm;