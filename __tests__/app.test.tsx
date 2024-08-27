import { expect, it, describe, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import App from "../src/app/page";

describe("App Component Test", () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    cleanup();
  });
  //it.only testa apenas o teste que está sendo executado

  it("Login - Usuário", () => {
    const inputUsuario = screen.getByPlaceholderText("Usuário"); // Corrigido para getByPlaceholderText
    expect(inputUsuario).toBeDefined();
  });

  it("Login - Senha", () => {
    const inputSenha = screen.getByPlaceholderText("Senha"); // Corrigido para getByPlaceholderText
    expect(inputSenha).toBeDefined();
  });

  it("Input change", () => {
    // Seleciona o input de usuário
    const inputUsuario = screen.getByPlaceholderText(
      "Usuário"
    ) as HTMLInputElement; // Corrigido para getByPlaceholderText

    // Simula a mudança de valor no input de usuário
    fireEvent.change(inputUsuario, {
      target: { value: "usuario@teste.com", name: "usuario" },
    });

    // Verifica se o valor foi atualizado corretamente
    expect(inputUsuario.value).toBe("usuario@teste.com"); // Corrigido para comparar o valor
  });
});
