//EXPORT A FUNCTION TO GEN A STRING OF RANDOM NUMBERS AND LETTERS
module.exports = () => Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .toString(1);