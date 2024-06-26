function sumPrimeAndNonPrime(input) {
    let index = 0;
    
    let command = input[index];
    index++;

    let primeSum = 0;
    let numPrimeSum = 0;


    while (command !== 'stop') {
        let num = Number(command);

        if (num < 0) {
            console.log('Number is negative.');
            command = input[index];
            index++;
            continue;
            }

        let isPrime = true;

        for (let divisor = 2; divisor < num; divisor++) {
            if (num % divisor === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeSum += num;
        } else {
            numPrimeSum += num;
        }

        command = input[index];
        index++;
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${numPrimeSum}`);
}