const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));

const balance = web3.eth.getBalance("0x601480220511f19af71a5e0cbf44a888e735ca15")
console.log(balance.toString(10))

const acc = web3.eth.accounts.create()
console.log(acc)
const adress = acc.address
const privateKey = acc.privateKey
console.log(adress, privateKey)