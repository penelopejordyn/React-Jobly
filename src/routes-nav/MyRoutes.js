import React, { useState, useEffect, useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";



import Home from "../home/Home.js";
import CompanyDetails from "../companies/CompanyDetails.js";
import Jobs from "../jobs/Jobs.js";
import Companies from "../companies/Companies.js";
import EditUserForm from "../profile/EditUserForm.js";
import LoginForm from "../profile/LoginForm.js";
import NewUserForm from "../profile/NewUserForm.js";
import UserContext from "../profile/UserContext";


//  Site-wide routes.


function MyRoutes() {

    const { loginUser, registerUser, updateUser } = useContext(UserContext);





    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />

                <Route exact path="/companies" element={<Companies />} />

                <Route exact path="/companies/:handle" element={<CompanyDetails />} />

                <Route exact path="/jobs" element={<Jobs />} />

                <Route exact path="/login" element={<LoginForm loginUser={loginUser} />} />

                <Route exact path="/signup" element={<NewUserForm registerUser={registerUser} />} />

                <Route exact path="/profile" element={<EditUserForm updateUser={updateUser} />} />


                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>


        </div>
    );
}

export default MyRoutes