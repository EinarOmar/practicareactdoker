import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("Prueba Unitaria 1: Verificar que el componente se renderice correctamente", () => {
  render(<App />);
  
  // Verificar que el título esté presente en la página
  expect(screen.getByText("Claculadora de divisassss")).toBeInTheDocument();

  // Verificar que el campo de entrada esté presente
  expect(screen.getByPlaceholderText("Introduce tu dinero MXN")).toBeInTheDocument();

  // Verificar que el botón de conversión esté presente
  expect(screen.getByText("CONVERTIR")).toBeInTheDocument();
});
