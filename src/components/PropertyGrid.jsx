import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import PropertyModal from "./PropertyModal";
import { properties } from "../data/Properties";

const PropertyGrid = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <>
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          padding: "10px",
        }}
      >
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onClick={setSelectedProperty}
          />
        ))}
      </div>

      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </>
  );
};

export default PropertyGrid;
