// 첫 파일: [i, j]
// 마지막 파일: [i + 1, j + 1]
// return [minX, minY, maxX, maxY]
function solution(wallpaper) {
    const FILE = "#";
    let min = [];
    let max = []
    
    wallpaper.forEach((row, x) => {
        const firstY = row.indexOf(FILE);
        const lastX = x + 1;
        const lastY = row.lastIndexOf(FILE) + 1;
        
        if (firstY < 0) {
            return;
        }

        if (min.length === 0) {
            min = [x, firstY];
        } else if (firstY < min[1]) {
            min = [min[0], firstY];
        }
        
        if (max.length === 0) {
            max = [lastX, lastY];
        } else {
            if (lastX > max[0]) {
                max = [lastX, max[1]];
            }
            
            if (lastY > max[1]) {
                max = [max[0], lastY]
            }
        }
        
    })

    return min.concat(max);
}