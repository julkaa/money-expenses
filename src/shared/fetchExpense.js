const DEFAULT_EXPENSES = [
    {
        id: '0',
        title: 'Watch',
        amount: 94.12,
        date: new Date(2021, 7, 14),
    },
    {
        id: '1',
        title: 'Book',
        amount: 69.99,
        date: new Date(2023, 7, 31),
    },
    {id: '2', title: 'New TV', amount: 799.49, date: new Date(2023, 6, 12)},
    {
        id: '3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2023, 2, 28),
    },
    {
        id: '4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

function fetchExpenses() {
    if (!localStorage.getItem('expenses')?.length) {
        localStorage.setItem('expenses', JSON.stringify(DEFAULT_EXPENSES));
    }
}

export {fetchExpenses, DEFAULT_EXPENSES}
