import React from "react";

function Footer() {
  return (
    <div className="text-center p-5 text-secondary bg-white mt-3">
      &copy; {new Date().getFullYear()} @ Mohammed Samara Elgohary ({" "}
      <strong className="text-primary">SAMARA</strong> )
    </div>
  );
}

export { Footer };
