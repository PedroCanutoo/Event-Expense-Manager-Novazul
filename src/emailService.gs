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
function enviarEmailGastoCancelado(emailFuncionario, idGasto, evento, valor, motivoCancelamento) {
  const assunto = `Gasto cancelado - ${idGasto}`;

  const corpo = `
Olá,

O gasto ${idGasto} foi cancelado.

Evento: ${evento}
Valor: R$ ${valor}
Motivo: ${motivoCancelamento}

Atenciosamente,
Equipe Nova Azul
`;

  GmailApp.sendEmail(emailFuncionario, assunto, corpo);
}