function solution(t, p) {
    const checkLength = p.length;
    const checkCount = t.length - checkLength;
    const numP = Number(p);
    let count = 0;
    
    for (i = 0; i <= checkCount; i++) {
        const num = Number(t.slice(i, i+checkLength));
        
        if (num <= numP) {
            count++
        }
    }

    return count;
}