# Requisitos do Sistema

## 🎯 Objetivo

Sistema para controle e automação do processo de reembolso e pagamento de gastos realizados em eventos da Novazul.

O sistema permite que funcionários registrem despesas através de formulários, enquanto o setor financeiro analisa, aprova, paga ou cancela os gastos, mantendo todo o histórico centralizado e automatizando as comunicações por e-mail.

---

## 👥 Atores

### Funcionário

* Registra solicitações de gastos
* Anexa comprovantes
* Recebe notificações automáticas

### Financeiro

* Analisa gastos pendentes
* Processa pagamentos
* Cancela gastos quando necessário
* Anexa comprovantes financeiros

### RH / Gestão

* Consulta informações e histórico dos gastos

---

## 🔁 Fluxo do Sistema

1. Funcionário registra um gasto através do Google Forms
2. O Apps Script captura automaticamente os dados enviados
3. O sistema gera um ID único para o gasto
4. O gasto é registrado na BASE_GASTOS com status PENDENTE
5. A aba FINANCEIRO é atualizada automaticamente
6. O setor financeiro analisa o gasto
7. O financeiro pode:

   * Processar o pagamento
   * Cancelar o gasto
8. Em caso de pagamento:

   * Forma de pagamento é registrada
   * Responsável financeiro é registrado
   * Comprovante financeiro é armazenado
   * Status é atualizado para PAGO
9. Em caso de cancelamento:

   * Motivo do cancelamento é registrado
   * Status é atualizado para CANCELADO
10. O sistema envia automaticamente um e-mail ao funcionário
11. O campo EMAIL_ENVIADO é atualizado para TRUE

---

## 📌 Regras de Negócio

* Todo gasto inicia com status PENDENTE
* Cada gasto deve possuir um ID único
* Apenas gastos pendentes podem ser processados
* Todo pagamento deve possuir comprovante financeiro
* Todo cancelamento deve possuir motivo registrado
* O sistema deve registrar o responsável financeiro da operação
* O sistema deve enviar notificação automática após pagamento ou cancelamento
* O campo EMAIL_ENVIADO deve ser atualizado após envio bem-sucedido da notificação

---

## 📊 Status Possíveis

### PENDENTE

Gasto aguardando análise do setor financeiro.

### PAGO

Gasto aprovado e pago pelo financeiro.

### CANCELADO

Gasto rejeitado ou cancelado pelo financeiro.

---

## 📧 Notificações Automáticas

O sistema envia e-mails automáticos para os funcionários contendo:

### Pagamento Confirmado

* ID do gasto
* Evento
* Valor
* Comprovante financeiro

### Gasto Cancelado

* ID do gasto
* Evento
* Valor
* Motivo do cancelamento

---

## 🛠 Tecnologias Utilizadas

* Google Forms
* Google Sheets
* Google Apps Script
* Google Drive
* Gmail
* Git
* GitHub
