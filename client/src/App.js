import React, { useEffect, useState } from "react";

const App = () => {
  const [transcript, setTranscript] = useState("");
  const [inventory, setInventory] = useState([]);

  const handleVoice = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript;
      setTranscript(command);
      handleCommand(command);
    };
  };

  const handleCommand = async (cmd) => {
    const lower = cmd.toLowerCase();
    if (lower.includes("add item")) {
      const itemName = lower.split("add item ")[1];
      await fetch("/api/inventory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: itemName }),
      });
    } else if (lower.includes("show inventory")) {
      const res = await fetch("/api/inventory");
      const data = await res.json();
      setInventory(data);
    }
  };

  return (
    <div>
      <h1>🎙️ Voice-Controlled Inventory</h1>
      <button onClick={handleVoice}>Start Voice Command</button>
      <p>
        <strong>Transcript:</strong> {transcript}
      </p>
      <ul>
        {inventory.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
