import { useEffect, useState } from "react";
import api from "./api";

export default function Tokens() {
  const [tokens, setTokens] = useState([]);

  const loadTokens = () => {
    api.get("/tokens").then(res => setTokens(res.data));
  };

  useEffect(() => {
    loadTokens();
  }, []);

  function getPriorityColor(priority) {
    if (priority === 1) return "#dc2626"; // emergency red
    if (priority === 2) return "#f97316"; // orange
    if (priority === 3) return "#eab308"; // yellow
    return "#2563eb"; // blue
  }

  function getPriorityLabel(priority) {
    if (priority === 1) return "EMERGENCY";
    if (priority === 2) return "HIGH";
    if (priority === 3) return "MEDIUM";
    return "NORMAL";
  }

  return (
    <div className="card">
      <h2>📋 Live Token Queue</h2>

      <button onClick={loadTokens}>🔄 Refresh Tokens</button>

      {tokens.length === 0 && <p>No tokens yet</p>}

      {tokens.map(token => (
        <div key={token._id} className="token" style={{ borderLeft: `7px solid ${getPriorityColor(token.priority)}` }}>
          <p><b>👤 Patient:</b> {token.patientId?.name || "Unknown"}</p>
          <p><b>⏰ Slot:</b> {token.slotId?.startTime} - {token.slotId?.endTime}</p>

          <p>
            <b>⚡ Priority:</b> 
            <span style={{
              marginLeft: "8px",
              padding: "4px 10px",
              borderRadius: "20px",
              background: getPriorityColor(token.priority),
              color: "white",
              fontSize: "12px"
            }}>
              {getPriorityLabel(token.priority)}
            </span>
          </p>

          <p><b>📌 Status:</b> {token.status}</p>
        </div>
      ))}
    </div>
  );
}
