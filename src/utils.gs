// =====================================================================================
// Função responsável por receber o nome de uma aba, obter a planilha ativa
// e retornar uma referência para a aba correspondente.
// =====================================================================================
function getSheet(sheetName) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  return spreadsheet.getSheetByName(sheetName);
}


// =====================================================================================
// Função é responsavel por receber uma chave, acessar a planilha config, procurar a
// chave que foi passada por parâmetro e retornar o valor contido nessa chave.
// =====================================================================================
function getConfigValue(key) {
  const configSheet = getSheet(SHEETS.CONFIG);
  const data = configSheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    const configKey = data[i][0];
    const configValue = data[i][1];

    if (configKey === key) {
      return configValue;
    }
  }

  return null;
}

// =====================================================================================
// Função é responsavel por receber uma chave que já existe e um novo valor. 
// ela acessa a aba de config, procura a chave que foi passada e se achar,
// atualiza o valor dessa chave para o valor passado por parâmetro.
// =====================================================================================
function updateConfigValue(key, newValue) {
  const configSheet = getSheet(SHEETS.CONFIG);
  const data = configSheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    const configKey = data[i][0];

    if (configKey === key) {
      configSheet.getRange(i + 1, 2).setValue(newValue);
      return;
    }
  }
}

// =====================================================================================
// Função responsável por formatar o ID de uma despesa.
// =====================================================================================
function formatExpenseId(number) {
  return "GST-" + String(number).padStart(4, "0");
}