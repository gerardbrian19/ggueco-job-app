import React from "react";
import "../styles/job-filter.css";

interface FilterListProps {
  selectedTags: string[];
  onTagClick: (tag: string) => void;
  onClear: () => void;
}

export default function JobFilterList({
  selectedTags,
  onTagClick,
  onClear,
}: Readonly<FilterListProps>) {
  if (!selectedTags.length) return null;

  return (
    <div className="filter-container">
      <ul className="filter-list">
        {selectedTags.map((tag) => (
          <li key={tag} className="filter">
            <span>{tag}</span>
            <button className="remove-filter" onClick={() => onTagClick(tag)}>
              ×
            </button>
          </li>
        ))}
      </ul>
      <button className="clear" onClick={onClear}>
        Clear
      </button>
    </div>
  );
}
