module.exports = function longestConsecutiveLength(array) {
  if (array.length == 0) {
        return 0;
    }

    var nick = [];
    var max = 1;

    for (var i=0; i<array.length; i++)
        nick.push(array[i]);

    for (var i=0; i<array.length; i++) {

        var right = array[i] + 1;
        var count = 1;

        while (nick.indexOf(right) != -1) {
            count++;
            nick.splice(nick.indexOf(right), 1);
            right++;
        }

        max = Math.max(count, max);
    }

    return max;


  // your solution here
}
