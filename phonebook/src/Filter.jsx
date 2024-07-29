import React from 'react';

const Filter = ({ searchTerm, onChange }) => {
  return (
    <div>
      filter shown with <input value={searchTerm} onChange={onChange} />
    </div>
  );
};

export default Filter;