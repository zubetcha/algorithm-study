function solution(name, yearning, photo) {
    const yearningByNameEntries = name.map((name, i) => [name, yearning[i]]);
    const yearningByName = Object.fromEntries(yearningByNameEntries)
    const answer = photo.map((names) => {
        const yearningSum = names.reduce((acc, cur) => {
            return acc + (yearningByName[cur] ?? 0);
        },0)
        
        return yearningSum;
    });

    return answer;
}