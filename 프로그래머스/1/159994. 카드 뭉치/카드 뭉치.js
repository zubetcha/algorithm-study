function solution(cards1, cards2, goal) {
    const isPossible = goal.every((word, i) => {
        if (i === goal.length - 1) {
            return true;
        }
        
        const nextWord = goal[i + 1];
        const targetCards = cards1.includes(word) ? [...cards1] : [...cards2];
        if (!targetCards.includes(nextWord)) {
            return true;
        }
        
        const currWordIndex = targetCards.indexOf(word);
        const nextWordIndex = targetCards.indexOf(nextWord);
        
        if (nextWordIndex === currWordIndex + 1) {
            return true;
        }
        
        return false;
    })
    
    return isPossible ? 'Yes' : 'No';
}