//get a random number from 0 -> num -1
function generateRandomNumber(num) {

    return Math.floor(Math.random() *num)
}

const pickMyTeam = {
    teamHome: ['Las Vegas', 'Eaton', 'San Jose', 'St. Luke'],
    teamName: ['Raiders', 'Silly Nannies', '49ers', 'Rockstompers'],
    teamMoto: ['Just Win Baby', 'Slap me silly and call me a nannie', 'Faithful To The Bay', 'Lets go Strong men, lets go']
}

//store the team in the array
let myTeam = []

//iterate over my array indexs
for(let prop in pickMyTeam) {
    let optionIdx = generateRandomNumber(pickMyTeam[prop].length)

    //use properties to create my team with a custom message
    switch(prop) {
        case 'teamHome': myTeam.push(`Your team's home base is "${pickMyTeam[prop][optionIdx]}".`)
        break
        case 'teamName': myTeam.push(`Your team name is "${pickMyTeam[prop][optionIdx]}".`)
        break
        case 'teamMoto': myTeam.push(`This is your team's war cry: "${pickMyTeam[prop][optionIdx]}".`)
        break
        default: myTeam.push('There is not enough info.')
    }

}
