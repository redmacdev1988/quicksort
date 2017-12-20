# QUICKSORT
Quicksort implementation in JS

Understanding and implementing quicksort comes in 2 main steps:

* divide and conquer recursion
* partition


# The divide and conquer recursion

ref - http://shanghaiseagull.com/index.php/2017/12/19/recursive-divide-and-conquer-on-arrays/

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

![](http://shanghaiseagull.com/wp-content/uploads/2017/12/quicksort_1-1024x425.jpg)

The concept of recursive divide and conquer is that we calculate a pivot first. The pivot is calculated to be somewhere in the middle of the array, then the left and right array are recursively processed.

For simplification purposes, we want to keep things simple. So let’s calculate the pivot such that it is:
floor of (low index + high index)/2

floor of (0+8)/2 = 4

[1(low), 2, 3, 4, 5(pivot), 6, 7, 8, 9(high)]

We'll print the pivot AFTER we process the left array

## process left array of pivot index 4

![](http://shanghaiseagull.com/wp-content/uploads/2017/12/quicksort_2-1024x362.jpg)

[1(low), 2, 3, 4(high)]

floor of (0 + 3)/2 = 1

[1(low), 2(pivot), 3, 4(high)]

Our pivot is now element 2 at index 1. Remember, we'll print this after we process the left array.

## process left array of pivot index 1

[1(low, high)]

As we see, low == high, so we simply print (process) the element 1. **We have printed [1]**

## print the element at pivot index 1

Popping back to the previous divAndConq function stack, we then print pivot value 2 at index 1.
**We now have printed [1 2]**.

After the pivot, we process the right array.

## process right array of pivot 2

[3(low), 4(high)]

floor of (2+3)/2 = 2 (index 2 is pivot)

[3(low, pivot), 4(high)]

We'll print the pivot value (3) at index 2, after we process the left array

Left array in this case will be divAndConq(2, 2-1) or divAndConq(2, 1).
At that function stack, we have terminating statement of when low > high, we
simply return and do nothing.

We come back to the [3,4] stack, and print pivot value 3 at index 2. **We have printed [1 2 3]**

Then we hit the right array, which is divAndConq(2+1, 3) or divAndConq(3,3).
The terminating statement of when low == high, we print (process) it.
**We have now printed [1 2 3 4]**

As you see, we have printed the left side of the main array. The next step is actually
to print the pivot at index 4, which is value 5.  At this point, **we have printed (processed)
[1 2 3 4 5]**.

We continue in this fashion for the right array. And this is how recursive divide and conquer
can touch every element in the array, in order.


# The Partition

The whole purpose of the partition is to make sure the values on the left side are all smaller than the pivot.
And that the values on the right side is larger than the pivot. If any values are not the case, they need to be swapped.
We use the last element as the pivot.


## left side value > pivot

We run through the front of the array and we do leave alone values smaller than the pivot. If the value > pivot,
we stop and proceed to find any values < pivot on the right side.

## right side value < pivot

Once a value is larger than pivot is found on the left side, we need to find a value smaller than pivot on the right side.
Once both values are found, we swap them. That way, we scoot values smaller than pivot towards the left, and values larger
than the pivot towards the right.

## left and right cross, we swap with pivot

We keep processing until the lo and hi cross. In that case, if we swap the element with pivot,
then we make sure that all values on the left of pivot is in indeed smaller than pivot.
Any values on the right side is indeed larger than the pivot.


[35(lo), 33, 42, 10, 14, 19, 27, 44, 26, 31(pivot)]
hi is -1

35 > 31? Yes! so we need to swap 35. Let's find the right side.

decrement hi.

[35(lo), 33, 42, 10, 14, 19, 27, 44, 26(hi), 31(pivot)]

26 < 31 We need to swap this. So now 35 and 26 swap.

[26(lo), 33, 42, 10, 14, 19, 27, 44, 35(hi), 31(pivot)]

We increment lo to process the next one.

[26, 33(lo), 42, 10, 14, 19, 27, 44, 35(hi), 31(pivot)]

33 > 31 ? Yes! so we need to swap 33. Let's find the right side. decrement hi.

[26, 33(lo), 42, 10, 14, 19, 27, 44(hi), 35, 31(pivot)]

44 < 31 ? NOPE, is ok.

[26, 33(lo), 42, 10, 14, 19, 27(hi), 44, 35, 31(pivot)]

27 < 35? YES, we need to swap this. We swap 27 AND 33.

[26, 27(lo), 42, 10, 14, 19, 33(hi), 44, 35, 31(pivot)]

We increment lo to process the next one.

[26, 27, 42(lo), 10, 14, 19, 33(hi), 44, 35, 31(pivot)]
