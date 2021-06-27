const modal = {
    open() {
        //abrir o modal
        //adicionar a class active ao modal
        document
        .querySelector('.modal-overlay')
        .classList.add('active')
    },
    close() {
        //fechar o modal
        //remover a class active do modal
        document
        .querySelector('.modal-overlay')
        .classList
        .remove('active')
    }
};

const transactions = [    
    {
        id: 1,
        description: "Luz",
        amount: "-50000",
        date: "23/01/2021"
    },
    {
        id: 2,
        description: "Website",
        amount: "500000",
        date: "23/01/2021"
    },
    {
        id: 3,
        description: "Internet",
        amount: "-20000",
        date: "23/01/2021"
    },
]


const transaction = {
    incomes() {

    },
    expenses() {

    },
    total() {

    }
}

const dom = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = dom.innerHtmlTransaction(transaction)

        dom.transactionsContainer.appendChild(tr)
    },

    innerHtmlTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
        <tr>
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover Transação">
            </td>
        </tr>`

        return html;
    }
}

const Utils = {
    formatCurrency(value) {
        const signal  = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value
    }
}

transactions.forEach(function(transaction) {
    dom.addTransaction(transaction)
})