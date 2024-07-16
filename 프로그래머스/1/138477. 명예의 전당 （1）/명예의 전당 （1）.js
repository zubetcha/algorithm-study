function desc(a, b) {
    return b - a;
}

function solution(k, score) {
    let 명예의전당 = [];
    
    score.forEach((s, i) => {
        const dayBefore = 명예의전당[i - 1];
        const newArr = dayBefore ? [...dayBefore, s].sort(desc) : [s];
        
        newArr.splice(k);
        명예의전당.push(newArr);
    })
    
    return 명예의전당.map((scores) => Math.min(...scores));
}