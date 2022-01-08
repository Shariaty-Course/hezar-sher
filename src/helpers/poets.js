export function getPoetsFacade(poets) {
    const facade = [];

    for (let i = 0; i < poets.length; i++) {
        const poet = poets[i];

        facade.push({
            id: poet.id,
            name: poet.nickname,
            image: `https://ganjgah.ir${poet.imageUrl}`,
        });
    }

    return facade;
}
