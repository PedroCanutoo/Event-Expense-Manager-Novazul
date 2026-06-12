function onFormSubmit(e) {
  processarNovoGasto(e);
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Nova Azul")
    .addItem("Processar gasto selecionado", "abrirModalPagamento")
    .addToUi();
}