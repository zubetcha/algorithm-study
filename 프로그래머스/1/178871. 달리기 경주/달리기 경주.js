function solution(players, callings) {    
//     const hashMap = players.reduce((acc, cur, i) => {
//         return {
//             ...acc,
//             [cur]: i
//         }
//     }, {});
    
//     callings.forEach((calling) => {
//         const callingIndex = hashMap[calling];
//         const headIndex = callingIndex - 1;
//         const headPlayer = players[headIndex];
        
//         players[headIndex] = calling;
//         players[callingIndex] = headPlayer;
//         hashMap[calling] = headIndex;
//         hashMap[headPlayer] = callingIndex;
//     })
    
//     return players;
    const hashMap = new Map();

players.forEach((player, i) => {
    hashMap.set(player, i);
})

callings.forEach((calling) => {
    const callingIndex = hashMap.get(calling);
    const headIndex = callingIndex - 1;
    const headPlayer = players[headIndex];

    players[headIndex] = calling;
    players[callingIndex] = headPlayer;
    hashMap.set(calling, headIndex);
    hashMap.set(headPlayer, callingIndex);
})

return players;
}