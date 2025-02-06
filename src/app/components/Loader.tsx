import React from "react";
import "../styles/loader.css";

export default function Loader() {
  return (
    <div className="loader-container">
      <div className="animate__animated animate__pulse animate__infinite loader">
        Loading...
      </div>
    </div>
  );
}
