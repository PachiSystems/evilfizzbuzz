function processBuzz(list) {
    return list.map(item => item % 5 === 0 ? 'Buzz' : item)
}

module.exports = processBuzz