"use client";

import { useJobs } from "../hooks/useJobs";
import JobFilterList from "../components/JobFilterList";
import JobCardList from "../components/JobCardList";
import { useJobFilters } from "../hooks/useJobFilters";
import "../styles/home.css";
import Loader from "../components/Loader";

export default function Home() {
  const { jobs, loading, error } = useJobs();
  const { selectedTags, handleTagClick, filteredJobs, setSelectedTags } =
    useJobFilters(jobs);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <main>
      <JobFilterList
        selectedTags={selectedTags}
        onTagClick={handleTagClick}
        onClear={() => setSelectedTags([])}
      />
      <JobCardList jobs={filteredJobs} onTagClick={handleTagClick} />
    </main>
  );
}
