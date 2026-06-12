function enviarEmailPagamentoConfirmado(emailFuncionario,idGasto,valor,evento,linkComprovante,) {
  const assunto = `Pagamento confirmado - ${idGasto}`;

  const corpo = `
    Olá,

    O pagamento referente ao gasto ${idGasto} foi confirmado.

    Evento: ${evento}
    Valor: R$ ${valor}
    Comprovante: ${linkComprovante}

    Atenciosamente,
    Equipe Nova Azul
`;

  GmailApp.sendEmail(emailFuncionario, assunto, corpo);
}
