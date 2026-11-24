/* Cadastro das disciplinas da plataforma. Somente estas três. */
window.DISCIPLINAS = {
  fia: {
    sigla: "fia",
    nome: "Fundamentos de IA",
    nomeCompleto: "Fundamentos da Inteligência Artificial",
    descricao: "Conceitos e história da IA, agentes inteligentes, aprendizado de máquina, algoritmos de busca e heurísticas, lógica nebulosa (fuzzy) e redes neurais artificiais."
  },
  ps: {
    sigla: "ps",
    nome: "Projeto de Software",
    nomeCompleto: "Projeto de Software",
    descricao: "Fundamentos de projeto de software, agilidade e Scrum, gestão de riscos, qualidade e documentação, gerência de configuração e mudanças, UX, governança e ferramentas."
  },
  sdm: {
    sigla: "sdm",
    nome: "Sistemas Digitais e Microprocessadores",
    nomeCompleto: "Sistemas Digitais e Microprocessadores",
    reforco: true,
    descricao: "Sistemas de numeração, álgebra booleana e portas lógicas, circuitos combinacionais e sequenciais, arquitetura de microprocessadores e microcontroladores (Arduino)."
  }
};
window.ORDEM_DISCIPLINAS = ["fia", "ps", "sdm"];

/* Versão usada para forçar o navegador a baixar arquivos novos após cada atualização. */
window.VERSAO = "20261124-1";
