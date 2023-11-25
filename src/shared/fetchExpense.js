export const DEFAULT_EXPENSES = [
    {
        id: 'e1',
        title: 'Watch',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'Book',
        amount: 69.99,
        date: new Date(2023, 7, 31),
    },
    {id: 'e3', title: 'New TV', amount: 799.49, date: new Date(2023, 6, 12)},
    {
        id: 'e4',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2023, 2, 28),
    },
    {
        id: 'e5',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

export function fetchExpenses() {
    if (!localStorage.getItem('expenses')?.length) {
        localStorage.setItem('expenses', JSON.stringify(DEFAULT_EXPENSES));
    }
}

