import React from 'react';

const SearchForm = () => {
  return (
    <form className="form-horizontal">
      <input placeholder="Search" type="text" name="searchString" required />
      <input classname="categories" type = "text" placeholder="Categories" name="categories" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchForm;