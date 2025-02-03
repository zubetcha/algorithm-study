function solution(s) {
    return Array.from(s).sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0)).join('');
}