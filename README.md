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

[1, 2, 3, 4, 5, 6, 7, 8, 9]

The concept of recursive divide and conquer is that we calculate a pivot first. The pivot is calculated to be somewhere in the middle of the array, then the left and right array are recursively processed.

For simplification purposes, we want to keep things simple. So let’s calculate the pivot such that it is:
floor of (low index + high index)/2

floor of (0+8)/2 = 4

[1(low), 2, 3, 4, 5(pivot), 6, 7, 8, 9(high)]

We'll print the pivot AFTER we process the left array

Then we recursively process the left array.

## process left array of pivot 2

[1(low), 2, 3, 4(high)]

floor of (0 + 3)/2 = 1

[1(low), 2(pivot), 3, 4(high)]

Our pivot is now element 2 at index 1. Remember, we'll print this after we process the left array.

## print (process) the element

[1(low, high)]

As we see, low == high, so we simply print (process) the element 1. **We have printed [1]**

## print the pivot 2

Popping back to the previous divAndConq function stack, we then print 2.
**We now have printed [1 2]**.

After the pivot, we process the right array.

## process right array of pivot 2

[3(low), 4(high)]

floor of (2+3)/2 = 2 (index 2 is pivot)

[3(low, pivot), 4(high)]

We'll print the pivot (3) after we process the left array

Left array in this case will be divAndConq(2, 2-1) or divAndConq(2, 1).
At that function stack, we have terminating statement of when low > high, we
simply return and do nothing.

We come back to the [3,4] stack, and print pivot 3. **We have printed [1 2 3]**

Then we hit the right array, which is divAndConq(2+1, 3) or divAndConq(3,3).
The terminating statement of when low == high, we print (process) it.
**We have now printed [1 2 3 4]**

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
