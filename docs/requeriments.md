# Requisitos do Sistema

## 🎯 Objetivo
Sistema para controle de gastos em eventos da Novazul.

## 👥 Atores

- Funcionário
- Financeiro
- RH

## 🔁 Fluxo

1. Funcionário registra gasto
2. Sistema captura dados
3. Gasto é armazenado como PENDENTE
4. Financeiro processa pagamento
5. Sistema envia confirmação por email
6. Relatórios são gerados

## 📌 Regras de negócio

- Todo gasto inicia como PENDENTE
- Só pode ser marcado como PAGO com comprovante
- Email é enviado após pagamento

## 📊 Status possíveis

- PENDENTE
- PAGO
- CANCELADO