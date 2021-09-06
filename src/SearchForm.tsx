import React, { FunctionComponent, useState } from "react";

function SearchForm(arg: { search: string }): React.FunctionComponent {
    const [formData, setFormData] = useState({search: ""});

    function handleSubmit(evt) {
        evt.preventDefault();
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Search</label>
            <input 
                name="search"
                onChange={handleChange}
                required
            />
        </form>
    )
}

export default SearchForm;