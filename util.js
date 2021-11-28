module.exports = {
    MatrixProduct : function(matrix1,matrix2) {
        let result = [] ;
        for(let i = 0; i<matrix1.length; i++) {
            result[i] =[];
            for(let j = 0; j<matrix2[0].length; j++) {
                let sum = 0;
                for(let k = 0; k< matrix1[0].length;  k++) {
                    sum += matrix1[i][k] * matrix2[k][j]
                }
                result[i][j]= sum;
            }
        }
        return result;
    },




    sumOfMatrices: function(matrix1,matrix2) {
        let result = [] ;
        for(let i = 0; i<matrix1.length; i++) {
            let row = [] ;
            for (let j = 0; j<matrix1[i].length; j++ ) {
                row.push(matrix1[i][j] + matrix2[i][j]) ;
            }
            result.push(row);
        }
        return result;
    },

    sumOfTheArray : function(array) {
        let sum = 0;
        for(let i = 0; i< array.length; i++) {
            sum = sum + array[i] ;
        }
        return sum;
    },
  

    SumOfEachRow: function(matrix3) {
        let result = [] ;
        for(let i = 0; i<matrix3.length; i++) {
            let sum = this.sumOfTheArray(matrix3[i])
            result.push(sum) ;
        }
        return result;
    }






    
}
















 

