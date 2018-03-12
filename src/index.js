module.exports = function longestConsecutiveLength(array) {
array.sort(compare);
  if (array.length == 0) {
        return 0;
    }

    var count = 1;
    var max = 1;

    function compare(a,b){
      if(a>b) return 1;
      if(a<b) return -1;
    }

    for (var i=0; i<array.length; i++){
      if(array[i]+1 == array[i+1]){
        count++;
        if(count>max){
          max=count;
        }
      }
      else if(array[i] == array[i+1]){
        count=count;
      }
      else count=1;
    }

    return max;


  // your solution here
}
