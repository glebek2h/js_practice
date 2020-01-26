class Matrix {
  constructor(matrix) {
    if (this.isMatrix(matrix)) {
      this.matrix = matrix;
      this.rowsCount = matrix.length;
      this.colsCount = matrix[0].length;
    }
  }

  isMatrix(matrix) {
    if (!(matrix && Array.isArray(matrix) && Array.isArray(matrix[0])))
      throw new Error("it is not a matrix");
    return true;
  }

  plus_minus(m, str = "+") {
    if (
      m instanceof Matrix &&
      this.isMatrix(m.matrix) &&
      this.rowsCount === m.rowsCount &&
      this.colsCount === m.colsCount
    ) {
      this.matrix = this.matrix.map((row, rowIndex) => {
        if (str === "-") {
          return row.map((el, colIndex) => el - m.matrix[rowIndex][colIndex]);
        }
        return row.map((el, colIndex) => el + m.matrix[rowIndex][colIndex]);
      });
    }
  }

  print() {
    console.log(`matrix[${this.rowsCount}][${this.colsCount}]:`);
    this.matrix.forEach(row => console.log(row));
  }
  /*
   * multiply_divide
   *
   * isSymmetric
   *
   * transpose
   *
   * isThreeDiagonal
   *
   * find/filter
   *
   * indexOf
   *
   * includes
   *
   * sort
   *
   * reverse
   *
   * push
   *
   * pop
   *
   * shift
   *
   * unshift
   *
   * splice
   *
   * slice
   *
   * concat
   *
   *
   */
}

const m1 = new Matrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);
const m2 = new Matrix([
  [10, 11, 12],
  [13, 14, 15],
  [16, 17, 18]
]);
m1.print();
m1.plus_minus(m2);
m1.print();
