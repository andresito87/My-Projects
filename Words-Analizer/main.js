txt.addEventListener('input', event => {

    let text = event.target.value;
    text = text.toLowerCase();
    text = text.replace(/[$\.¿\?,;\:]/g, ' ');
    text = text.replace(/\s+/g, ' ').trim();
    let words = text.split(' ');

    const resultsWords = words.reduce((acc, word) => {
        acc.filter(w => w.word === word).length === 0 ?
            acc.push({ word: word, total: 1 }) :
            acc.find(w => w.word === word).total++;
        return acc;
    }, []);


    result.innerHTML = resultsWords.reduce((acc, word) => {
        return acc + `<p>
            <label>${word.word}<label>: ${word.total}
        </p>`
    }, '');
});