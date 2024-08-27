import { expect, it, describe, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/app/page";

describe("App Component Test", () => {
  beforeEach(() => {
    render(<App />);
  });
  //it.only testa apenas o teste que está sendo executado
  it("Login - Usuário", () => {
    const inputUsuario = screen.findByPlaceholderText("Usuário");
    expect(inputUsuario).toBeDefined();
  });
  it("Login - Senha", () => {
    const inputSenha = screen.findByPlaceholderText("Senha");
    expect(inputSenha).toBeDefined();
  });
});
