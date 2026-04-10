const Logo = () => {
  return (
    <div style={{ textAlign: "center", marginBottom: "24px" }}>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "6px",
        }}
      >
        <span style={{ fontSize: "50px", fontWeight: 700, color: "#fff" }}>
          Med<span style={{ color: "#38bdf8" }}>Line</span>
        </span>
      </div>
      <p style={{ fontSize: "13px", color: "#64748b", margin: 0 }}>
        Doktorlarga elektron navbat olish tizimi
      </p>
    </div>
  );
};

export default Logo;
