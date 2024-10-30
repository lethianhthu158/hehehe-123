const findWinner = (cells,sizeCells) => {
    const size = Math.sqrt(sizeCells); // Kích thước hàng ngang/dọc
    console.log("kich thuoc cell luat choi", sizeCells)
    const winCount = 5; // Số ô liên tiếp để thắng

    // Kiểm tra hàng ngang
    for (let row = 0; row < size; row++) {
        for (let col = 0; col <= size - winCount; col++) {
            const start = row * size + col;
            if (
                cells[start] && 
                cells[start] === cells[start + 1] && 
                cells[start] === cells[start + 2] && 
                cells[start] === cells[start + 3] && 
                cells[start] === cells[start + 4]
            ) {
                return cells[start];
            }
        }
    }

    // Kiểm tra hàng dọc
    for (let col = 0; col < size; col++) {
        for (let row = 0; row <= size - winCount; row++) {
            const start = row * size + col;
            if (
                cells[start] && 
                cells[start] === cells[start + size] && 
                cells[start] === cells[start + 2 * size] && 
                cells[start] === cells[start + 3 * size] && 
                cells[start] === cells[start + 4 * size]
            ) {
                return cells[start];
            }
        }
    }

    // Kiểm tra chéo (từ trái trên đến phải dưới)
    for (let row = 0; row <= size - winCount; row++) {
        for (let col = 0; col <= size - winCount; col++) {
            const start = row * size + col;
            if (
                cells[start] && 
                cells[start] === cells[start + size + 1] && 
                cells[start] === cells[start + 2 * (size + 1)] && 
                cells[start] === cells[start + 3 * (size + 1)] && 
                cells[start] === cells[start + 4 * (size + 1)]
            ) {
                return cells[start];
            }
        }
    }

    // Kiểm tra chéo (từ phải trên đến trái dưới)
    for (let row = 0; row <= size - winCount; row++) {
        for (let col = winCount - 1; col < size; col++) {
            const start = row * size + col;
            if (
                cells[start] && 
                cells[start] === cells[start + size - 1] && 
                cells[start] === cells[start + 2 * (size - 1)] && 
                cells[start] === cells[start + 3 * (size - 1)] && 
                cells[start] === cells[start + 4 * (size - 1)]
            ) {
                return cells[start];
            }
        }
    }

    return null; // Không có người thắng
};

export default findWinner;
