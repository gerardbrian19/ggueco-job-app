import React from "react";
import { Job } from "../interface/IJobs";
import "../styles/job-card.css";

interface JobCardListProps {
  jobs: Job[];
  onTagClick: (tag: string) => void;
}

export default function JobCardList({
  jobs,
  onTagClick,
}: Readonly<JobCardListProps>) {
  return (
    <ul className="card-list-container">
      {jobs.map((job, index) => (
        <li key={job.id}>
          <div
            className={`animate__animated animate__fadeIn card-container ${
              job.featured ? "featured" : ""
            }`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <img className="logo" src={job.logo} alt={`${job.company} logo`} />
            <div className="info">
              <p className="title">
                <span className="company">{job.company}</span>
                {job.new && <span className="new">new!</span>}
                {job.featured && <span className="featured">featured</span>}
              </p>
              <p className="position">{job.position}</p>
              <p className="misc">
                <span>{job.postedAt}</span>
                <span>{job.contract}</span>
                <span>{job.location}</span>
              </p>
            </div>
            <div className="tags">
              {[job.role, job.level, ...job.languages, ...job.tools].map(
                (tag) => (
                  <button key={tag} onClick={() => onTagClick(tag)}>
                    {tag}
                  </button>
                )
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
