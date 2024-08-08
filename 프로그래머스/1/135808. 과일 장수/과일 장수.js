// 엣지케이스: 이익이 발생하지 않는 경우 0 리턴

function solution(k, m, score) {
    if (score.length < m) {
        return 0;
    }
    
    const share = Math.floor(score.length / m);
    const desc = score.sort((a, b) => b - a).slice(0, m * share);
    let maxProfit = 0;
    
    for (let i = 0; i < share; i++) {
        maxProfit += desc[i * m + m - 1] * m;
    }
    
    return maxProfit;
}