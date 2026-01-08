import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageCarousel from "./ImageCarousel";

const PropertyModal = ({ property, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  if (!property) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "#fff",
            width: "90%",
            maxWidth: "600px",
            maxHeight: "90vh",
            borderRadius: "16px",
            overflowY: "auto",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* ❌ Close */}
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "12px",
              right: "14px",
              zIndex: 20,
              fontSize: "26px",
              border: "none",
              background: "#fff",
              cursor: "pointer",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
            }}
          >
            &times;
          </button>

          {/* 🖼️ IMAGE SECTION */}
          <div
            style={{
              height: "280px",
              width: "100%",
              flexShrink: 0,
              position: "relative",
              zIndex: 1,
            }}
          >
            <ImageCarousel images={property.images} />
          </div>

          {/* 📄 CONTENT SECTION */}
          <div
            style={{
              padding: "16px",
              zIndex: 2,
              background: "#fff",
            }}
          >
            {/* TITLE */}
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "4px",
              }}
            >
              {property.title}
            </h2>

            {/* LOCATION */}
            <p style={{ color: "#717171", marginBottom: "12px" }}>
              {property.location}
            </p>

            {/* PRICE + RATING */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "12px",
              }}
            >
              <span style={{ fontSize: "18px", fontWeight: "600" }}>
                {property.price}
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#555",
                  }}
                >
                  {" "}
                  / night
                </span>
              </span>

              <span style={{ color: "#f59e0b", fontWeight: "600" }}>
                ⭐ {property.rating}
              </span>
            </div>

            {/* DESCRIPTION */}
            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.6",
                color: "#444",
              }}
            >
              Enjoy a comfortable stay in this beautifully designed property.
              Perfect for couples, families, or solo travelers. Close to popular
              attractions, restaurants, and public transport.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PropertyModal;
