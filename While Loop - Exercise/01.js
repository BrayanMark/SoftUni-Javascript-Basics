function oldBooks(input) {
    let index = 0;
    let bookSearched = input[index];
    index++;
    let command = input[index];
    index++;
    let books = 0;

    while (command !== 'No More Books') {
        if (command === bookSearched) {
            console.log(`You checked ${books} books and found it.`);
            break;
        }
        books++;
        command = input[index];
        index++;
    }
    if (command === 'No More Books') {
        console.log("The book you search is not here!");
        console.log(`You checked ${books} books.`);
    }

}