function solution(keymap, targets) {
    const minCntByCharMap = new Map();
    
    for (i = 0; i < keymap.length; i++) {
        const keys = keymap[i];
        
        for (j = 0; j < keys.length; j++) {
            const currentChar = keys[j];
            const currentMin = minCntByCharMap.get(currentChar);
            const currentCnt = j + 1;
            
            
            if (currentMin && currentMin <= currentCnt) {
                continue;
            }
            
            minCntByCharMap.set(currentChar, currentCnt)
        }
    }
    
    const answer = targets.map((target) => {
        let cntSum = 0;
        
        for (i = 0; i < target.length; i++) {
            const minCnt = minCntByCharMap.get(target[i]);
            
            if (!minCnt) {
                cntSum = -1;
                break;
            }
            
            cntSum += minCnt;
        }
        
        return cntSum;
    });
    
    return answer;
}