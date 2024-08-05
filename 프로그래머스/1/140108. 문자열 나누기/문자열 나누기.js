function solution(s) {
    let splitedStr = '';
    let firstChar = '';
    let firstCharCnt = 0;
    let notFirstCharCnt = 0;
    const splitedStrArr = [];
    
    for (i = 0; i < s.length; i++) {
        const currChar = s[i];
        
        splitedStr += currChar;
            
        if (!firstChar) {
            firstChar = currChar;
            firstCharCnt = 1;
            continue;
        }
        
        if (firstChar === currChar) {
            firstCharCnt++;
        } else {
            notFirstCharCnt++;
        }
        
        if (firstCharCnt === notFirstCharCnt) {
            splitedStrArr.push(splitedStr);
            splitedStr = '';
            firstChar = '';
            firstCharCnt = 0;
            notFirstCharCnt = 0;
        }
    }
    
    const additionalCnt = s.length - splitedStrArr.join('').length > 0 ? 1 : 0;
    
    return splitedStrArr.length + additionalCnt;
}