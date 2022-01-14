import hafezPoems from "src/assets/hafez.json";

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

export function getInterpretation(couplets) {
    const thePoem = hafezPoems.find((each) => (
        for (let i = 0; i < couplets.length; i++) {
            for (let j = 0; j < couplets[i].length; j++) {
                if (each.poem.includes(couplets[i][j])) {
                    return true;
                }
            }
        }
    ));

    return thePoem.interpretation;
}
