  import React, { useState } from "react";

  function App() {
    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState(0);
    const [selectedCurrency, setSelectedCurrency] = useState("USD");
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    const handleCurrencyChange = (event) => {
      setSelectedCurrency(event.target.value);
      setResult(0); // Reiniciar el resultado a 0 al cambiar la moneda
    };
  ;
    const exchangeRates = {
      USD: 0.049, // 1 MXN = 0.049 USD
      EUR: 0.042, // 1 MXN = 0.042 EUR
      GBP: 0.036, // 1 MXN = 0.036 GBP
      JPY: 5.52, // 1 MXN = 5.52 JPY
      CAD: 0.064, // 1 MXN = 0.064 CAD
      AUD: 0.07, // 1 MXN = 0.070 AUD
      CHF: 0.045, // 1 MXN = 0.045 CHF
    };
    const convertCurrency = () => {
      if (exchangeRates[selectedCurrency]) {
        const rate = exchangeRates[selectedCurrency];
        const amountInMXN = parseFloat(inputValue);
        const result = amountInMXN * rate;
        setResult(result.toFixed(2));
      } else {
        setResult(0);
      }
    };
  
    const styles = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center", // Centra verticalmente
      textAlign: "center",
      padding: "20px",
      border: "1px solid #181717",
      borderRadius: "8px",
      maxWidth: "400px",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "200px",
      
    };
    
    const inputStyles = {
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
    };

    const selectStyles = {
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
    };

    const buttonStyles = {
      backgroundColor: "#0074d9",
      color: "white",
      border: "none",
      padding: "10px 20px",
      cursor: "pointer",
    };

    const resultStyles = {
      fontSize: "20px",
      marginTop: "10px",
    };

    return (
      <div style={styles}>
        <h1>Claculadora de divisas</h1>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Introduce tu dinero MXN"
          style={inputStyles}
        />
        <select
          value={selectedCurrency}
          onChange={handleCurrencyChange}
          style={selectStyles}
        >
          <option value="USD">USD (Dólares)</option>
          <option value="EUR">EUR (Euros)</option>
          <option value="GBP">GBP (Libras)</option>
          <option value="JPY">JPY (Yenes)</option>
          <option value="CAD">CAD (Dólares Canadienses)</option>
          <option value="AUD">AUD (Dólares Australianos)</option>
          <option value="CHF">CHF (Francos Suizos)</option>
          {/* Agrega más opciones de moneda aquí */}
        </select>
        <button onClick={convertCurrency} style={buttonStyles}>
          CONVERTIR
        </button>
        <div style={resultStyles}>
          {result} {selectedCurrency}
        </div>
      </div>
    );
  }

  export default App;
  document.body.style.background = "#cbeeba";