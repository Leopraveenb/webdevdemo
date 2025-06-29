import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "=", "+"]
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f3f4f6' }}>
      <div style={{ width: 320, borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.1)', padding: 24, background: '#fff' }}>
        <div style={{ marginBottom: 16, textAlign: 'right', fontSize: 24, padding: 8, background: '#fff', borderRadius: 8, fontFamily: 'monospace', border: '1px solid #eee' }}>
          {input || "0"}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
          {buttons.flat().map((btn, i) => (
            <button
              key={i}
              style={{ fontSize: 18, padding: 12, borderRadius: 8, border: '1px solid #ddd', background: '#f9fafb', cursor: 'pointer' }}
              onClick={() =>
                btn === "="
                  ? handleCalculate()
                  : btn === "C"
                  ? handleClear()
                  : handleClick(btn)
              }
            >
              {btn}
            </button>
          ))}
          <button style={{ gridColumn: 'span 4', background: '#ef4444', color: '#fff', fontWeight: 'bold', borderRadius: 8, padding: 12, marginTop: 8, cursor: 'pointer' }} onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
