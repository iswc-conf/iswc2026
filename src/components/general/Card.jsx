import React from "react";

/** Simple bordered surface. Wraps Bootstrap's card. */
export default function Card({ children, className = "" }) {
  return (
    <div className={`card ${className}`.trim()}>
      <div className="card-body">{children}</div>
    </div>
  );
}
