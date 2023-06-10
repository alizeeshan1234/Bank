const person1 = {
    name: "Harry",
    pin: 6365,
    balance: 10000
};

const person2 = {
    name: 'Hermione',
    pin: 1912,
    balance: 3000,
};

const balanceElement = document.querySelector('#balance');
const recordElement = document.querySelector('#record');
const transferRecords = [];

document.querySelector('#log').addEventListener('click', () => {
    const user = document.querySelector('#user').value;
    const pin = parseInt(document.querySelector('#pin').value);

    if (user === person1.name && pin === person1.pin) {
        document.querySelector('#welcome').innerHTML = `Welcome Back Mr. ${person1.name}`;
        document.querySelector('#show').style.opacity = '100%';
        balanceElement.innerHTML = `$${person1.balance}`;
    }

    if (user === person2.name && pin === person2.pin) {
        document.querySelector('#welcome').innerHTML = `Welcome Back Mrs. ${person2.name}`;
        document.querySelector('#show').style.opacity = '100%';
        balanceElement.innerHTML = `$${person2.balance}`;
    }
});

document.querySelector('#transfer_amount').addEventListener('click', () => {
    const transferTo = document.querySelector('#transferTo').value;
    const amount = parseInt(document.querySelector('#amountTransfer').value);

    console.log(transferTo);
    console.log("Transfered " + amount);

    transferRecords.push(amount);
    console.log(transferRecords);

    recordElement.innerHTML = transferRecords.map(record => `<div>Transfered: ${record}</div>`).join('');

    let sender, receiver;

    if (transferTo === person1.name) {
        sender = person2;
        receiver = person1;
    } else if (transferTo === person2.name) {
        sender = person1;
        receiver = person2;
    } else {
        console.log('Invalid recipient');
        return;
    }

    if (sender.balance >= amount) {
        sender.balance -= amount;
        receiver.balance += amount;
        balanceElement.innerHTML = `$${sender.balance}`;
    } else {
        console.log('Insufficient balance');
    }
});

document.querySelector('#getLoan').addEventListener('click', () => {
    const loanAmount = parseInt(document.querySelector('#loanAmount').value);

    if (loanAmount > 0) {
        let currentUser;
        if (document.querySelector('#user').value === person1.name) {
            currentUser = person1;
        } else if (document.querySelector('#user').value === person2.name) {
            currentUser = person2;
        } else {
            console.log('Invalid user');
            return;
        }

        currentUser.balance += loanAmount;
        balanceElement.innerHTML = `$ ${currentUser.balance}`;
        console.log(`${currentUser.name} received a loan of ${loanAmount}`);
    } else {
        console.log('Invalid loan amount');
    }
});

document.querySelector('#close_acc').addEventListener('click', () => {
    const confirmUser = document.querySelector('#conform_user').value;
    const confirmPin = parseInt(document.querySelector('#conform_pin').value);

    if (confirmUser === person1.name && confirmPin === person1.pin) {
        document.querySelector('#welcome').innerHTML = `Account Closed: Mr. ${person1.name}`;
        document.querySelector('#show').style.opacity = '0';
        balanceElement.innerHTML = '$0000';
        recordElement.innerHTML = '';
    }

    if (confirmUser === person2.name && confirmPin === person2.pin) {
        document.querySelector('#welcome').innerHTML = `Account Closed: Mrs. ${person2.name}`;
        document.querySelector('#show').style.opacity = '0';
        balanceElement.innerHTML = '$0000';
        recordElement.innerHTML = '';
    }
});

