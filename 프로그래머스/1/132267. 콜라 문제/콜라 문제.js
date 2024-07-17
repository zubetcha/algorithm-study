function solution(a, b, n) {
    let answer = 0;
    
    while (n >= a) {
        const share = Math.floor(n / a);
        const bottleCnt = share * b;
        
        answer += bottleCnt;
        n = n - share * a + bottleCnt;
    }
    
    return answer;
}