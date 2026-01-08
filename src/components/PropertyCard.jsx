import React from "react";
import { motion } from "framer-motion";

const PropertyCard = ({ property, onClick }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
        backgroundColor: "#ffe4e1",
      }}
      transition={{ duration: 0.3 }}
      className="card"
      onClick={() => onClick(property)}
      style={{
        cursor: "pointer",
        borderRadius: "10px",
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >

      <img
        src={property.images[0]}
        alt={property.title}
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />
      <div style={{ padding: "10px" }}>
        <h3 style={{ fontSize: "16px", fontWeight: "600" }}>{property.title}</h3>
        <p style={{ color: "#555", fontSize: "14px" }}>{property.location}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "5px",
            fontWeight: "bold",
          }}
        >
          <span>{property.price}</span>
          <span style={{ color: "#fbbf24" }}>⭐ {property.rating}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
