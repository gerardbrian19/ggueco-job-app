"use client";

import { useState } from "react";
import { useJobs } from "../hooks/useJobs";
import JobFilterList from "../components/JobFilterList";
import JobCardList from "../components/JobCardList";

export default function Home() {
  const { jobs, loading, error } = useJobs();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const filteredJobs = selectedTags.length
    ? jobs.filter((job) =>
        selectedTags.every((tag) =>
          [job.role, job.level, ...job.languages, ...job.tools].includes(tag)
        )
      )
    : jobs;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
