import { useEffect, useState } from "react";
import api from "./api";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    api.get("/doctors").then(res => setDoctors(res.data));
  }, []);

  return (
    <div className="card">
      <h2>👨‍⚕️ Doctors</h2>
      {doctors.map(doc => (
        <p key={doc._id}>🩺 <b>{doc.name}</b> — {doc.specialty}</p>
      ))}
    </div>
  );
}
