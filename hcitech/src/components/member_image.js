import { useState } from "react";

export default function MemberImage({originalImage, hoverImage}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        overflow: "hidden", // Ensures images stay within bounds
        position: "relative",
      }}
    >
      <img
        src={hoverImage}
        alt="Hovered Image"
        style={{
          position: "absolute",
          borderRadius: "50%",
          padding: "0.25rem",
          border: "2px solid #dee2e6",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "opacity 0.3s ease",
          opacity: hover ? 1 : 0, // Show on hover
        }}
      />
      <img
        src={originalImage}
        alt="Default Image"
        style={{
          position: "absolute",
          borderRadius: "50%", 
          padding: "0.25rem",
          border: "2px solid #dee2e6",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "opacity 0.3s ease",
          opacity: hover ? 0 : 1, // Show when not hovered
        }}
      />
    </div>
  );
}
