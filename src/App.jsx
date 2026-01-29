import Doctors from "./Doctors";
import Patients from "./Patients";
import BookToken from "./BookToken";
import Tokens from "./Tokens";

export default function App() {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>🏥 OPD Token System</h1>

      <BookToken />
      <Doctors />
      <Patients />
      <Tokens />
    </div>
  );
}
