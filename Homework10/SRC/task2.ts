function identity<T extends { rating: number }>(items: T[]): number {
    if (items.length === 0) return 0;

    const total = items.reduce((sum, item) => sum + item.rating, 0);
    return total / items.length;
}

console.log(identity([{ name: "Anna", rating: 3 }]));

console.log(identity([
    { title: "Encounter", rating: 3 },
    { title: "Dead to me", rating: 4 },
    { title: "Riverdale", rating: 5 }
]));
