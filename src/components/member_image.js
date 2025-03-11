import { useState } from "react";

export default function MemberImage({ originalImage, hoverImage }) {
  const [hover, setHover] = useState(false);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "20%",
          overflow: "hidden",
          position: "relative",
          margin: "auto", 
        }}
      >
        {/* Hover Image */}
        <img
          src={hoverImage}
          alt="Hovered Image"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "20%",
            padding: "0.25rem",
            border: "2px solid #dee2e6",
            objectFit: "cover",
            transition: "opacity 0.3s ease",
            opacity: hover ? 1 : 0,
            pointerEvents: "none",
            zIndex: 2,
          }}
        />
        {/* Default Image */}
        <img
          src={originalImage}
          alt="Default Image"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "20%",
            padding: "0.25rem",
            border: "2px solid #dee2e6",
            objectFit: "cover",
            transition: "opacity 0.3s ease",
            opacity: hover ? 0 : 1,
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      </div>
    </div>
  );
}
