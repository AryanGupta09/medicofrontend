import { useState, useEffect } from "react";
import api from "./api";

export default function BookToken() {
  const [patients, setPatients] = useState([]);
  const [slots, setSlots] = useState([]);
  const [patientId, setPatientId] = useState("");
  const [slotId, setSlotId] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.get("/patients").then(res => setPatients(res.data));
    api.get("/slots").then(res => setSlots(res.data));
  }, []);

  const bookToken = async () => {
    if (!patientId || !slotId) {
      alert("Select patient and slot");
      return;
    }

    try {
      setLoading(true);
      await api.post("/tokens/book", { patientId, slotId });
      alert("✅ Token Booked Successfully!");
      window.location.reload();
    } catch {
      alert("❌ Backend error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>🎟 Book OPD Token</h2>

      <label>👤 Select Patient</label>
      <select value={patientId} onChange={e => setPatientId(e.target.value)}>
        <option value="">-- Choose Patient --</option>
        {patients.map(p => (
          <option key={p._id} value={p._id}>{p.name}</option>
        ))}
      </select>

      <label>⏰ Select Slot</label>
      <select value={slotId} onChange={e => setSlotId(e.target.value)}>
        <option value="">-- Choose Slot --</option>
        {slots.map(s => (
          <option key={s._id} value={s._id}>
            {s.startTime} - {s.endTime}
          </option>
        ))}
      </select>

      <button onClick={bookToken} disabled={loading}>
        {loading ? "Booking..." : "Book Token"}
      </button>
    </div>
  );
}
