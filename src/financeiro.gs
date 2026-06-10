// =============================================================
// Função pega os gastos pendestes da BASE_GASTOS 
// e retorna um array com eles 
// =============================================================
function getGastosPendentes() {
  const sheet = getSheet(SHEETS.BASE_GASTOS);
  const data = sheet.getDataRange().getValues();

  const gastosPendentes = [];

  data.slice(1).forEach((row) => {
    const status = row[10];

    if (status === STATUS.PENDENTE) {
      gastosPendentes.push(row);
    }
  });

  return gastosPendentes;
}

// =============================================================
// Função limpa os dados da aba financeiro
// =============================================================
function limparDadosFinanceiro() {
  const sheet = getSheet(SHEETS.FINANCEIRO);

  const lastRow = sheet.getLastRow();

  if (lastRow > 1) {
    sheet.getRange(2, 1, lastRow - 1, sheet.getLastColumn()).clearContent();
  }
}

// =============================================================
// Função pega o array de gastos pendentes (que contem os gastos pendendentes da basegastos)
// formata eles para incluir na aba financeiro, assim, cria um novo array com os dados
// formatados.
// =============================================================
function formatarGastosParaFinanceiro(gastosPendentes) {
  const registrosFinanceiro = [];

  gastosPendentes.forEach((gasto) => {
    const registro = [
      gasto[0], 
      gasto[2], 
      gasto[3], 
      gasto[4], 
      gasto[5],
      gasto[6], 
      gasto[7], 
      gasto[8], 
      gasto[9], 
      gasto[10], 
      "PROCESSAR",
    ];

    registrosFinanceiro.push(registro);
  });

  return registrosFinanceiro;
}


// =============================================================
// Função pega os gastos formatados e insere na aba financeiro
// cada um na ultima linha.
// =============================================================
function inserirgastosFinanceiros(registrosFinanceiro) {
    const sheet = getSheet(SHEETS.FINANCEIRO);
    var ultimaLinha = sheet.getLastRow() + 1;

    registrosFinanceiro.forEach((registro) => {
        sheet.getRange(ultimaLinha, 1, 1, registro.length).setValues([registro]);
        ultimaLinha++;
    })

}

// =============================================================
// Função principal, junta todas as outras e faz a atualizaçção da aba financeiro
//  pega os gastos pendentes, formata eles e insere na aba financeiro.
// =============================================================
function atualizarAbaFinanceiro() {
    const gastosPendentes = getGastosPendentes();
    const registrosFinanceiro = formatarGastosParaFinanceiro(gastosPendentes);

    limparDadosFinanceiro();
    inserirgastosFinanceiros(registrosFinanceiro);
}
