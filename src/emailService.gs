// =========================================================================
// Email Service - Responsável por enviar notificações por email aos funcionários
// =========================================================================

// ============================================================
// Essa função é responsável por enviar um email ao funcionário quando o pagamento
// de um gasto for confirmado. O email inclui detalhes do gasto e um link para o comprovante.
// ============================================================
function enviarEmailPagamentoConfirmado(
  emailFuncionario,
  idGasto,
  valor,
  evento,
  linkComprovante,
) {
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


// ============================================================
// Essa função é responsável por enviar um email ao funcionário quando um gasto for cancelado.
//=============================================================
function enviarEmailGastoCancelado(
  emailFuncionario,
  idGasto,
  evento,
  valor,
  motivoCancelamento,
) {
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
