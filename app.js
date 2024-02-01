const team = {
    _players: [
      {firstName:'Isaac', lastName: 'Wanyoike', age: '33'},
    {firstName: 'Daisy', lastName: 'Lagat', age: '23'},
    {firstName: 'Mohamed', lastName: 'Onyango', age:'34'}],
    
    _games: [
      {opponent: 'New York Bulls', teamPoints: '45', opponentPoints: '56'},
      {opponent: 'New York Knicks', teamPoints: '115', opponentPoints: '23'},
      {opponent: 'Chicago Bulls', teamPoints: '155', opponentPoints: '56'},
    ],
  
    get players(){
      return this._players;
    },
  
    get games(){
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      const game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints,
      };
      this._games.push(game);
    }
  
  }
  
   team.addPlayer('Bugs', 'Bunny', '76');
   team.addGame('Titans', 100, 98);
  console.log(team.games);
  
  
  
  
  
  