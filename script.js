const cfl = (str) => str.split(" ").map(w => w[w.length - 1] != "." ? w[0].toUpperCase() + w.slice(1) : w)

function rd(numList) {
    const newlist = []
    for (const num of numList) {
        if (newlist.includes(num))
            continue
        newlist.push(num)
    }
    return newlist
}


function fasen(numList) {
    const newList = numList.filter(n => n % 2 == 0).sort((a, b) => a - b)
    return newList
}