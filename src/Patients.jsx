import { useEffect, useState } from "react";
import api from "./api";

export default function Patients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    api.get("/patients")
      .then(res => setPatients(res.data))
      .catch(() => console.log("Patients API error"));
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Patients</h2>
      {patients.map(p => (
        <p key={p._id}>
          👤 {p.name} — {p.type}
        </p>
      ))}
    </div>
  );
}
