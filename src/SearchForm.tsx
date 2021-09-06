import React, { useState } from "react";

function SearchForm(props: { search: (searchTerm: string) => void }): React.ReactElement {
  //props search should be a function, not a string, but just a string for placeholder.
  // interface Search {
  //   searchTerm: string;
  // }

  const [formData, setFormData] = useState({ searchTerm: "" })

  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    props.search(formData.searchTerm);
  }

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = evt.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  }

  return (
    <form onSubmit={handleSubmit}
          className="SearchForm form-group container mt-3">
      <div className="row">
        <div className="col-10">
          <input
            name="searchTerm"
            onChange={handleChange}
            placeholder="Input search term"
            className="form-control"
            required
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-info">Search</button>
        </div>
      </div>
    </form>
  )
}

export default SearchForm;