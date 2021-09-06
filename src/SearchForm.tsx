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