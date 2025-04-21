import { useState } from "react";

export default function Dekkoversikt() {
  const [innlogget, setInnlogget] = useState(false);
  const [bruker, setBruker] = useState("");
  const [passord, setPassord] = useState("");

  const dekk = [
    {
      dimensjon: "235/35R19",
      type: "UHP",
      forPrivatkunder: "2 690 kr",
      forBedrifter: "1 925 kr",
      tilgjengelig: "144 stk",
    },
    {
      dimensjon: "225/45R17",
      type: "HP",
      forPrivatkunder: "1 790 kr",
      forBedrifter: "1 220 kr",
      tilgjengelig: "120 stk",
    },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    if (bruker === "bedrift" && passord === "1234") {
      setInnlogget(true);
    } else {
      alert("Feil brukernavn eller passord");
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Dekkoversikt
      </h1>

      <div style={{ display: "grid", gap: "1rem" }}>
        {dekk.map((d, i) => (
          <div key={i} style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
            <h2 style={{ fontSize: "1.2rem" }}>{d.dimensjon}</h2>
            <p>Type: {d.type}</p>
            <p>
              Pris: {innlogget ? d.forBedrifter : d.forPrivatkunder}
            </p>
            {!innlogget && (
              <p style={{ fontSize: "0.9rem", color: "gray" }}>
                Logg inn for bedriftspriser
              </p>
            )}
            <p>Tilgjengelig: {d.tilgjengelig}</p>
            <button style={{ marginTop: "0.5rem" }}>Send forespørsel</button>
          </div>
        ))}
      </div>

      {!innlogget && (
        <div style={{ marginTop: "2rem", borderTop: "1px solid #eee", paddingTop: "1rem" }}>
          <h3 style={{ marginBottom: "0.5rem" }}>Logg inn for bedrifter</h3>
          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "0.5rem", maxWidth: "300px" }}>
            <input
              placeholder="Bedriftsnavn / E-post"
              value={bruker}
              onChange={(e) => setBruker(e.target.value)}
            />
            <input
              type="password"
              placeholder="Passord"
              value={passord}
              onChange={(e) => setPassord(e.target.value)}
            />
            <button type="submit">Logg inn</button>
          </form>
        </div>
      )}
    </div>
  );
}
