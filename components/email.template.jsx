export const EmailTemplate = ({ message }) => {
    return (
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f4f4f4",
          padding: "20px",
          color: "#333",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={{ padding: "20px", borderBottom: "2px solid #007BFF" }}>
            <h1
              style={{
                margin: 0,
                fontSize: "24px",
                color: "#007BFF",
                textAlign: "center",
              }}
            >
           Easy LMS
            </h1>
          </div>
          <div style={{ padding: "20px" }}>
            <p
              style={{
                margin: "0 0 10px",
                fontSize: "16px",
                lineHeight: "1.5",
              }}
            >
              {message}
            </p>
          </div>
          <div
            style={{
              padding: "20px",
              backgroundColor: "#f4f4f4",
              textAlign: "center",
            }}
          >
            <p
              style={{
                margin: "0",
                fontSize: "14px",
                color: "#777",
              }}
            >
              This email was sent by Your Company. If you have any questions, feel
              free to <a href="mailto:support@example.com" style={{ color: "#007BFF" }}>contact us</a>.
            </p>
          </div>
        </div>
      </div>
    );
  };
  