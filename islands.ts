type IslandsMatrixItemValues = '0' | '1'

type IslandsMatrixRow = IslandsMatrixItemValues[]

type IslandsMatrix = IslandsMatrixRow[]

// метод обхода острова, который принимает матрицу и координаты:
const markIsland = (matrix:IslandsMatrix, x: number, y: number ) => {
  let xLength = matrix.length;
  let yLength = matrix[0].length;
  console.log('matrix = ', matrix);

  //условие выхода за край матрицы:
  if (x < 0 || y < 0 || x >= xLength || y >= yLength || matrix[x][y] == '0') {
    return;
  }

  //если не вышли за границу, помечаем ячейку как 0:
  matrix[x][y] = '0';

  //осматриваемся:
  markIsland(matrix, x - 1, y); //вверх
  markIsland(matrix, x + 1, y); //вниз
  markIsland(matrix, x, y - 1); //влево
  markIsland(matrix, x, y + 1); //вправо
};

//метод расчёта:
const howMuchlands = (matrix: IslandsMatrix) => {
  let xLength = matrix.length;
  if (xLength == 0) return 0;
  let yLength = matrix[0].length;

  //переменная, хранящая кол-во островов:
  let numIslands = 0;

  //перебор строк:
  for (let i = 0; i < xLength; i++) {
    //перебор столбцов:
    for (let j = 0; j < yLength; j++) {
      if (matrix[i][j] == '1') {
        //если находим "1", то увеличиваем каунтер островов:
        numIslands++;
        //запускаем метод обхода острова по периметру:
        markIsland(matrix, i, j);
      }
    }
  }
  return numIslands;
}

const start = ()=> {
  //формируем расположение островов:
  let map:IslandsMatrix = [
    ['0','0','0','0','1'],
    ['0','0','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','0']
  ]
  console.log("Количество островов: " + howMuchlands(map));
}

start();
