import React, { useState } from "react";


/** Search widget.
 *
 * Appears on CompanyList and JobList so that these can be filtered
 * down.
 *
 * This component doesn't *do* the searching, but it renders the search
 * form and calls the `searchFunction` function prop that runs in a parent to do the
 * searching.
 *
 * { CompanyList, JobList } -> SearchForm
 */

const SearchForm = ({ searchFunction }) => {
    const INITIAL_STATE = { search: "Enter search term..." };
    const [formData, setFormData] = useState(INITIAL_STATE);


    /** Send {search} to parent
     *    & clear form. */

    const handleSubmit = evt => {
        evt.preventDefault();
        searchFunction(formData)
        setFormData(INITIAL_STATE);
    };

    /** Update local state w/curr state of input elem */

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

            <label htmlFor="search"></label>
            <br />
            <input
                id="search"
                name="search"
                value={formData.search}
                onChange={handleChange}
            />
            <br />


            <button>Search</button>
        </form>
    );
};
export default SearchForm;