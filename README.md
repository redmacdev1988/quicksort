# quicksort
Quicksort implementation in JS

Understanding and implementing quicksort comes in 2 main steps:

* the divide and conquer recursion
* the partition


# The divide and conquer recursion

The divide and conquer recursion on an array occurs when we have dubbed a mid,
then recursively go into the left side of the array. Then, the right side.

    var arr = [88,234,0,6,4,7,8,45,2,67,23,10];

    function partition(arr, low, high) {
        return Math.floor((low + high) / 2);
    }

    function divAndConq(arr, low, high) {

          console.log("\ndivAndConq: [" + low + ", " + high + "]");

          if (low < high) { // low >= high skips

          var mid = partition(arr, low, high);
          console.log(low + " < " + high + "? √, " + "middle is: " + mid);

          divAndConq(arr, low, mid-1);
          divAndConq(arr, mid + 1, high);

      } else {
        console.log(low + " < " + high + "? X");
      }
    }
