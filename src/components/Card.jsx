import React from "react";

export default function Card({ imgUrl, name, role }) {
  return (
    <div className="card">
      <div className="content">
        <img
          src={imgUrl}
          onError={(e) => {
            e.target.src = ".../public/images/default-image.jpg";
          }}
          className="image"
        />
        <div className="description">
          <p className="name">{name}</p>
          <p className="role">{role}</p>
        </div>
      </div>
    </div>
  );
}
