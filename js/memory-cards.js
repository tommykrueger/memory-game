export default {

    // the directory or path of the images
    dir: '/img/fruits/',

    // the number of available images
    amount: 16,

    getCards() {
        let cards = [];
        for (let i=1; i<=this.amount; i++) {
            cards.push({
                id: i,
                img: `${this.dir}${i<10?'0':''}${i}.jpg`
            });
        }
        return cards;
    }
}