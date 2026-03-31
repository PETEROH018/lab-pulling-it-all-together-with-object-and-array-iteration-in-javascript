function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}
const game = gameObject()
//Returns the points scored by a player given the player name
function numPointsScored(playerName){
    
    for (const team in game) {
        

        if(game[team].players[playerName]){
            return game[team].players[playerName].points
        }
    }
    return "Player not found"
}

//console.log(numPointsScored("Brendan Hayword"))

//Returns the shoe size of a player given the player name
function shoeSize(playerName){
    
    for(const team in game){

        if(game[team].players[playerName]){
            return game[team].players[playerName].shoe
        }
    }
    return "Player not found"
}
//console.log(shoeSize("Brendan Hayword"))

//Returns the team colors given a team name
function teamColors(teamName){
    for (const team in game){
        if(game[team].teamName === teamName){
            return game[team].colors
        }

    }
    
    return "team not found"
}

//console.log(teamColors("Charlotte Hornets"))

//Returns the team names by first collecting the game object values into an array then using the array.map() function to extract the team names
function teamNames(){
        
    return Object.values(game).map(team => team.teamName)
    }


//console.log(teamNames())
//Returns the player numbers given a team name
function playerNumbers(teamName){
    for (const team in game){
        if(game[team].teamName === teamName) {
            return Object.values(game[team].players).map(player => player.number)
        }    
    }

return "Team not found"

}   


//console.log(playerNumbers("Brooklyn Nets"))

function playerStats(playerName){
    for (const team in game) {
        if(game[team].players[playerName]){
            return game[team].players[playerName]
        }
    }

return "Player not found"
}

//console.log(playerStats("Ben Gordon"))

function bigShoeRebounds(){
    // The spread operator(...) is used to combine two arrays returned by the Object.values() method for the home and away teams
    const allPlayers = [...Object.values(game.away.players),...Object.values(game.home.players)]
    const largestShoePlayer = allPlayers.reduce((prev,curr) => 
        (prev.shoe > curr.shoe) ? prev : curr
    )
    return largestShoePlayer.rebounds

    

}

//console.log(bigShoeRebounds())