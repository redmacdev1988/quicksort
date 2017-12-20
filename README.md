# quicksort
Quicksort implementation in JS

Understanding and implementing quicksort comes in 2 main steps:

* the divide and conquer recursion
* the partition


# The divide and conquer recursion

The divide and conquer recursion on an array occurs when we have dubbed a mid,
then recursively go into the left side of the array. Then, the right side.

This recursive method makes sure that you touch on every element.

But how?

1) Print (process) if low == high. This means we have reached a single element.
2) We are at multiple element array. We calculate the mid.
3) recurse into the left array.
4) print the mid.
5) recurse into the right array.


Say we have an array with 1 to 9. Indexed from 0 to 8.

[1,2,3,4,5,6,7,8,9]

The concept of recursive divide and conquer is that we calculate a pivot first. The pivot is calculated to be somewhere in the middle of the array, then the left and right array are recursively processed.

For simplification purposes, we want to keep things simple. So let’s calculate the pivot such that it is:
floor of (low + high)/2

## process left array
[1(low), 2, 3, 4(pivot), 5, 6, 7 ,8(high)]

pivot = floor(4) = 4, we’ll print this pivot AFTER we process the left array

Our pivot will be printed after all the left array is processed.

Then we recursively process the left array.

## process left array
[1(low), 2(pivot), 3, 4(high)]

Our pivot is now element 2. Remember, we'll print this after we process the left array.

## process left array
[1(low, high)]

As we see, low == high, so we simply print (process) the element 1.



#### source code
    var arr = [1,2,3,4,5,6,7,8,9];

    function partition(arr, low, high) {
        return Math.floor((low + high) / 2);
    }

    function divAndConq(arr, low, high) {

      console.log("\ndivAndConq: [" + low + ", " + high + "]");

      if (low == high) {
        console.log(" processing at element: " + arr[low] + " √ ");
      }

      if (low < high) { // low >= high skips

        var mid = partition(arr, low, high);
        console.log(low + " < " + high + "? √, " + "middle is: " + mid);

        divAndConq(arr, low, mid-1);
        console.log(" processing at element: " + arr[mid] + " √ ");
        divAndConq(arr, mid + 1, high);

      } else {
        console.log(low + " < " + high + "? X");
      }
    }

    divAndConq(arr, 0, arr.length-1);
