const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const UpperCase = streamers.filter(streamer => {
    if(streamer.age > 35 && streamer.gameMorePlayed.includes('Legends')){
        streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
    }
    return streamer.age > 35;
})
    

console.log(UpperCase);