import { useState } from "react";
import { Job } from "../interface/IJobs";

export function useJobFilters(jobs: Job[]) {
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

  return { selectedTags, handleTagClick, filteredJobs, setSelectedTags };
}
