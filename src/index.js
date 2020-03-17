
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix || matrix == []){
    return [];
  }else{
    var result = [];
  for(var i = 0; i<= matrix.length-1; i++){
    if(i%2 == 0){
      for(var j = 0; j<= matrix[i].length-1; j++){
        result.push(matrix[i][j]);
      }
    } else {
      for(var j = matrix[i].length-1; j>= 0; j--){
        result.push(matrix[i][j]);
      }
    }
  }
  return result;
  }
}

//console.log(towelSort([[1, 2, 3, 4],
//  [5, 6, 7, 8],
 // [9, 10, 11, 12],
 // [13, 14, 15, 16]]));