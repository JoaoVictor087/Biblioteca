export interface Register {
  nome: string,
  email: string,
  senha: string,
  role: "USUARIO" | "ADMIN",
}
