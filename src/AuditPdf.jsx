const AuditPdf = ({ report, sections }) => {
  if (!report) return null;

  const score = report?.overall_score?.score || 0;

  const getScoreMessage = (score) => {
    if (score <= 2)
      return "Your website has major design and usability issues. A redesign is needed.";
    if (score <= 4)
      return "Your website has a basic structure, but many areas need improvement.";
    if (score <= 6)
      return "Your website works well, but design clarity and consistency can be improved.";
    if (score <= 8)
      return "Your website has a solid foundation, with some areas that could be refined.";
    return "Your website shows strong design and usability.";
  };

  const message = getScoreMessage(score);

  return (
    <div
      id="pdf-content"
      style={{
        all: "initial",
        fontFamily: "Arial, sans-serif",
        color: "#111",
        background: "#fff",
        padding: "50px 60px",
        width: "600px", // A4 width
        lineHeight: "1.7"
      }}
    >
      {/* Header */}
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "700",
          marginBottom: "10px",
          textAlign: "center"
        }}
      >
        Detailed Audit Report
      </h1>

      {/* Overall Score */}
      <div
        style={{
          padding: "20px",
          marginTop:"20px",
          marginBottom: "40px",
          background: "#fafafa",
          border: "1px solid #eee",
          borderRadius: "8px"
        }}
      >
        <p
          style={{
            fontSize: "16px",
            color: "#666",
            marginBottom: "8px"
          }}
        >
          Overall Score
        </p>

        <p
          style={{
            fontSize: "34px",
            fontWeight: "700",
            marginBottom: "10px"
          }}
        >
          {score}/10
        </p>

        <p
          style={{
            color: "#000",
            fontSize: "14px",
            fontWeight: "300"
          }}
        >
          {message}
        </p>
      </div>

      {/* Sections */}
      {sections.map((item, i) => (
        <div
          key={i}
          style={{
            padding: "20px",
            marginBottom: "25px",
            border: "1px solid #eee",
            borderRadius: "8px",
            pageBreakInside: "avoid",
            breakInside: "avoid"
          }}
        >
          {/* Title */}
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "600",
              marginBottom: "12px"
            }}
          >
            {i + 1}. {item.title}
            <span
              style={{
                color: "#666",
                fontWeight: "400",
                fontSize: "14px"
              }}
            >
              {" "}({item.score || 0}/10)
            </span>
          </h3>

          {/* Positives */}
          {item.positives?.length > 0 && (
            <div style={{ marginBottom: "15px" }}>
              <p
                style={{
                  fontWeight: "600",
                  marginBottom: "6px"
                }}
              >
                ✅ Positives
              </p>
              <ul
                style={{
                  paddingLeft: "20px",
                  fontSize: "14px"
                }}
              >
                {item.positives.map((p, idx) => (
                  <li key={idx} style={{ marginBottom: "6px" }}>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Negatives */}
          {item.negatives?.length > 0 && (
            <div style={{ marginBottom: "15px" }}>
              <p
                style={{
                  fontWeight: "600",
                  marginBottom: "6px"
                }}
              >
                ⚠️ Negatives
              </p>
              <ul
                style={{
                  paddingLeft: "20px",
                  fontSize: "14px"
                }}
              >
                {item.negatives.map((n, idx) => (
                  <li key={idx} style={{ marginBottom: "6px" }}>
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Solutions */}
          {item.solutions?.length > 0 && (
            <div>
              <p
                style={{
                  fontWeight: "600",
                  marginBottom: "6px"
                }}
              >
                💡 Recommendations
              </p>
              <ul
                style={{
                  paddingLeft: "20px",
                  fontSize: "14px"
                }}
              >
                {item.solutions.map((s, idx) => (
                  <li key={idx} style={{ marginBottom: "6px" }}>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}

      {/* Footer */}
      <div
        style={{
          marginTop: "40px",
          fontSize: "12px",
          color: "#777",
          textAlign: "center"
        }}
      >
        End of Report
      </div>
    </div>
  );
};

export default AuditPdf;