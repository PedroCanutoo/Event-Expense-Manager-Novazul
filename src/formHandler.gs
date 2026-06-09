// ============================================================
// Essa função pega os campos de uma resposta do formulário e
// armazena em um obj.
// =============================================================
function getResponseForm(e) {
    const values = e.values;

    const response = {
        timestamp: values[0],
        emailFuncionario: values[1],
        evento: values[2],
        tipoGasto: values[3],
        dataGasto: values[4],
        descricao: values[5],
        valor: values[6],
        pix: values[7],
        comprovanteFuncionario: values[8],
    };

    return response;
}

// ============================================================
// Essa função gera um novo ID para o gasto, buscando o último
// ID registrado na aba CONFIG, incrementando +1 e atualizando
// o valor para o próximo uso.
// ============================================================
function gerarIdGasto() {
    const ultimoId = getConfigValue(CONFIG_KEYS.ULTIMO_ID_GASTO);
    const novoId = Number(ultimoId) + 1;

    updateConfigValue(CONFIG_KEYS.ULTIMO_ID_GASTO, novoId);

    return formatExpenseId(novoId);
}

// ============================================================
// Essa função recebe os dados do formulário e o ID do gasto,
// formata de acordo com a estrutura da aba BASE_GASTOS e retorna
// um array com esses valores.
// ============================================================
function formatarRegistroGasto(dadosFormulario, idGasto) {
    return [
        idGasto,
        dadosFormulario.timestamp,
        dadosFormulario.emailFuncionario,
        dadosFormulario.evento,
        dadosFormulario.tipoGasto,
        dadosFormulario.dataGasto,
        dadosFormulario.descricao,
        dadosFormulario.valor,
        dadosFormulario.pix,
        dadosFormulario.comprovanteFuncionario,
        STATUS.PENDENTE,
        "",
        "",
        "",
        "",
        "",
        "",
        false,
    ];
}

// ============================================================
// Essa função recebe um registro formatado e salva na próxima
// linha disponível da aba BASE_GASTOS.
// ============================================================
function salvarGastoNaBase(registro) {
    const gastosSheet = getSheet(SHEETS.BASE_GASTOS);
    gastosSheet.appendRow(registro);
}

// ============================================================
// Essa função coordena o fluxo de cadastro de um novo gasto:
// pega os dados do formulário, gera o ID, formata o registro
// e salva na BASE_GASTOS.
// ============================================================
function processarNovoGasto(e) {
    const dadosFormulario = getResponseForm(e);
    const idGasto = gerarIdGasto();
    const registro = formatarRegistroGasto(dadosFormulario, idGasto);

    salvarGastoNaBase(registro);
}
