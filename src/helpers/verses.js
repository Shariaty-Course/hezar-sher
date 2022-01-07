export function makeCouplets(verses) {
    const couplets = [];

    verses.forEach((verse, index) => {
        if (index % 2 === 0) {
            return couplets.push([verse.text]);
        }
        couplets[couplets.length - 1].push(verse.text);
    });

    return couplets;
}
