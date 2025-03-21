import * as React from "react";

export const EmailTemplate = ({
  firstName,
  lastName,
  phone,
  email,
  message,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6",
      color: "#333",
      padding: "20px",
    }}
  >
    <h1 style={{ color: "#3A2B71" }}>
      You have a new message from {firstName} {lastName}!
    </h1>
    <p style={{ fontSize: "16px", margin: "20px 0" }}>
      Here is the message from {firstName} {lastName}:
    </p>
    <blockquote
      style={{
        margin: "20px 0",
        padding: "15px 20px",
        borderLeft: "4px solid #3A2B71",
        background: "#f9f9f9",
      }}
    >
      <p style={{ fontStyle: "italic", color: "#555" }}>{message}</p>
    </blockquote>
    <p style={{ fontSize: "16px", margin: "20px 0" }}>
      You can respond to them directly at:
    </p>
    <ul
      style={{
        fontSize: "16px",
        margin: "10px 0",
        paddingLeft: "20px",
        color: "#333",
      }}
    >
      <li>
        <strong>Email: </strong>
        <a
          href={`mailto:${email}`}
          style={{
            color: "#3A2B71",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          {email}
        </a>
      </li>
      <li>
        <strong>Phone: </strong>
        <a
          href={`tel:${phone}`}
          style={{
            color: "#3A2B71",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          {phone}
        </a>
      </li>
    </ul>
    <footer style={{ marginTop: "30px", fontSize: "14px", color: "#666" }}>
      <p>Thank you,</p>
      <p>Lantabur Softech Team</p>
    </footer>
  </div>
);
