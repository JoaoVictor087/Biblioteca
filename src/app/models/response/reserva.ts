export interface ReservaResponse {
  id: number;
  usuario: {
    id: number;
    nome: string;
    email: string;
    role: string;
  };
  livro: {
    id: number;
    titulo: string;
    autor: string;
    quantidadeTotal: number;
    quantidadeDisponivel: number;
    capa?: string;
  };
  dataAluguel: Date;
  dataDevolucao: Date;
  status: 'ATIVA' | 'DEVOLVIDA' | 'CANCELADA';
}
