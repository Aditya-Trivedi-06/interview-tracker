const REVISION_CARDS = [
  {
    c: "Amazon", t: "Jump Game II", d: "Medium", f: 50, tp: "Array, Greedy",
    q: `You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0]. Each element nums[i] represents the maximum length of a forward jump from index i. Return the minimum number of jumps to reach nums[n - 1].`,
    brute: `Explore all possible jump paths using recursion or BFS. Time complexity is O(N!).`,
    opt_hint: `O(N) Time, Greedy`,
    optimal: `Keep track of the 'current_jump_end' and the 'farthest' point reachable. Iterate through the array; update 'farthest'. When you reach 'current_jump_end', increment your jump count and set 'current_jump_end' to 'farthest'.`,
    space_hint: `O(1) Space`,
    space: `This greedy approach only uses a few integer variables for tracking bounds, thus O(1) space.`,
    followup: `What if it's not guaranteed you can reach the end? (Return -1 if loop ends without reaching n-1).`
  },
  {
    c: "Amazon", t: "Permutations", d: "Medium", f: 38, tp: "Backtracking",
    q: `Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.`,
    brute: `Generate all possible combinations of size N, which gives N! arrangements.`,
    opt_hint: `O(N * N!) Time, Backtracking`,
    optimal: `Use backtracking. Swap elements at index 'first' with elements from 'first' to end. Recursively call for 'first + 1'. Backtrack by swapping back.`,
    space_hint: `O(N) Recursion Space`,
    space: `The recursion stack goes as deep as the number of elements N. Excludes space for output.`,
    followup: `What if the array contains duplicates? (Use a hash map to count occurrences or sort and skip duplicates - Permutations II).`
  },
  {
    c: "Amazon", t: "Rotate Image", d: "Medium", f: 50, tp: "Array, Hash Table",
    q: `You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). You MUST rotate the image in-place.`,
    brute: `Create a new matrix and map matrix[i][j] to new_matrix[j][n-1-i]. Time O(N^2), Space O(N^2).`,
    opt_hint: `O(N^2) Time, In-place Math`,
    optimal: `Transpose the matrix (swap matrix[i][j] with matrix[j][i]), then reverse each row.`,
    space_hint: `O(1) Space`,
    space: `Since we modified the matrix in-place via transposing and reversing rows, we used O(1) extra space.`,
    followup: `Rotate anti-clockwise? (Reverse each row first, then transpose).`
  },
  {
    c: "Amazon", t: "Group Anagrams", d: "Medium", f: 75, tp: "Hash Table, String",
    q: `Given an array of strings strs, group the anagrams together. You can return the answer in any order.`,
    brute: `Compare every string with every other string to check if they are anagrams. Time O(N^2 * KlogK).`,
    opt_hint: `O(N * KlogK) Time, Hash Map`,
    optimal: `Sort each string and use it as a key in a hash map. Append the original string to the list of anagrams for that sorted key.`,
    space_hint: `O(N * K) Space`,
    space: `The hash map stores all strings grouped by keys, requiring O(N * K) space where K is max string length.`,
    followup: `Can we optimize the KlogK sorting? (Yes, use a 26-character frequency count tuple as the hash map key for O(N * K) time).`
  },
  {
    c: "Amazon", t: "Pow(x, n)", d: "Medium", f: 38, tp: "Array, Hash Table",
    q: `Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).`,
    brute: `Multiply x by itself n times. Time O(n). Will TLE for large n.`,
    opt_hint: `O(log N) Time, Fast Power Algorithm`,
    optimal: `Use binary exponentiation. If n is even, pow(x, n) = pow(x*x, n//2). If n is odd, pow(x, n) = x * pow(x*x, n//2).`,
    space_hint: `O(1) Space Iterative`,
    space: `Iterative binary exponentiation requires O(1) space. Recursive requires O(log N) stack space.`,
    followup: `What if n is negative? (Compute pow(1/x, -n)). Beware of integer overflow for n = -2^31.`
  },
  {
    c: "Amazon", t: "N-Queens", d: "Hard", f: 62, tp: "Backtracking",
    q: `The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Return all distinct solutions.`,
    brute: `Place queens randomly in every combination and check validity. Extremely slow.`,
    opt_hint: `O(N!) Time, Backtracking`,
    optimal: `Place row by row. Maintain sets for columns, positive diagonals (r+c), and negative diagonals (r-c) to quickly check if a cell is under attack.`,
    space_hint: `O(N) Space`,
    space: `Sets for columns and diagonals take O(N) space, plus the recursion depth O(N).`,
    followup: `Just return the count of solutions? (N-Queens II - same logic, but increment a counter instead of building strings).`
  },
  {
    c: "Amazon", t: "Maximum Subarray", d: "Medium", f: 62, tp: "Array, Dynamic Programming, Sliding Window, String",
    q: `Given an integer array nums, find the subarray with the largest sum, and return its sum.`,
    brute: `Check the sum of every possible subarray. Time O(N^2) or O(N^3).`,
    opt_hint: `O(N) Time, Kadane's Algorithm`,
    optimal: `Maintain a running 'current_sum'. If 'current_sum' drops below 0, reset it to 0 (or the current number). Update 'max_sum' on every step.`,
    space_hint: `O(1) Space`,
    space: `Only requires variables to track current and max sum.`,
    followup: `What if you need to return the indices of the subarray? (Track start, temp_start, and end indices when updating max_sum).`
  },
  {
    c: "Amazon", t: "Spiral Matrix", d: "Medium", f: 50, tp: "Depth-First Search, Matrix",
    q: `Given an m x n matrix, return all elements of the matrix in spiral order.`,
    brute: `Simulate walking through the matrix, keeping track of visited cells. Space O(M*N).`,
    opt_hint: `O(M*N) Time, Layer by Layer`,
    optimal: `Maintain 4 boundaries: top, bottom, left, right. Traverse right -> down -> left -> up, constricting the boundaries after each sweep.`,
    space_hint: `O(1) Space`,
    space: `The boundary pointers take O(1) auxiliary space (excluding the output array).`,
    followup: `What if you have to generate the matrix given n? (Spiral Matrix II - same logic, but write to a matrix instead of reading).`
  },
  {
    c: "Amazon", t: "Jump Game", d: "Medium", f: 50, tp: "Array, Greedy",
    q: `You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index.`,
    brute: `Use DFS/Backtracking to try every possible jump. Time O(2^N).`,
    opt_hint: `O(N) Time, Greedy`,
    optimal: `Iterate backwards from the destination. Keep a 'target' index. If you can reach 'target' from 'i' (i.e. i + nums[i] >= target), update target = i.`,
    space_hint: `O(1) Space`,
    space: `Only one integer pointer is needed to track the target.`,
    followup: `Can we do it going forward? (Yes, track 'max_reachable'. If i > max_reachable, return false).`
  },
  {
    c: "Amazon", t: "Merge Intervals", d: "Medium", f: 62, tp: "Array, Sorting",
    q: `Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals.`,
    brute: `Compare every interval with every other interval and merge. Repeat until no overlaps. O(N^2).`,
    opt_hint: `O(N log N) Time, Sorting`,
    optimal: `Sort the intervals based on start time. If the current interval overlaps with the last added interval (current.start <= last.end), merge them by updating last.end = max(last.end, current.end).`,
    space_hint: `O(log N) Space`,
    space: `The sorting algorithm requires O(log N) auxiliary space.`,
    followup: `Insert a new interval into an already sorted list of non-overlapping intervals? (Insert Intervals - can be done in O(N)).`
  },
  {
    c: "Amazon", t: "Rotate List", d: "Medium", f: 38, tp: "Linked List, Two Pointers",
    q: `Given the head of a linked list, rotate the list to the right by k places.`,
    brute: `Move the last node to the front, k times. Time O(N * K).`,
    opt_hint: `O(N) Time, Circular List`,
    optimal: `Find the length N and the tail. Link tail to head to form a circle. The new tail is at (N - k % N - 1) from head. Break the circle there.`,
    space_hint: `O(1) Space`,
    space: `Only pointer manipulations are performed.`,
    followup: `What if K is negative? (It means rotating left. Calculate equivalent positive K).`
  },
  {
    c: "Amazon", t: "Unique Paths", d: "Medium", f: 50, tp: "Depth-First Search, Matrix",
    q: `There is a robot on an m x n grid. The robot can only move either down or right at any point in time. Return the number of possible unique paths that the robot can take to reach the bottom-right corner.`,
    brute: `Recursive DFS exploring right and down. Exponential time O(2^(M+N)).`,
    opt_hint: `O(M*N) Time, Dynamic Programming`,
    optimal: `Create a 2D DP array. dp[i][j] = dp[i-1][j] + dp[i][j-1]. The top row and left column are all 1s.`,
    space_hint: `O(N) Space`,
    space: `We only need the previous row to calculate the current row, reducing space from O(M*N) to O(N).`,
    followup: `Can it be done mathematically? (Yes, Combinatorics: (M+N-2) choose (M-1) takes O(M) time).`
  },
  {
    c: "Amazon", t: "Minimum Path Sum", d: "Medium", f: 25, tp: "Array, Depth-First Search, Dynamic Programming, Matrix",
    q: 'Given a grid, find a path from top-left to bottom-right that minimizes the sum of all numbers along its path. You can only move down or right.',
    brute: 'DFS exploring all paths. Exponential.',
    opt_hint: 'O(M*N) Time, 2D DP',
    optimal: '`dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])`. Base cases: first row and first column only have one path direction.',
    space_hint: 'O(N) Space',
    space: '1D DP optimization.',
    followup: 'Can you do it in-place? (Yes, by modifying the input grid as the DP table).'
  },
  {
    c: "Amazon", t: "Plus One", d: "Easy", f: 50, tp: "Array, Hash Table",
    q: `You are given a large integer represented as an integer array digits. Increment the large integer by one and return the resulting array of digits.`,
    brute: `Convert array to string, then to integer, add 1, convert back to array. Fails for huge numbers.`,
    opt_hint: `O(N) Time, Math Simulation`,
    optimal: `Iterate backwards. If digit < 9, increment and return. If digit == 9, set to 0 and carry over. If loop finishes, insert 1 at the front.`,
    space_hint: `O(1) Space`,
    space: `In-place modification of the array. Output array expansion takes O(N) only when all digits are 9.`,
    followup: `What if the array is given in reverse? (Start from index 0 instead).`
  },
  {
    c: "Amazon", t: "Text Justification", d: "Hard", f: 12, tp: "Array, Hash Table",
    q: `Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.`,
    brute: `Hardcode every possible space padding. Extremely buggy.`,
    opt_hint: `O(N) Time, Simulation`,
    optimal: `Pack as many words as possible into a line. Calculate remaining spaces. Distribute spaces evenly. If it's the last line or 1 word, left-justify.`,
    space_hint: `O(N) Space`,
    space: `Need space for the current line's words and the output array.`,
    followup: `How to handle a word longer than maxWidth? (The constraints usually state word length <= maxWidth).`
  },
  {
    c: "Amazon", t: "Climbing Stairs", d: "Easy", f: 62, tp: "Dynamic Programming",
    q: `You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?`,
    brute: `Recursive DFS trying 1 and 2 steps. Time O(2^N).`,
    opt_hint: `O(N) Time, Fibonacci DP`,
    optimal: `The number of ways to reach step n is the sum of ways to reach n-1 and n-2. This is the Fibonacci sequence.`,
    space_hint: `O(1) Space`,
    space: `Only track two variables (prev1, prev2) instead of a full DP array.`,
    followup: `What if you can climb 1, 2, or 3 steps? (dp[i] = dp[i-1] + dp[i-2] + dp[i-3]).`
  },
  {
    c: "Amazon", t: "Simplify Path", d: "Medium", f: 25, tp: "Depth-First Search, Matrix",
    q: `Given a string path, which is an absolute path to a file or directory in a Unix-style file system, convert it to the simplified canonical path.`,
    brute: `String manipulation and complex regex. Bug-prone.`,
    opt_hint: `O(N) Time, Stack`,
    optimal: `Split the path by '/'. Iterate through components. If component is '..', pop from stack. If it's valid, push to stack. Ignore '.' and empty.`,
    space_hint: `O(N) Space`,
    space: `The stack will store the components of the simplified path.`,
    followup: `What if '..' is called at the root directory? (Just ignore it if stack is empty).`
  },
  {
    c: "Amazon", t: "Set Matrix Zeroes", d: "Medium", f: 50, tp: "Depth-First Search, Matrix",
    q: `Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's. You must do it in place.`,
    brute: `Iterate over matrix. When you see 0, change its row/col to a temporary value, then pass again to make them 0. Space O(M+N).`,
    opt_hint: `O(M*N) Time, In-place Tracking`,
    optimal: `Use the first row and first column to store the zero-states. Use a separate variable for whether the first row/col itself needs zeroing.`,
    space_hint: `O(1) Space`,
    space: `Using the matrix's own boundaries achieves O(1) extra space.`,
    followup: `What if you used O(M+N) space? (You would use two arrays: rows[M] and cols[N] to track zeros).`
  },
  {
    c: "Amazon", t: "Search a 2D Matrix", d: "Medium", f: 50, tp: "Binary Search, Depth-First Search, Matrix",
    q: `You are given an m x n integer matrix where each row is sorted from left to right, and the first integer of each row is greater than the last integer of the previous row. Return true if target is in matrix.`,
    brute: `Scan the entire matrix. O(M*N) time.`,
    opt_hint: `O(log(M*N)) Time, Binary Search`,
    optimal: `Treat the 2D matrix as a 1D sorted array of length M*N. Index mapping: row = mid // n, col = mid % n. Perform standard binary search.`,
    space_hint: `O(1) Space`,
    space: `Only requires left, right, and mid pointers.`,
    followup: `What if the rows are sorted but the next row doesn't start higher than the previous? (Search a 2D Matrix II - start at top-right corner, move left/down. O(M+N)).`
  },
  {
    c: "Amazon", t: "Sort Colors", d: "Medium", f: 50, tp: "Array, Sorting",
    q: `Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue (0, 1, and 2).`,
    brute: `Use any O(N log N) sorting algorithm or count the 0s, 1s, and 2s and overwrite the array (2 passes).`,
    opt_hint: `O(N) Time, Dutch National Flag`,
    optimal: `Use 3 pointers (low, mid, high). If mid is 0, swap low/mid and advance both. If 1, advance mid. If 2, swap mid/high and decrement high.`,
    space_hint: `O(1) Space`,
    space: `Only uses 3 pointers for in-place swapping.`,
    followup: `Could you come up with a one-pass algorithm? (Yes, the Dutch National Flag algorithm solves it in one pass).`
  },
  {
    c: "Amazon", t: "Minimum Window Substring", d: "Hard", f: 50, tp: "Binary Tree, Depth-First Search, Hash Table, Sliding Window, String, Tree",
    q: `Given two strings s and t, return the minimum window substring of s such that every character in t (including duplicates) is included in the window.`,
    brute: `Generate all substrings of s and check if they contain all characters of t. Time O(N^3).`,
    opt_hint: `O(N) Time, Sliding Window`,
    optimal: `Use two pointers (left/right) to expand the window until it contains all chars. Then shrink from the left to minimize. Use hash maps to track counts.`,
    space_hint: `O(1) Space`,
    space: `Hash maps only store distinct characters (constant 128 ASCII chars), so space is O(1).`,
    followup: `What if there are multiple answers? (The problem states there is at most one unique minimum window).`
  },
  {
    c: "Amazon", t: "Subsets", d: "Medium", f: 62, tp: "Backtracking",
    q: `Given an integer array nums of unique elements, return all possible subsets (the power set).`,
    brute: `Cascading: start with empty list, and for every element, add it to all existing subsets. Time O(N * 2^N).`,
    opt_hint: `O(N * 2^N) Time, Backtracking`,
    optimal: `Use recursive backtracking. At each step 'i', make two branches: one where you include 'nums[i]' and one where you don't.`,
    space_hint: `O(N) Recursion Space`,
    space: `Depth of the recursion tree is N. Output array takes O(N * 2^N).`,
    followup: `Can you do it using Bit Manipulation? (Iterate from 0 to 2^N - 1, and use the bits to determine which elements to include).`
  },
  {
    c: "Amazon", t: "Remove Duplicates from Sorted Array II", d: "Medium", f: 25, tp: "Array, Sorting",
    q: `Given a sorted array nums, remove the duplicates in-place such that each unique element appears at most twice. Return the new length.`,
    brute: `Pop elements out of the array if you see them more than twice. O(N^2) due to shifting.`,
    opt_hint: `O(N) Time, Two Pointers`,
    optimal: `Use a slow pointer. Iterate with a fast pointer. If nums[fast] != nums[slow - 2], write nums[fast] to nums[slow] and increment slow.`,
    space_hint: `O(1) Space`,
    space: `Everything is done in-place using two pointers.`,
    followup: `What if each element can appear at most K times? (Change condition to nums[fast] != nums[slow - K]).`
  },
  {
    c: "Amazon", t: "Word Search", d: "Medium", f: 62, tp: "Binary Search, Hash Table, String",
    q: `Given an m x n grid of characters board and a string word, return true if word exists in the grid.`,
    brute: `From every cell, explore all paths. Exponential time.`,
    opt_hint: `O(N * 3^L) Time, DFS + Backtracking`,
    optimal: `Iterate through the matrix. If a cell matches word[0], start DFS. Temporarily mark the cell as visited (e.g. board[i][j] = '#'), and explore 4 directions.`,
    space_hint: `O(L) Recursion Space`,
    space: `The depth of the recursion tree will be the length of the word (L).`,
    followup: `What if we have multiple words to search? (Word Search II - use a Trie combined with DFS).`
  },
  {
    c: "Amazon", t: "Largest Rectangle in Histogram", d: "Hard", f: 50, tp: "Stack",
    q: `Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.`,
    brute: `For every pair of bars, find the minimum height between them and calculate area. Time O(N^2).`,
    opt_hint: `O(N) Time, Monotonic Stack`,
    optimal: `Maintain a stack of indices with monotonically increasing heights. When a smaller bar is encountered, pop from stack, calculate area for the popped height, using the current index as right boundary.`,
    space_hint: `O(N) Space`,
    space: `The stack can hold at most N elements.`,
    followup: `Can this be applied to 2D matrices? (Yes, Maximal Rectangle applies this exact algorithm to each row of a 2D matrix).`
  },
  {
    c: "Amazon", t: "Merge Sorted Array", d: "Easy", f: 50, tp: "Array, Sorting",
    q: `You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order.`,
    brute: `Copy nums2 into nums1, then run sort(). Time O((m+n)log(m+n)).`,
    opt_hint: `O(M+N) Time, Three Pointers`,
    optimal: `Start filling nums1 from the back (index m+n-1). Compare elements from the end of the valid parts of nums1 and nums2, placing the largest at the end.`,
    space_hint: `O(1) Space`,
    space: `Everything is done in-place within nums1.`,
    followup: `Why from the back? (Because the end of nums1 is empty zeroes, so filling from the back prevents overwriting unmerged elements).`
  },
  {
    c: "Amazon", t: "Subsets II", d: "Medium", f: 25, tp: "Backtracking",
    q: 'Given an integer array nums that may contain duplicates, return all possible subsets. The solution set must not contain duplicate subsets.',
    brute: 'Generate all 2^N subsets and add them to a HashSet to remove duplicates. Time: O(N * 2^N).',
    opt_hint: 'O(N * 2^N) Time, Sorting + Backtracking',
    optimal: 'Sort the array first. During recursive backtracking, if `nums[i] == nums[i-1]` and we skipped the previous element in this recursion branch, skip `nums[i]` to avoid duplicates.',
    space_hint: 'O(N) Space',
    space: 'O(N) space for the recursion stack and the temporary subset list.',
    followup: 'What if you couldn\'t sort the array? (You\'d be forced to use a HashSet which takes more space and time).'
  },
  {
    c: "Amazon", t: "Reverse Linked List II", d: "Medium", f: 38, tp: "Linked List, Two Pointers",
    q: 'Given the head of a singly linked list and two integers left and right, reverse the nodes of the list from position left to position right, and return the reversed list.',
    brute: 'Convert list to an array, reverse the sub-array, and rebuild the list. Space O(N).',
    opt_hint: 'O(N) Time, One Pass In-Place',
    optimal: 'Use a dummy node. Traverse to `left - 1` (the `prev` node). Then, iteratively reverse the next `right - left` nodes by rewiring pointers in a tight loop.',
    space_hint: 'O(1) Space',
    space: 'All operations are done via pointer manipulation.',
    followup: 'Can you do it in one pass without recursion? (Yes, the iterative pointer rewiring achieves this).'
  },
  {
    c: "Amazon", t: "Decode Ways", d: "Medium", f: 25, tp: "Dynamic Programming",
    q: 'A message containing letters from A-Z can be encoded into numbers using A->1, B->2... Z->26. Given a string s containing digits, return the number of ways to decode it.',
    brute: 'Recursive DFS exploring 1-digit and 2-digit branches. Exponential time O(2^N).',
    opt_hint: 'O(N) Time, Dynamic Programming',
    optimal: 'Use DP. `dp[i]` is the ways to decode up to `i`. If `s[i]` is valid, `dp[i] += dp[i-1]`. If `s[i-1:i+1]` is between 10-26, `dp[i] += dp[i-2]`.',
    space_hint: 'O(1) Space Optimization',
    space: 'You only need to track the previous two DP states (like Fibonacci), so O(1) space is achievable.',
    followup: 'What if the string has leading zeros? (Return 0, as \'06\' is not a valid encoding).'
  },
  {
    c: "Amazon", t: "Validate Binary Search Tree", d: "Medium", f: 50, tp: "Binary Search, Binary Tree, Depth-First Search, Tree",
    q: 'Given the root of a binary tree, determine if it is a valid binary search tree (BST).',
    brute: 'For every node, check if all left children are smaller and all right children are larger. O(N^2) time.',
    opt_hint: 'O(N) Time, Range Tracking',
    optimal: 'Recursive DFS. Pass down a `(min_val, max_val)` bound. The root must be between `(-inf, inf)`. Left child must be strictly less than root, right child strictly greater.',
    space_hint: 'O(H) Space',
    space: 'The recursion stack uses O(H) space, where H is the height of the tree.',
    followup: 'Can you do it iteratively? (Yes, use an in-order traversal; the values must be strictly increasing).'
  },
  {
    c: "Amazon", t: "Same Tree", d: "Easy", f: 38, tp: "Binary Tree, Depth-First Search, Tree",
    q: 'Given the roots of two binary trees p and q, write a function to check if they are the same or not.',
    brute: 'Traverse both trees completely into arrays and compare arrays. Space O(N).',
    opt_hint: 'O(N) Time, Recursive DFS',
    optimal: 'If both null, return true. If one null or values differ, return false. Return `isSame(p.left, q.left) AND isSame(p.right, q.right)`.',
    space_hint: 'O(H) Space',
    space: 'Recursion depth is the height of the tree O(H). Worst case O(N) for skewed tree.',
    followup: 'Iterative approach? (Use a queue to perform parallel BFS on both trees).'
  },
  {
    c: "Amazon", t: "Symmetric Tree", d: "Easy", f: 38, tp: "Binary Tree, Depth-First Search, Tree",
    q: 'Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).',
    brute: 'Invert the left subtree and check if it equals the right subtree using Same Tree logic.',
    opt_hint: 'O(N) Time, Two-Pointer DFS',
    optimal: 'Create a helper function `isMirror(t1, t2)`. Return true if both null. False if one null or values differ. Then check `isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left)`.',
    space_hint: 'O(H) Space',
    space: 'Recursion stack space O(H).',
    followup: 'How about iteratively? (Use a queue and push nodes in pairs: `t1.left` with `t2.right`, etc).'
  },
  {
    c: "Amazon", t: "Binary Tree Zigzag Level Order Traversal", d: "Medium", f: 38, tp: "Binary Tree, Depth-First Search, Tree",
    q: 'Given the root of a binary tree, return the zigzag level order traversal of its nodes\' values. (i.e., from left to right, then right to left for the next level).',
    brute: 'Do normal level order traversal, then reverse every alternating sublist at the end. Time O(N).',
    opt_hint: 'O(N) Time, BFS with Deque',
    optimal: 'Use BFS. Track a boolean `leftToRight`. At each level, read the queue. If `leftToRight`, append to the end of the level list. If not, insert at the beginning of the level list.',
    space_hint: 'O(N) Space',
    space: 'The queue will hold at most N/2 nodes at the bottom level.',
    followup: 'Can you do this with DFS? (Yes, pass the level index. If level is even, append. If odd, prepend to `result[level]`).'
  },
  {
    c: "Amazon", t: "Maximum Depth of Binary Tree", d: "Easy", f: 38, tp: "Binary Tree, Depth-First Search, Tree",
    q: 'Given the root of a binary tree, return its maximum depth.',
    brute: 'None. Standard traversal is required.',
    opt_hint: 'O(N) Time, Bottom-Up DFS',
    optimal: 'If root is null, return 0. Otherwise, return `1 + max(maxDepth(root.left), maxDepth(root.right))`.',
    space_hint: 'O(H) Space',
    space: 'Recursion stack space up to O(N) in worst case (skewed tree).',
    followup: 'What is the BFS approach? (Count the number of levels until the queue is empty).'
  },
  {
    c: "Amazon", t: "Construct Binary Tree from Preorder and Inorder Traversal", d: "Medium", f: 25, tp: "Binary Tree, Depth-First Search, Tree",
    q: 'Given two integer arrays preorder and inorder, construct and return the binary tree.',
    brute: 'Search for the root in the inorder array linearly every time. O(N^2) time.',
    opt_hint: 'O(N) Time, Hash Map + Recursion',
    optimal: 'The first element of preorder is the root. Find this root in inorder using a pre-computed Hash Map `(value -> index)`. Elements left of the index are the left subtree; elements right are the right subtree. Recurse.',
    space_hint: 'O(N) Space',
    space: 'O(N) for the Hash Map and O(H) for recursion stack.',
    followup: 'Can you do it without a Hash Map? (Yes, passing pointers and using the properties of traversal orders, though code gets complex).'
  },
  {
    c: "Amazon", t: "Binary Tree Level Order Traversal", d: "Medium", f: 38, tp: "Binary Tree, Depth-First Search, Tree",
    q: 'Given the root of a binary tree, return the level order traversal of its nodes\' values. (i.e., from left to right, level by level).',
    brute: 'DFS while keeping track of the depth, appending to the array corresponding to that depth.',
    opt_hint: 'O(N) Time, BFS Queue',
    optimal: 'Use a queue initialized with the root. While queue is not empty, get the `level_size`. Pop `level_size` times, appending values to a temporary list and pushing their children to the queue.',
    space_hint: 'O(N) Space',
    space: 'Queue holds at most N/2 nodes at the leaf level.',
    followup: 'How to return bottom-up level order? (Do standard level order, then reverse the final 2D array - LC 107).'
  },
  {
    c: "Amazon", t: "Plates Between Candles", d: "Medium", f: 25, tp: "Array, Hash Table",
    q: 'Given a string s of \'*\' (plates) and \'|\' (candles), and an array of queries [left, right], return the number of plates between candles for each query.',
    brute: 'For every query, iterate from left to right, find the first and last candle, and count \'*\'. Time O(Q * N).',
    opt_hint: 'O(N + Q) Time, Prefix Sums',
    optimal: 'Precompute 3 arrays: `prefix_plates` counting \'*\' up to `i`, `left_candle[i]` storing nearest candle to the left, and `right_candle[i]` storing nearest candle to the right. For a query, get `l = right_candle[left]` and `r = left_candle[right]`. Answer is `prefix[r] - prefix[l]`.',
    space_hint: 'O(N) Space',
    space: 'O(N) to store the 3 precomputed arrays.',
    followup: 'What if candles can be added dynamically? (Use a Binary Indexed Tree or Segment Tree).'
  },
  {
    c: "Amazon", t: "Triangle", d: "Medium", f: 38, tp: "Dynamic Programming",
    q: 'Given a triangle array, return the minimum path sum from top to bottom. For each step, you may move to an adjacent number of the row below.',
    brute: 'Recursive DFS exploring both adjacent branches. Time O(2^N).',
    opt_hint: 'O(N^2) Time, Bottom-Up DP',
    optimal: 'Start from the second to last row and move upwards. `triangle[r][c] += min(triangle[r+1][c], triangle[r+1][c+1])`. The answer is at `triangle[0][0]`.',
    space_hint: 'O(1) Space',
    space: 'Modify the triangle array in-place. If modifying input is forbidden, use a 1D array of size N (O(N) space).',
    followup: 'Why bottom-up instead of top-down? (Bottom-up avoids boundary checks and returns a single value at [0][0]).'
  },
  {
    c: "Amazon", t: "Best Time to Buy and Sell Stock", d: "Easy", f: 75, tp: "Array, Greedy",
    q: `You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy and a different day in the future to sell.`,
    brute: `Calculate profit for every pair of days (i < j). O(N^2).`,
    opt_hint: `O(N) Time, Single Pass`,
    optimal: `Keep track of the 'min_price_so_far'. Iterate through prices: calculate profit if sold today ('price - min_price_so_far'), and update 'max_profit'.`,
    space_hint: `O(1) Space`,
    space: `Only requires two variables.`,
    followup: `What if you can buy and sell multiple times? (Best Time to Buy and Sell Stock II - just accumulate all positive day-to-day differences).`
  },
  {
    c: "Amazon", t: "Best Time to Buy and Sell Stock II", d: "Medium", f: 38, tp: "Array, Greedy",
    q: 'You are given an array prices. You can buy and sell on the same day. Find the maximum profit you can achieve (you can hold at most one share at a time).',
    brute: 'Try every combination of buying and selling. Exponential time.',
    opt_hint: 'O(N) Time, Greedy Peak-Valley',
    optimal: 'Since we know the future, simply add the profit of every upward price movement. Iterate through array; if `prices[i] > prices[i-1]`, add the difference to total profit.',
    space_hint: 'O(1) Space',
    space: 'Only a single `profit` variable is needed.',
    followup: 'What if there is a transaction fee? (Use DP to track two states: `holding` and `not_holding`).'
  },
  {
    c: "Amazon", t: "Binary Tree Maximum Path Sum", d: "Hard", f: 50, tp: "Array, Binary Tree, Depth-First Search, Dynamic Programming, Matrix, Tree",
    q: 'Find the maximum path sum in a binary tree. The path may start and end at any node.',
    brute: 'For every node, calculate the max path treating it as the highest point. O(N^2).',
    opt_hint: 'O(N) Time, Post-order DFS',
    optimal: 'DFS returns the max straight path down. At each node, compute `left_path = max(0, dfs(left))` and `right_path = max(0, dfs(right))`. The path through current node is `node.val + left + right`. Update global max with this. Return `node.val + max(left, right)`.',
    space_hint: 'O(H) Space',
    space: 'Recursion stack depth O(H).',
    followup: 'Why do we `max(0, dfs)`? (Because if a subtree sum is negative, we shouldn\'t include it in our path).'
  },
  {
    c: "Amazon", t: "Pascal's Triangle", d: "Easy", f: 62, tp: "Dynamic Programming",
    q: 'Given an integer numRows, return the first numRows of Pascal\'s triangle.',
    brute: 'Calculate combinations N choose K for every cell. Time O(N^3).',
    opt_hint: 'O(N^2) Time, DP / Simulation',
    optimal: 'Start with `[[1]]`. For each new row, pad the previous row with 0s on both sides. `row[i] = prev[i-1] + prev[i]`.',
    space_hint: 'O(N^2) Space',
    space: 'Space required to store the triangle to return.',
    followup: 'What if you only need the Kth row? (Compute it in O(K) space using a single array, updating from back to front).'
  },
  {
    c: "Amazon", t: "Valid Palindrome", d: "Easy", f: 25, tp: "Hash Table, String",
    q: `A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.`,
    brute: `Create a new string, strip non-alphanumerics, reverse it, and compare. Space O(N).`,
    opt_hint: `O(N) Time, Two Pointers`,
    optimal: `Use two pointers, one at start and one at end. Skip non-alphanumeric characters. Compare characters. Move inward.`,
    space_hint: `O(1) Space`,
    space: `In-place string comparison without building a new filtered string.`,
    followup: `What if you can delete at most one character to make it a palindrome? (Valid Palindrome II - try skipping left or right character upon mismatch).`
  },
  {
    c: "Amazon", t: "Word Ladder", d: "Hard", f: 62, tp: "Hash Table, String",
    q: 'Find the shortest transformation sequence from beginWord to endWord, changing one letter at a time. All intermediate words must exist in wordList.',
    brute: 'DFS to try all possible valid word mutations. Exponential time.',
    opt_hint: 'O(M^2 * N) Time, BFS',
    optimal: 'Use BFS to find the shortest path. Put beginWord in a queue. For each word, try changing each of its `M` characters to all 26 letters. If the new word is in `wordList`, push to queue and remove from `wordList`.',
    space_hint: 'O(M * N) Space',
    space: 'Storing the words in a HashSet and the queue takes O(M * N) space.',
    followup: 'Can you make it faster? (Yes, Bi-directional BFS from both start and end words cuts the search space significantly).'
  },
  {
    c: "Amazon", t: "Longest Consecutive Sequence", d: "Medium", f: 62, tp: "Array, Hash Table",
    q: 'Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.',
    brute: 'Sort the array and count consecutive elements. Time O(N log N).',
    opt_hint: 'O(N) Time, HashSet',
    optimal: 'Put all numbers in a HashSet. Iterate through the set. Only start counting a sequence if `num - 1` is NOT in the set (this ensures we only start at the beginning of a sequence). Count upwards.',
    space_hint: 'O(N) Space',
    space: 'The HashSet requires O(N) auxiliary space.',
    followup: 'Why is it O(N) if there is a nested while loop? (Because the inner loop only runs for the start of a sequence, so each number is visited at most twice).'
  },
  {
    c: "Amazon", t: "Palindrome Partitioning", d: "Medium", f: 38, tp: "Hash Table, String",
    q: 'Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.',
    brute: 'Generate all partitions and check if all substrings are palindromes. Time O(N * 2^N).',
    opt_hint: 'O(N * 2^N) Time, Backtracking',
    optimal: 'DFS Backtracking. Loop `i` from `start` to `len(s)`. If `s[start:i+1]` is a palindrome, add it to the current path and recurse on `i+1`. Pop from path after recursion.',
    space_hint: 'O(N) Space',
    space: 'Recursion depth is O(N).',
    followup: 'How to optimize palindrome checking? (Precompute a DP table `isPal[i][j]` in O(N^2) time to check palindromes in O(1)).'
  },
  {
    c: "Amazon", t: "Clone Graph", d: "Medium", f: 38, tp: "Breadth-First Search, Graph",
    q: 'Return a deep copy (clone) of a connected undirected graph given a reference of a node.',
    brute: 'Cannot be done without tracking visited nodes (will infinite loop).',
    opt_hint: 'O(V + E) Time, DFS/BFS + Hash Map',
    optimal: 'Use a Hash Map mapping `original_node -> cloned_node`. Do DFS/BFS. If a neighbor is in the map, append its clone. If not, create clone, add to map, and recurse.',
    space_hint: 'O(V) Space',
    space: 'O(V) space for the Hash Map and the recursion stack/queue.',
    followup: 'What if the graph has disconnected components? (You would need a list of all nodes to ensure you visit disconnected graphs).'
  },
  {
    c: "Amazon", t: "Gas Station", d: "Medium", f: 50, tp: "Array, Greedy",
    q: 'There are n gas stations along a circular route. You have a car with an unlimited gas tank. Return the starting gas station\'s index if you can travel around the circuit once, otherwise return -1.',
    brute: 'Simulate the journey starting from every station. Time O(N^2).',
    opt_hint: 'O(N) Time, Greedy',
    optimal: 'If `sum(gas) < sum(cost)`, return -1. Otherwise, keep a `current_tank` and a `start_index`. Iterate. If `current_tank < 0`, reset `current_tank` to 0 and set `start_index = i + 1`.',
    space_hint: 'O(1) Space',
    space: 'Only integer variables are used for tracking.',
    followup: 'Why does this greedy logic work? (If total gas >= total cost, a solution MUST exist. If A can\'t reach B, then no station between A and B can reach B either).'
  },
  {
    c: "Amazon", t: "Candy", d: "Hard", f: 50, tp: "Array, Greedy",
    q: 'There are n children with a rating. Give candies such that every child gets at least 1, and children with a higher rating get more candies than their neighbors. Return minimum candies.',
    brute: 'Initialize all to 1. Loop repeatedly and increment if the condition fails. O(N^2) worst case.',
    opt_hint: 'O(N) Time, Two Passes',
    optimal: 'Create a `candies` array initialized to 1. Pass left-to-right: if `rating[i] > rating[i-1]`, `candies[i] = candies[i-1] + 1`. Pass right-to-left: if `rating[i] > rating[i+1]`, `candies[i] = max(candies[i], candies[i+1] + 1)`.',
    space_hint: 'O(N) Space',
    space: 'An array of size N is needed to store the candies distribution.',
    followup: 'Can it be done in O(1) space? (Yes, by tracking peaks and valleys on the fly, but it is heavily complex).'
  },
  {
    c: "Amazon", t: "Single Number", d: "Easy", f: 62, tp: "Array, Hash Table",
    q: 'Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. You must implement a solution with a linear runtime complexity and use only constant extra space.',
    brute: 'Use a Hash Map to count frequencies. O(N) time but O(N) space.',
    opt_hint: 'O(N) Time, Bit Manipulation',
    optimal: 'XOR all the elements together. `A XOR A = 0`, and `0 XOR B = B`. The pairs will cancel each other out, leaving only the single number.',
    space_hint: 'O(1) Space',
    space: 'A single variable to hold the XOR sum.',
    followup: 'What if a number appears 3 times except for one? (Single Number II - sum the bits at each position modulo 3).'
  },
  {
    c: "Amazon", t: "Copy List with Random Pointer", d: "Medium", f: 50, tp: "Linked List, Two Pointers",
    q: 'Construct a deep copy of a linked list where nodes also have a random pointer that could point to any node in the list or null.',
    brute: 'Iterate through and copy the next pointers. Use an O(N^2) loop to find and set the random pointers.',
    opt_hint: 'O(N) Time, Hash Map OR In-place Weaving',
    optimal: 'O(1) Space approach: 1. Clone nodes and weave them (`A -> A\' -> B -> B\'`). 2. Set random pointers (`A\'.random = A.random.next`). 3. Unweave the lists.',
    space_hint: 'O(1) Extra Space',
    space: 'The Hash Map approach uses O(N) space. The weaving approach uses O(1) space (not counting the new list).',
    followup: 'Why is the weaving approach better? (It entirely avoids using extra memory for a Hash Map, strictly satisfying O(1) constraints).'
  },
  {
    c: "Amazon", t: "Word Break II", d: "Hard", f: 25, tp: "Hash Table, String",
    q: 'Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.',
    brute: 'Standard DFS backtracking testing every prefix. O(2^N) and will TLE.',
    opt_hint: 'O(2^N) Time, DFS with Memoization',
    optimal: 'Use a recursive function `dfs(s)`. Iterate through `wordDict`. If `s` starts with `word`, get results for `dfs(s[len(word):])` and append `word` to them. Memoize the results for `s`.',
    space_hint: 'O(2^N) Space',
    space: 'Memoization map stores all valid sentence combinations for each suffix.',
    followup: 'What if you only need to know IF it\'s possible? (Word Break I - use standard DP returning booleans in O(N^2) time).'
  },
  {
    c: "Amazon", t: "Linked List Cycle", d: "Easy", f: 38, tp: "Linked List, Two Pointers",
    q: 'Given head, the head of a linked list, determine if the linked list has a cycle in it.',
    brute: 'Store visited nodes in a HashSet. Time O(N), Space O(N).',
    opt_hint: 'O(N) Time, Floyd\'s Cycle-Finding Algorithm',
    optimal: 'Use two pointers, `slow` and `fast`. `slow` moves 1 step, `fast` moves 2 steps. If there is a cycle, they will eventually meet (`slow == fast`). If `fast` hits null, no cycle.',
    space_hint: 'O(1) Space',
    space: 'Only requires two node pointers.',
    followup: 'What is the maximum number of steps before they meet? (At most N steps, usually much less).'
  },
  {
    c: "Amazon", t: "Linked List Cycle II", d: "Medium", f: 38, tp: "Linked List, Two Pointers",
    q: 'Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.',
    brute: 'Store visited nodes in a HashSet. First repeated node is the start. Space O(N).',
    opt_hint: 'O(N) Time, Floyd\'s Math',
    optimal: 'Use `slow` and `fast` pointers. Once they meet inside the cycle, reset `slow` to `head`. Move both `slow` and `fast` by 1 step. The point where they meet again is the start of the cycle.',
    space_hint: 'O(1) Space',
    space: 'Only uses two pointers.',
    followup: 'Can you prove the math? (2 * dist(slow) = dist(fast). Solving the equation proves the distance from head to cycle start equals distance from meeting point to cycle start).'
  },
  {
    c: "Amazon", t: "Reorder List", d: "Medium", f: 50, tp: "Linked List, Two Pointers",
    q: 'Given a singly linked list L0 -> L1 -> ... -> Ln, reorder it to L0 -> Ln -> L1 -> Ln-1...',
    brute: 'Store list in an array, then build the new list using two pointers. Space O(N).',
    opt_hint: 'O(N) Time, Split/Reverse/Merge',
    optimal: '1. Find middle using slow/fast pointers. 2. Reverse the second half of the list. 3. Interleave the two halves one by one.',
    space_hint: 'O(1) Space',
    space: 'All operations (finding middle, reversing, merging) are done in-place.',
    followup: 'Why reverse the second half? (Because we need to access the nodes from the back, and singly linked lists don\'t allow backward traversal).'
  },
  {
    c: "Amazon", t: "LRU Cache", d: "Medium", f: 75, tp: "Linked List, Two Pointers",
    q: 'Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.',
    brute: 'Use an Array. Finding LRU element is fast but updating an accessed element takes O(N).',
    opt_hint: 'O(1) Time, Hash Map + Doubly Linked List',
    optimal: 'Use a Hash Map mapping `key -> node`. Use a Doubly Linked List to store the actual keys/values. When accessed/added, move node to the \'head\' (most recent). When full, pop the \'tail\' (least recent).',
    space_hint: 'O(Capacity) Space',
    space: 'Hash Map and Doubly Linked list scale linearly with the cache capacity.',
    followup: 'Why a Doubly Linked List? (Because when an item is accessed via the Hash Map, we need to remove it from the middle of the list in O(1) time, which requires a `prev` pointer).'
  },
  {
    c: "Amazon", t: "Sort List", d: "Medium", f: 38, tp: "Array, Linked List, Sorting, Two Pointers",
    q: 'Given the head of a linked list, return the list after sorting it in ascending order. (Must be O(n log n) time and O(1) memory).',
    brute: 'Convert to array, sort, convert back. Space O(N) violating constraints.',
    opt_hint: 'O(N log N) Time, Merge Sort',
    optimal: 'Find the middle of the list using slow/fast pointers. Break the list into two halves. Recursively sort the two halves. Merge the two sorted lists using a dummy node.',
    space_hint: 'O(log N) Space',
    space: 'Top-down merge sort uses O(log N) recursion stack space. Strict O(1) requires a bottom-up iterative merge sort.',
    followup: 'How to do bottom-up merge sort? (Iteratively merge blocks of size 1, then 2, then 4, manipulating pointers entirely in-place).'
  },
  {
    c: "Amazon", t: "Evaluate Reverse Polish Notation", d: "Medium", f: 38, tp: "Array, Hash Table",
    q: 'Evaluate the value of an arithmetic expression in Reverse Polish Notation (valid operators: +, -, *, /).',
    brute: 'Continuously scan for an operator, perform the operation, and modify the array. O(N^2) due to shifting.',
    opt_hint: 'O(N) Time, Stack',
    optimal: 'Iterate through tokens. If it\'s a number, push to stack. If it\'s an operator, pop two numbers, evaluate, and push the result back to the stack. The final answer is the only item left in the stack.',
    space_hint: 'O(N) Space',
    space: 'Stack can hold up to N/2 numbers.',
    followup: 'Be careful with division! (In Python, `int(a / b)` truncates toward zero, unlike `a // b` which floors).'
  },
  {
    c: "Amazon", t: "Reverse Words in a String", d: "Medium", f: 50, tp: "Hash Table, String",
    q: 'Given an input string s, reverse the order of the words. A word is defined as a sequence of non-space characters.',
    brute: 'Split the string into an array of words, reverse the array, and join with a single space. O(N) Space.',
    opt_hint: 'O(N) Time, In-place Reversal',
    optimal: 'If mutable strings: 1. Reverse entire string. 2. Reverse each word individually. 3. Clean up extra spaces.',
    space_hint: 'O(1) Space',
    space: 'If strings are mutable (C++), O(1). In Python/Java, strings are immutable, so it is O(N).',
    followup: 'What if there are leading or trailing spaces? (Trim them first or handle them in the cleanup step).'
  },
  {
    c: "Amazon", t: "Maximum Product Subarray", d: "Medium", f: 38, tp: "Array, Sliding Window, String",
    q: 'Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.',
    brute: 'Calculate the product of every possible subarray. Time O(N^2).',
    opt_hint: 'O(N) Time, DP Tracking Min/Max',
    optimal: 'Iterate through the array maintaining both `max_product` and `min_product` ending at the current element. If the current number is negative, `max_product` and `min_product` swap before multiplication.',
    space_hint: 'O(1) Space',
    space: 'Only requires tracking variables for current min/max and global max.',
    followup: 'Why track the minimum? (Because multiplying a negative minimum by another negative number yields a massive positive product).'
  },
  {
    c: "Amazon", t: "Min Stack", d: "Medium", f: 50, tp: "Stack",
    q: 'Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.',
    brute: 'Use a regular stack. For getMin(), search the entire stack in O(N) time.',
    opt_hint: 'O(1) Time, Two Stacks',
    optimal: 'Maintain a main stack for values and a `min_stack` that stores the minimum value seen so far. When pushing, push `min(val, min_stack.top())` to `min_stack`.',
    space_hint: 'O(N) Space',
    space: 'The auxiliary `min_stack` requires O(N) space.',
    followup: 'Can you do it with O(1) extra space? (Yes, by encoding the minimum directly into the pushed value using math, though it\'s prone to integer overflow).'
  },
  {
    c: "Amazon", t: "Find Peak Element", d: "Medium", f: 62, tp: "Binary Search",
    q: 'A peak element is an element that is strictly greater than its neighbors. Given an integer array nums, find a peak element, and return its index.',
    brute: 'Linear scan, checking if `nums[i] > nums[i-1]` and `nums[i] > nums[i+1]`. Time O(N).',
    opt_hint: 'O(log N) Time, Binary Search',
    optimal: 'Binary search. If `nums[mid] < nums[mid + 1]`, we are on an upward slope, so a peak must exist to the right. Else, peak is to the left.',
    space_hint: 'O(1) Space',
    space: 'Only tracking pointers left and right.',
    followup: 'What if there are multiple peaks? (The problem states returning ANY peak is valid, which is why Binary Search guarantees finding at least one).'
  },
  {
    c: "Amazon", t: "Two Sum II - Input Array Is Sorted", d: "Medium", f: 50, tp: "Array, Sorting",
    q: 'Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.',
    brute: 'Standard Two Sum using Hash Map. Takes O(N) time and O(N) space.',
    opt_hint: 'O(N) Time, Two Pointers',
    optimal: 'Use a pointer at the start (left) and end (right). If sum > target, decrement right. If sum < target, increment left. Return indices.',
    space_hint: 'O(1) Space',
    space: 'Since the array is sorted, no Hash Map is needed.',
    followup: 'Can we do it in O(log N)? (No, but if you fix one element, you can binary search the other in O(N log N) total. Two pointers is strictly better O(N)).'
  },
  {
    c: "Amazon", t: "Majority Element", d: "Easy", f: 62, tp: "Array",
    q: 'Given an array nums of size n, return the majority element (the element that appears more than floor(n / 2) times).',
    brute: 'Count frequencies using a Hash Map. Time O(N), Space O(N).',
    opt_hint: 'O(N) Time, Boyer-Moore Voting',
    optimal: 'Maintain a `candidate` and a `count`. Iterate. If `count == 0`, set candidate to current element. If current == candidate, `count++`, else `count--`.',
    space_hint: 'O(1) Space',
    space: 'Requires only two integer variables.',
    followup: 'Why does this work? (Because the majority element appears more than all other elements combined, it will always survive the \'voting\' cancellations).'
  },
  {
    c: "Amazon", t: "Second Highest Salary", d: "Medium", f: 50, tp: "Array, Hash Table",
    q: 'Write an SQL query to report the second highest salary from the Employee table. If there is no second highest salary, the query should report null.',
    brute: 'Fetch all salaries, sort them in application code, and return the second.',
    opt_hint: 'O(N) Time, SQL Subquery / Limit',
    optimal: 'SQL: `SELECT MAX(salary) AS SecondHighestSalary FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);` OR use `ORDER BY salary DESC LIMIT 1 OFFSET 1` inside an IFNULL.',
    space_hint: 'O(1) Space',
    space: 'Database engine optimizes this to a single pass if indexed.',
    followup: 'What if we want the Nth highest salary? (Use `DENSE_RANK()` window function).'
  },
  {
    c: "Amazon", t: "Largest Number", d: "Medium", f: 50, tp: "Array, Hash Table",
    q: 'Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.',
    brute: 'Generate all permutations and find the maximum. Time O(N!).',
    opt_hint: 'O(N log N) Time, Custom Sort',
    optimal: 'Convert numbers to strings. Use a custom comparator that compares `a+b` with `b+a`. Sort the array descending based on this comparator. Join.',
    space_hint: 'O(N) Space',
    space: 'Space required for the string representations and the output string.',
    followup: 'What if the input is [0, 0]? (Must return \'0\', not \'00\').'
  },
  {
    c: "Amazon", t: "Rotate Array", d: "Medium", f: 50, tp: "Array",
    q: 'Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.',
    brute: 'Pop the last element and insert it at the beginning k times. Time O(N*K).',
    opt_hint: 'O(N) Time, Array Reversal',
    optimal: '1. Reverse the entire array. 2. Reverse the first k elements. 3. Reverse the remaining N-k elements. (k = k % n)',
    space_hint: 'O(1) Space',
    space: 'All reversals are done in-place using two pointers.',
    followup: 'What is the O(N) space approach? (Create a new array and map `new_arr[(i + k) % n] = nums[i]`).'
  },
  {
    c: "Amazon", t: "Binary Tree Right Side View", d: "Medium", f: 38, tp: "Binary Tree, Depth-First Search, Tree",
    q: 'Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.',
    brute: 'None. Standard traversal required.',
    opt_hint: 'O(N) Time, BFS/DFS',
    optimal: 'BFS: Get the last node of each level during level-order traversal. DFS: Traverse right-child first, add to result if `depth == result.length`.',
    space_hint: 'O(H) Space',
    space: 'DFS requires O(H) recursion stack. BFS requires up to O(N/2) queue space.',
    followup: 'How about the Left Side View? (Same logic, but in DFS traverse left-child first, or in BFS grab the first node of the level).'
  },
  {
    c: "Amazon", t: "House Robber", d: "Medium", f: 50, tp: "Dynamic Programming",
    q: 'You are a professional robber planning to rob houses along a street. You cannot rob adjacent houses. Return the maximum amount of money you can rob.',
    brute: 'Explore all valid combinations using recursive Backtracking. Time O(2^N).',
    opt_hint: 'O(N) Time, Dynamic Programming',
    optimal: 'Maintain two variables: `rob1` and `rob2` (representing max loot up to i-2 and i-1). For each house, the new max is `max(house + rob1, rob2)`. Update variables.',
    space_hint: 'O(1) Space',
    space: 'Only tracking previous two DP states, removing the need for an O(N) DP array.',
    followup: 'What if the houses are in a circle? (House Robber II - run the algorithm twice: once skipping the first house, once skipping the last house, and take the max).'
  },
  {
    c: "Amazon", t: "Rising Temperature", d: "Easy", f: 38, tp: "Stack",
    q: 'SQL problem: Find all dates\' Id with higher temperatures compared to its previous dates (yesterday).',
    brute: 'Load all into memory and iterate. Poor practice.',
    opt_hint: 'O(N) Time, SQL Self Join',
    optimal: 'SQL: `SELECT w1.id FROM Weather w1 JOIN Weather w2 ON DATEDIFF(w1.recordDate, w2.recordDate) = 1 WHERE w1.temperature > w2.temperature;`',
    space_hint: 'O(N) Space',
    space: 'Internal DB join memory.',
    followup: 'Can this be done without a JOIN? (Use the `LAG()` window function to look at the previous row, assuming ordered by date).'
  },
  {
    c: "Amazon", t: "Happy Number", d: "Easy", f: 50, tp: "Array, Hash Table",
    q: 'Write an algorithm to determine if a number n is happy. A happy number is a number defined by the following process: Replace the number by the sum of the squares of its digits. Repeat until it equals 1, or it loops endlessly.',
    brute: 'Simulate and track seen numbers in a HashSet until 1 or a cycle is found.',
    opt_hint: 'O(log N) Time, Floyd\'s Cycle-Finding',
    optimal: 'Use slow and fast pointers. `slow = sumSquares(n)`, `fast = sumSquares(sumSquares(n))`. Loop until `slow == fast`. If `slow == 1`, it\'s happy.',
    space_hint: 'O(1) Space',
    space: 'Floyd\'s algorithm avoids using a HashSet for O(1) space.',
    followup: 'Is it possible for the sum of squares to grow infinitely? (No, for a 3-digit number, max is 9^2*3=243, meaning it rapidly shrinks to a small loop range).'
  },
  {
    c: "Amazon", t: "Number of Islands", d: "Medium", f: 75, tp: "Depth-First Search, Matrix",
    q: 'Given an m x n 2D binary grid grid which represents a map of \'1\'s (land) and \'0\'s (water), return the number of islands.',
    brute: 'N/A. Requires Graph Traversal.',
    opt_hint: 'O(M*N) Time, DFS/BFS',
    optimal: 'Iterate over the grid. When a \'1\' is found, increment the island count, and launch a DFS/BFS to mark all connected \'1\'s as \'0\' (visited).',
    space_hint: 'O(M*N) Space',
    space: 'Recursion depth can be M*N if the entire grid is one island.',
    followup: 'What if the grid is too large to modify in-place? (Use a separate `visited` boolean matrix).'
  },
  {
    c: "Amazon", t: "Count Primes", d: "Medium", f: 38, tp: "Array, Hash Table",
    q: 'Given an integer n, return the number of prime numbers that are strictly less than n.',
    brute: 'For every number i < n, check if it\'s prime by dividing up to sqrt(i). Time O(N sqrt(N)).',
    opt_hint: 'O(N log log N) Time, Sieve of Eratosthenes',
    optimal: 'Create a boolean array of size n initialized to True. From 2 to sqrt(n), if `isPrime[p]` is true, mark all multiples of `p` as false. Count remaining Trues.',
    space_hint: 'O(N) Space',
    space: 'The boolean array requires O(N) space.',
    followup: 'Why do we only need to go up to sqrt(n) in the outer loop? (Because any composite number less than n must have a prime factor less than or equal to sqrt(n)).'
  },
  {
    c: "Amazon", t: "Isomorphic Strings", d: "Easy", f: 38, tp: "Hash Table, String",
    q: 'Given two strings s and t, determine if they are isomorphic (characters in s can be replaced to get t).',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, Two Hash Maps',
    optimal: 'Iterate through both strings. Keep two maps: `map_s_to_t` and `map_t_to_s`. If current mappings contradict past mappings, return false. Else, record mappings.',
    space_hint: 'O(1) Space',
    space: 'The Hash Maps only store up to 256 ASCII characters, resulting in constant O(1) space.',
    followup: 'Can you do it with a single array? (Yes, track the last seen indices of the characters in both strings. If they differ, return false).'
  },
  {
    c: "Amazon", t: "Reverse Linked List", d: "Easy", f: 50, tp: "Linked List, Two Pointers",
    q: 'Given the head of a singly linked list, reverse the list, and return the reversed list.',
    brute: 'Push all values to an array, create a new list. Time O(N), Space O(N).',
    opt_hint: 'O(N) Time, Iterative Pointers',
    optimal: 'Maintain `prev`, `curr`, and `next_node`. Loop while `curr`: `next_node = curr.next`, `curr.next = prev`, `prev = curr`, `curr = next_node`. Return `prev`.',
    space_hint: 'O(1) Space',
    space: 'In-place pointer rewiring.',
    followup: 'Can you do it recursively? (Yes, `newHead = reverseList(head.next); head.next.next = head; head.next = null`).'
  },
  {
    c: "Amazon", t: "Course Schedule", d: "Medium", f: 50, tp: "Breadth-First Search, Graph",
    q: 'There are numCourses courses. You are given an array prerequisites where prerequisites[i] = [a, b] indicates that you must take course b first if you want to take course a. Return true if you can finish all courses.',
    brute: 'Randomly check paths for cycles. O(N!).',
    opt_hint: 'O(V + E) Time, Topological Sort',
    optimal: 'Graph cycle detection. Use Kahn\'s Algorithm (BFS): compute in-degrees. Add 0 in-degree nodes to a queue. Pop, decrement neighbors. Count popped nodes. If count == numCourses, return true.',
    space_hint: 'O(V + E) Space',
    space: 'Space to store the adjacency list graph.',
    followup: 'How to do this with DFS? (Use an array `visited` with 3 states: 0=unvisited, 1=visiting, 2=visited. If you hit a 1, a cycle exists).'
  },
  {
    c: "Amazon", t: "Course Schedule II", d: "Medium", f: 38, tp: "Breadth-First Search, Graph",
    q: 'Return the ordering of courses you should take to finish all courses. If there are multiple valid answers, return any of them. If impossible, return an empty array.',
    brute: 'N/A',
    opt_hint: 'O(V + E) Time, Kahn\'s Algorithm',
    optimal: 'Exactly the same as Course Schedule I, but instead of counting the popped nodes, append them to a `result` array. If `result.length == numCourses`, return it.',
    space_hint: 'O(V + E) Space',
    space: 'Adjacency list storage + output array.',
    followup: 'What if you must return the lexicographically smallest ordering? (Use a Priority Queue (Min-Heap) instead of a standard Queue in Kahn\'s Algorithm).'
  },
  {
    c: "Amazon", t: "Word Search II", d: "Hard", f: 38, tp: "Binary Search, Hash Table, String",
    q: 'Given an m x n board of characters and a list of strings words, return all words on the board.',
    brute: 'Run standard Word Search I for every single word in the list. O(W * M * N * 3^L).',
    opt_hint: 'O(M * N * 3^L) Time, Trie + DFS',
    optimal: 'Insert all words into a Trie. Iterate over the board. If the character matches a Trie node, start DFS. Prune branches early if the path doesn\'t exist in the Trie.',
    space_hint: 'O(W) Space',
    space: 'The Trie stores all words. O(Sum of all word lengths).',
    followup: 'How do you avoid finding the same word twice? (When a word is found at a Trie node, mark the node\'s `isWord` as false, or remove the word from the Trie to aggressively prune).'
  },
  {
    c: "Amazon", t: "Kth Largest Element in an Array", d: "Medium", f: 50, tp: "Array, Heap (Priority Queue), Sorting",
    q: 'Given an integer array nums and an integer k, return the kth largest element in the array.',
    brute: 'Sort the array and return `nums[N-k]`. Time O(N log N).',
    opt_hint: 'O(N) Average Time, QuickSelect',
    optimal: 'QuickSelect algorithm. Choose a pivot, partition the array. If pivot index == N-k, return it. If > N-k, search left. Else search right. (Alternatively, use a Min-Heap of size K for O(N log K) time).',
    space_hint: 'O(1) Space',
    space: 'QuickSelect partitions in-place. Min-Heap approach uses O(K) space.',
    followup: 'Why is QuickSelect preferred? (It achieves O(N) average time, making it theoretically faster than sorting or Heap for large arrays).'
  },
  {
    c: "Amazon", t: "Design Add and Search Words Data Structure", d: "Medium", f: 38, tp: "Binary Search, Hash Table, String",
    q: 'Design a data structure that supports adding new words and finding if a string matches any previously added string. The string can contain \'.\' which matches any letter.',
    brute: 'Store words in a list and regex match. O(N * L) per search.',
    opt_hint: 'O(L) Add / O(26^L) Search, Trie',
    optimal: 'Use a standard Trie. For `search()`, use a recursive DFS helper. If character is a \'.\', iterate through all 26 possible children and recursively search the remaining string.',
    space_hint: 'O(Total Chars) Space',
    space: 'The Trie stores all added words.',
    followup: 'Why is search O(26^L) in worst case? (If the search term is entirely \'.......\', you must traverse every single node in the Trie).'
  },
  {
    c: "Amazon", t: "Contains Duplicate", d: "Easy", f: 50, tp: "Array, Hash Table",
    q: 'Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.',
    brute: 'Compare every element with every other element. Time O(N^2).',
    opt_hint: 'O(N) Time, HashSet',
    optimal: 'Initialize a HashSet. Iterate through the array. If the element is already in the set, return true. Otherwise, add it. Or, just `return len(set(nums)) != len(nums)`.',
    space_hint: 'O(N) Space',
    space: 'The HashSet stores at most N distinct integers.',
    followup: 'Can you do it in O(1) space? (Yes, by sorting the array in O(N log N) time and checking if adjacent elements are equal).'
  },
  {
    c: "Amazon", t: "Contains Duplicate II", d: "Easy", f: 38, tp: "Array, Hash Table",
    q: 'Given an integer array nums and an integer k, return true if there are two distinct indices i and j such that nums[i] == nums[j] and abs(i - j) <= k.',
    brute: 'For every element, check the next `k` elements. O(N * K) time.',
    opt_hint: 'O(N) Time, HashMap or Sliding Window',
    optimal: 'HashMap approach: Store the last seen index of each number. If current number exists in map and `i - map[num] <= k`, return true. Update map.',
    space_hint: 'O(N) Space',
    space: 'The HashMap stores at most N key-value pairs.',
    followup: 'Can you do it with less space? (Yes, use a Sliding Window HashSet of size K. If set > k, remove `nums[i-k-1]`. Space O(K)).'
  },
  {
    c: "Amazon", t: "Rearrange Array Elements by Sign", d: "Medium", f: 38, tp: "Array",
    q: 'You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers. Rearrange them such that every consecutive pair has opposite signs, starting with a positive.',
    brute: 'Filter positives into one array, negatives into another, and interleave. O(N) time and space.',
    opt_hint: 'O(N) Time, Two Pointers',
    optimal: 'Create result array. Maintain two pointers: `pos = 0`, `neg = 1`. Iterate over nums. If `num > 0`, place at `pos` and `pos += 2`. If `num < 0`, place at `neg` and `neg += 2`.',
    space_hint: 'O(N) Space',
    space: 'You must create a new output array of size N.',
    followup: 'Can you do it in O(1) space? (Extremely difficult while preserving relative order, requires complex rotations).'
  },
  {
    c: "Amazon", t: "Invert Binary Tree", d: "Easy", f: 38, tp: "Binary Tree, Depth-First Search, Tree",
    q: 'Given the root of a binary tree, invert the tree, and return its root.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, Recursive DFS',
    optimal: 'Base case: if root is null, return. Swap `root.left` and `root.right`. Recursively call invertTree on both children.',
    space_hint: 'O(H) Space',
    space: 'The recursion stack requires O(H) space, where H is tree height.',
    followup: 'How to do it iteratively? (Use a queue for BFS, pop node, swap children, push non-null children to queue).'
  },
  {
    c: "Amazon", t: "Basic Calculator II", d: "Medium", f: 25, tp: "Stack",
    q: 'Given a string s which represents an expression, evaluate this expression and return its value. The integer division should truncate toward zero. Operators are +, -, *, /.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, Stack',
    optimal: 'Keep track of `current_num` and `last_operator` (default \'+\'). Iterate chars. When hitting an operator or end: if \'+\', push num; if \'-\', push -num; if \'*\', pop, multiply, push; if \'/\', pop, truncate divide, push. Finally, sum the stack.',
    space_hint: 'O(N) Space',
    space: 'The stack stores the evaluated numbers.',
    followup: 'Can you do it in O(1) space? (Yes, instead of a stack, track `current_result` and `last_evaluated_term`. Update them iteratively).'
  },
  {
    c: "Amazon", t: "Implement Queue using Stacks", d: "Easy", f: 12, tp: "Monotonic Queue, Queue, Stack",
    q: 'Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).',
    brute: 'Whenever you push, transfer everything to stack2, push item, transfer back. Push is O(N).',
    opt_hint: 'O(1) Amortized Time, Two Stacks',
    optimal: 'Push is O(1) to `stack1`. For Pop/Peek, if `stack2` is empty, pop EVERYTHING from `stack1` and push to `stack2` (reversing the order). Then pop/peek from `stack2`.',
    space_hint: 'O(N) Space',
    space: 'The items are stored in the two stacks.',
    followup: 'Why is it amortized O(1)? (Because each element is transferred from stack1 to stack2 exactly once, spreading the O(N) cost across N pops).'
  },
  {
    c: "Amazon", t: "Palindrome Linked List", d: "Easy", f: 38, tp: "Hash Table, Linked List, String, Two Pointers",
    q: 'Given the head of a singly linked list, return true if it is a palindrome.',
    brute: 'Copy values to an array, check if array is palindrome. O(N) Space.',
    opt_hint: 'O(N) Time, Reverse Half List',
    optimal: '1. Find middle using slow/fast pointers. 2. Reverse the second half of the list. 3. Compare first half and reversed second half node by node.',
    space_hint: 'O(1) Space',
    space: 'All list reversals are done in-place via pointer manipulation.',
    followup: 'Should you restore the list? (In interviews, it\'s polite to reverse the second half back to its original state before returning).'
  },
  {
    c: "Amazon", t: "Lowest Common Ancestor of a Binary Search Tree", d: "Medium", f: 38, tp: "Binary Search, Binary Tree, Depth-First Search, Tree",
    q: 'Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.',
    brute: 'Ignore BST properties, search using standard binary tree LCA logic (DFS). O(N) time.',
    opt_hint: 'O(log N) Time, BST Properties',
    optimal: 'Start at root. If both p and q values are < root, move left. If both > root, move right. If they split (one < root, one > root) OR one matches root, the current node is the LCA.',
    space_hint: 'O(1) Space',
    space: 'Iterative approach requires only O(1) space, no recursion stack needed.',
    followup: 'What if it was a standard Binary Tree, not a BST? (You would use recursive DFS, returning non-null children. O(N) Time and O(H) Space).'
  },
  {
    c: "Amazon", t: "Lowest Common Ancestor of a Binary Tree", d: "Medium", f: 50, tp: "Binary Tree, Depth-First Search, Tree",
    q: 'Given a binary tree (NOT a BST), find the lowest common ancestor (LCA) of two given nodes p and q.',
    brute: 'Find path from root to p and path from root to q, then compare paths to find the last common node. Space O(N).',
    opt_hint: 'O(N) Time, Recursive DFS',
    optimal: 'DFS: if root is null, p, or q, return root. Recurse on left and right. If both return non-null, current node is LCA. If only one side returns non-null, return that side.',
    space_hint: 'O(H) Space',
    space: 'Recursion stack requires O(H) space where H is tree height.',
    followup: 'What if p or q might not exist in the tree? (Add a boolean flag; the LCA is only valid if both nodes were found during traversal).'
  },
  {
    c: "Amazon", t: "Delete Node in a Linked List", d: "Medium", f: 38, tp: "Linked List, Two Pointers",
    q: 'Given a node to delete in a linked list (not the tail), delete it in-place. You only have access to that node.',
    brute: 'Cannot traverse back. Must use the info we have.',
    opt_hint: 'O(1) Time, Copy & Skip',
    optimal: 'Copy the value of `node.next` into `node`, then set `node.next = node.next.next`. This effectively skips the next node and overwrites the current one.',
    space_hint: 'O(1) Space',
    space: 'No extra space needed.',
    followup: 'Why can\'t we delete the tail? (Because we\'d need to set the previous node\'s next to null, but we have no access to the previous node).'
  },
  {
    c: "Amazon", t: "Power of Two", d: "Easy", f: 38, tp: "Array, Hash Table",
    q: 'Given an integer n, return true if it is a power of two. Otherwise, return false.',
    brute: 'Keep dividing n by 2 until it becomes 1 (return true) or not divisible (return false). Time O(log N).',
    opt_hint: 'O(1) Time, Bit Manipulation',
    optimal: 'A power of two has exactly one set bit. `n > 0 && (n & (n - 1)) == 0`. The trick `n & (n-1)` clears the lowest set bit.',
    space_hint: 'O(1) Space',
    space: 'Single bit operation, no extra memory.',
    followup: 'What about Power of Three or Power of Four? (Power of 3: use modulo 3^19 since max int fits. Power of 4: must be power of 2, AND the set bit must be at even position).'
  },
  {
    c: "Amazon", t: "Sliding Window Maximum", d: "Hard", f: 62, tp: "Monotonic Queue, Queue, Sliding Window, String",
    q: 'You are given an array of integers nums, there is a sliding window of size k which moves from the very left to the very right. Return the maximum of each window.',
    brute: 'For every window position, scan all k elements to find max. Time O(N*K).',
    opt_hint: 'O(N) Time, Monotonic Deque',
    optimal: 'Maintain a deque storing indices in decreasing order of values. Pop from the back if smaller than current element. Pop from the front if the index is out of window. Front of deque is always the max.',
    space_hint: 'O(K) Space',
    space: 'The deque stores at most K indices at any time.',
    followup: 'Can this be done with a max heap? (Yes, O(N log K) time using a max heap while lazily removing out-of-window elements).'
  },
  {
    c: "Amazon", t: "Valid Anagram", d: "Easy", f: 62, tp: "Hash Table, String",
    q: 'Given two strings s and t, return true if t is an anagram of s, and false otherwise.',
    brute: 'Sort both strings and compare. Time O(N log N).',
    opt_hint: 'O(N) Time, Frequency Count',
    optimal: 'Create a frequency array of size 26. Increment for each char in s, decrement for each char in t. If all zeros at the end, they are anagrams.',
    space_hint: 'O(1) Space',
    space: 'Fixed-size array of 26 characters is constant space.',
    followup: 'What if the strings contain Unicode characters? (Use a HashMap instead of a fixed-size array).'
  },
  {
    c: "Amazon", t: "Product of Array Except Self", d: "Medium", f: 50, tp: "Array",
    q: 'Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. You must write an algorithm without using the division operation and in O(n) time.',
    brute: 'For each element, iterate through all other elements to compute the product. Time O(N^2).',
    opt_hint: 'O(N) Time, Prefix & Suffix Products',
    optimal: 'Build output array with prefix products (left to right). Then multiply in suffix products (right to left) using a single running variable.',
    space_hint: 'O(1) Extra Space',
    space: 'The output array doesn\'t count. Only use a single `suffix` variable for the second pass.',
    followup: 'What if division was allowed? (Total product divided by current element. But must handle zeros specially).'
  },
  {
    c: "Amazon", t: "Meeting Rooms II", d: "Medium", f: 50, tp: "Heap (Priority Queue), Sorting",
    q: 'Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.',
    brute: 'Simulate each meeting and try to assign it to existing rooms. O(N^2).',
    opt_hint: 'O(N log N) Time, Min Heap',
    optimal: 'Sort by start time. Use a min heap of end times. For each meeting, if `start >= heap.top()`, pop the top (room freed). Push current end time. Answer is heap size.',
    space_hint: 'O(N) Space',
    space: 'The heap can hold at most N end times.',
    followup: 'Can you solve it without a heap? (Yes, separate and sort start/end times. Use two pointers to count max simultaneous meetings).'
  },
  {
    c: "Amazon", t: "Missing Number", d: "Easy", f: 50, tp: "Array, Hash Table",
    q: 'Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.',
    brute: 'Use a HashSet. Check which number from 0 to N is missing. Time O(N), Space O(N).',
    opt_hint: 'O(N) Time, Gauss Formula',
    optimal: 'Expected sum of 0 to N is `n*(n+1)/2`. Subtract the actual sum of the array from the expected sum. The result is the missing number.',
    space_hint: 'O(1) Space',
    space: 'Single integer subtraction, no extra space.',
    followup: 'Can you use XOR instead? (Yes, XOR all numbers from 0 to N and XOR all elements in the array. The bits cancel, leaving the missing number).'
  },
  {
    c: "Amazon", t: "Integer to English Words", d: "Hard", f: 38, tp: "Hash Table, String",
    q: 'Convert a non-negative integer num to its English words representation.',
    brute: 'Hardcode every possible number up to a billion. Not scalable.',
    opt_hint: 'O(log N) Time, Chunked Recursion',
    optimal: 'Break the number into chunks of 3 (Billion, Million, Thousand). For each chunk, convert 0-999 to English words using a helper function with \'Ones\', \'Teens\', \'Tens\' lookup arrays.',
    space_hint: 'O(1) Space',
    space: 'Fixed lookup arrays are constant size.',
    followup: 'What are common edge cases? (0 is \'Zero\', 1000 is \'One Thousand\' not \'One Thousand Zero Hundred\', trailing spaces).'
  },
  {
    c: "Amazon", t: "Move Zeroes", d: "Easy", f: 50, tp: "Array, Hash Table",
    q: 'Given an integer array nums, move all 0\'s to the end of it while maintaining the relative order of the non-zero elements.',
    brute: 'Create a new array with non-zeroes first, then fill with zeroes. Space O(N).',
    opt_hint: 'O(N) Time, Two Pointers',
    optimal: 'Use a `slow` pointer. Iterate with `fast`. If `nums[fast] != 0`, swap `nums[slow]` and `nums[fast]`, and increment `slow`.',
    space_hint: 'O(1) Space',
    space: 'In-place swapping, no extra array needed.',
    followup: 'What if we want to minimize the total number of operations? (Avoid unnecessary swaps when `slow == fast` by only writing when they differ).'
  },
  {
    c: "Amazon", t: "Find the Duplicate Number", d: "Medium", f: 50, tp: "Binary Search",
    q: 'Given an array of integers nums containing n + 1 integers where each integer is in range [1, n], there is only one repeated number. Find this repeated number without modifying the array and using only O(1) space.',
    brute: 'Use a HashSet or sort the array. Violates constraints.',
    opt_hint: 'O(N) Time, Floyd\'s Cycle Detection',
    optimal: 'Treat the array as a linked list where `nums[i]` points to the next index. The duplicate creates a cycle. Use Floyd\'s slow/fast pointer to find the cycle entry point.',
    space_hint: 'O(1) Space',
    space: 'Only two pointer variables used.',
    followup: 'Why does Floyd\'s algorithm work here? (Since n+1 values must fit in [1,n], the pigeonhole principle guarantees a duplicate. The duplicate index causes a cycle in the \'next pointer\' graph).'
  },
  {
    c: "Amazon", t: "Find Median from Data Stream", d: "Hard", f: 50, tp: "Array, Binary Search, Sorting",
    q: 'Implement the MedianFinder class that supports `addNum(int num)` and `findMedian()` returning the median of all elements.',
    brute: 'Store in a list, sort when `findMedian()` is called. Add O(1), Find O(N log N).',
    opt_hint: 'O(log N) Add / O(1) Find, Two Heaps',
    optimal: 'Maintain a max-heap for the lower half and a min-heap for the upper half. Balance their sizes (differ by at most 1). Median is the top of the larger heap or average of both tops.',
    space_hint: 'O(N) Space',
    space: 'Both heaps store all N elements.',
    followup: 'What if all numbers are in range [0, 100]? (Use a Bucket Sort / Counting Sort array for O(1) add and O(1) find).'
  },
  {
    c: "Google", t: "Max Consecutive Ones", d: "Easy", f: 38, tp: "Array, Hash Table",
    q: 'Given a binary array nums, return the maximum number of consecutive 1\'s in the array.',
    brute: 'N/A. A single scan is already optimal.',
    opt_hint: 'O(N) Time, Single Pass Counter',
    optimal: 'Iterate. If `nums[i] == 1`, increment `current`. Else reset `current = 0`. Update `max_count = max(max_count, current)` each iteration.',
    space_hint: 'O(1) Space',
    space: 'Only requires two integer variables.',
    followup: 'What if you can flip at most one 0 to 1? (Max Consecutive Ones III - use a sliding window where you allow at most K flips).'
  },
  {
    c: "Google", t: "Reverse Pairs", d: "Hard", f: 25, tp: "Array, Hash Table",
    q: 'Given an integer array nums, return the number of reverse pairs where i < j and nums[i] > 2 * nums[j].',
    brute: 'Check all pairs (i, j) where i < j. Time O(N^2). Will TLE.',
    opt_hint: 'O(N log N) Time, Merge Sort',
    optimal: 'Modify Merge Sort. During merge, before merging two halves, count pairs: for each element in the left half, find elements in the right half satisfying the condition using a two-pointer.',
    space_hint: 'O(N) Space',
    space: 'Temporary array required for merge sort.',
    followup: 'Can this be done with a BIT/Segment Tree? (Yes, with coordinate compression and a BIT, also in O(N log N)).'
  },
  {
    c: "Google", t: "Coin Change II", d: "Medium", f: 38, tp: "Dynamic Programming",
    q: 'Given an array of coins and an amount, return the number of combinations that make up that amount.',
    brute: 'Recursive exploration of all combinations. Exponential time.',
    opt_hint: 'O(Amount * N) Time, DP',
    optimal: 'Use a 1D DP array of size `amount + 1` initialized to 0, with `dp[0] = 1`. For each coin, for each amount from coin to target: `dp[amount] += dp[amount - coin]`. Inner loop must go forward.',
    space_hint: 'O(Amount) Space',
    space: '1D DP array of size Amount+1.',
    followup: 'What is the difference between Coin Change I and II? (I asks for minimum COINS = order matters, combinations with repetition. II asks for number of COMBINATIONS = unordered).'
  },
  {
    c: "Google", t: "Contiguous Array", d: "Medium", f: 25, tp: "Array",
    q: 'Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.',
    brute: 'Check all subarrays, count 0s and 1s. Time O(N^2).',
    opt_hint: 'O(N) Time, Prefix Sum + HashMap',
    optimal: 'Treat 0 as -1. Compute prefix sums. If the same prefix sum appears at index i and j, then the subarray (i+1, j) has equal 0s and 1s. Use a HashMap to store first occurrence of each prefix sum.',
    space_hint: 'O(N) Space',
    space: 'HashMap stores at most N+1 prefix sum entries.',
    followup: 'What if there were 3 types of characters (like 0, 1, 2)? (Much harder - requires 2D prefix sums or more complex hashing).'
  },
  {
    c: "Google", t: "Single Element in a Sorted Array", d: "Medium", f: 50, tp: "Array, Sorting",
    q: 'You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element. Your solution must run in O(log n) time.',
    brute: 'Linear scan using XOR. Time O(N). Doesn\'t satisfy the O(log N) constraint.',
    opt_hint: 'O(log N) Time, Binary Search',
    optimal: 'Binary search on pairs. If `mid` is even, compare `nums[mid]` with `nums[mid+1]`. If equal, single element is to the right. If not, it\'s to the left or at mid. (Adjust for even/odd mid accordingly).',
    space_hint: 'O(1) Space',
    space: 'Only pointer variables used.',
    followup: 'Why must `mid` be even before checking? (Pairs are at (0,1), (2,3), (4,5)... A single element shifts all subsequent pairs by one, so parity tells you which side it\'s on).'
  },
  {
    c: "Google", t: "01 Matrix", d: "Medium", f: 12, tp: "Depth-First Search, Matrix",
    q: 'Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.',
    brute: 'For each cell with value 1, do BFS to find the nearest 0. Time O(M^2 * N^2).',
    opt_hint: 'O(M*N) Time, Multi-source BFS',
    optimal: 'Start BFS from ALL zeros simultaneously (multi-source BFS). Initialize their distance as 0. Use a queue. Propagate distance outward. Cells with 1 get updated when first reached.',
    space_hint: 'O(M*N) Space',
    space: 'Queue can hold up to M*N elements. Output matrix is M*N.',
    followup: 'Can this be done with DP? (Yes, two-pass DP: first top-left to bottom-right, then bottom-right to top-left).'
  },
  {
    c: "Google", t: "Diameter of Binary Tree", d: "Easy", f: 12, tp: "Binary Tree, Depth-First Search, Tree",
    q: 'Given the root of a binary tree, return the length of the diameter of the tree (the length of the longest path between any two nodes).',
    brute: 'For each node, compute left height + right height. Take max. But recomputing heights is wasteful. O(N^2).',
    opt_hint: 'O(N) Time, Post-order DFS',
    optimal: 'DFS returns the height of the subtree. At each node, update global `max_diameter = max(max_diameter, left_height + right_height)`. Return `1 + max(left_height, right_height)`.',
    space_hint: 'O(H) Space',
    space: 'Recursion stack depth is O(H).',
    followup: 'Does the longest path have to pass through the root? (No! That\'s the key insight - it must pass through some node as its \'peak\', so we update the global max at every node).'
  },
  {
    c: "Google", t: "Number of Provinces", d: "Medium", f: 25, tp: "Array, Hash Table",
    q: 'There are n cities. You are given an n x n matrix isConnected. Return the total number of provinces (groups of connected cities).',
    brute: 'N/A. Graph traversal is required.',
    opt_hint: 'O(N^2) Time, DFS/BFS or Union-Find',
    optimal: 'For each unvisited city, increment province count and DFS to mark all cities in the same province as visited.',
    space_hint: 'O(N) Space',
    space: 'O(N) for the visited array and O(N) recursion stack depth.',
    followup: 'How to do this with Union-Find? (Initialize parent[i] = i. Union connected cities. Count distinct roots at the end).'
  },
  {
    c: "Google", t: "Permutation in String", d: "Medium", f: 25, tp: "Backtracking, Hash Table, String",
    q: 'Given two strings s1 and s2, return true if s2 contains a permutation of s1.',
    brute: 'Generate all permutations of s1 and check if each exists as a substring of s2. Exponential.',
    opt_hint: 'O(N) Time, Sliding Window + Frequency Map',
    optimal: 'Use two frequency arrays (or maps) of size 26. Slide a window of size `len(s1)` over s2. Add incoming character, remove outgoing character. If frequency arrays match, return true.',
    space_hint: 'O(1) Space',
    space: 'Two fixed-size arrays of 26 characters = constant O(1) space.',
    followup: 'Can we optimize the comparison? (Instead of comparing all 26 chars each time, maintain a `matches` counter tracking how many characters have matching frequencies).'
  },
  {
    c: "Google", t: "Managers with at Least 5 Direct Reports", d: "Medium", f: 12, tp: "Array, Hash Table",
    q: 'SQL: Find managers with at least 5 direct reports.',
    brute: 'Load data into application memory and iterate.',
    opt_hint: 'O(N) Time, SQL GROUP BY',
    optimal: 'SQL: `SELECT name FROM Employee WHERE id IN (SELECT managerId FROM Employee GROUP BY managerId HAVING COUNT(*) >= 5);`',
    space_hint: 'O(N) Space',
    space: 'Internal DB aggregation memory.',
    followup: 'How would this look as a JOIN? (`SELECT e.name FROM Employee e JOIN (SELECT managerId FROM Employee GROUP BY managerId HAVING COUNT(*) >= 5) m ON e.id = m.managerId`)'
  },
  {
    c: "Google", t: "Find Customer Referee", d: "Easy", f: 25, tp: "Binary Search",
    q: 'SQL: Find the names of customers that are NOT referred by the customer with id = 2.',
    brute: 'Load into application and filter.',
    opt_hint: 'O(N) Time, SQL WHERE with NULL handling',
    optimal: 'SQL: `SELECT name FROM Customer WHERE referee_id != 2 OR referee_id IS NULL;` — The NULL check is critical, since `NULL != 2` evaluates to NULL (falsy) in SQL.',
    space_hint: 'O(N) Space',
    space: 'DB filter scan.',
    followup: 'What\'s the most common mistake? (Forgetting the `IS NULL` clause — rows without a referee are excluded without it).'
  },
  {
    c: "Google", t: "Can Place Flowers", d: "Easy", f: 38, tp: "Array, Hash Table",
    q: 'You have a long flowerbed where some plots are planted (1) and some are not (0). Flowers cannot be planted in adjacent plots. Return true if n new flowers can be planted.',
    brute: 'Try placing flowers in every valid position. Check all combinations.',
    opt_hint: 'O(N) Time, Greedy',
    optimal: 'Iterate greedily. If `flowerbed[i] == 0` and both neighbors are 0 (or out of bounds), plant a flower (`flowerbed[i] = 1`) and decrement n. If n <= 0, return true.',
    space_hint: 'O(1) Space',
    space: 'Modifying the input array in-place uses no extra space.',
    followup: 'Why does greedy work here? (Planting as early as possible never blocks a placement that would otherwise be available - there are no dependencies across positions).'
  },
  {
    c: "Google", t: "Task Scheduler", d: "Medium", f: 12, tp: "Array, Hash Table",
    q: 'Given a list of tasks and a cooldown period n, find the minimum number of intervals required to finish all tasks.',
    brute: 'Simulate scheduling. Exponential.',
    opt_hint: 'O(N) Time, Math / Greedy',
    optimal: 'Count frequencies. Get `max_freq`. The number of tasks with `max_freq` is `max_count`. Formula: `max(len(tasks), (max_freq - 1) * (n + 1) + max_count)`.',
    space_hint: 'O(1) Space',
    space: 'Only a fixed frequency array of 26 characters.',
    followup: 'Can you simulate it? (Yes, use a Max Heap and a \'cooldown queue\'. In O(N * K) time but easier to implement).'
  },
  {
    c: "Google", t: "Design Search Autocomplete System", d: "Hard", f: 12, tp: "Binary Search",
    q: 'Design a search autocomplete system. For a given input, return the top 3 historical hot sentences that have the same prefix as the input.',
    brute: 'Linear scan through all sentences for each input character. Time O(N * L) per input.',
    opt_hint: 'O(L) per char, Trie with DFS',
    optimal: 'Build a Trie storing sentences and their frequencies. For each input character, traverse the Trie. When \'#\' is input, add the current input as a new sentence. At each node, DFS to collect all sentences and return the top 3 by frequency.',
    space_hint: 'O(Total Chars) Space',
    space: 'Trie space proportional to total characters across all sentences.',
    followup: 'How to make top-3 retrieval faster? (Store a sorted list of top sentences at each Trie node, at the cost of more memory and complex updates).'
  },
  {
    c: "Google", t: "Maximum Average Subarray I", d: "Easy", f: 25, tp: "Array, Sliding Window, String",
    q: 'You are given an integer array nums consisting of n elements, and an integer k. Find a contiguous subarray whose length is equal to k that has the maximum average value.',
    brute: 'Compute the sum of every k-length subarray. Time O(N*K).',
    opt_hint: 'O(N) Time, Sliding Window',
    optimal: 'Compute the sum of the first k elements. Slide the window: add the new element, subtract the outgoing element. Track the maximum sum. Return `max_sum / k`.',
    space_hint: 'O(1) Space',
    space: 'Only a running sum variable.',
    followup: 'What if k is not fixed? (Maximum Average Subarray II - harder, uses binary search on the answer).'
  },
  {
    c: "Google", t: "Find K Closest Elements", d: "Medium", f: 25, tp: "Binary Search",
    q: 'Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array, sorted in ascending order.',
    brute: 'Sort all elements by distance from x, take first k, sort again. Time O(N log N).',
    opt_hint: 'O(log(N-K) + K) Time, Binary Search',
    optimal: 'Binary search for the LEFT boundary of the k-element window. The window [mid, mid+k] is optimal if `x - arr[mid] <= arr[mid+k] - x`. Return `arr[left:left+k]`.',
    space_hint: 'O(1) Extra Space',
    space: 'Only pointer variables, not counting the output slice.',
    followup: 'Can you solve it with a sliding window? (Yes, expand from the closest element O(N), but binary search is strictly more efficient).'
  },
  {
    c: "Google", t: "Range Module", d: "Hard", f: 38, tp: "Array, Hash Table",
    q: 'A Range Module is a module that tracks ranges of numbers. Implement `addRange`, `queryRange`, and `removeRange`.',
    brute: 'Store all integers in a HashSet. Very slow for large ranges.',
    opt_hint: 'O(N) Time, Sorted List / Interval Merging',
    optimal: 'Maintain a sorted list of non-overlapping intervals. For `addRange`, merge all overlapping intervals with the new one. For `removeRange`, split/truncate overlapping intervals. For `queryRange`, binary search and validate.',
    space_hint: 'O(N) Space',
    space: 'Storing the list of merged intervals.',
    followup: 'Can we do better? (A Segment Tree with lazy propagation supports all operations in O(log N) time).'
  },
  {
    c: "Google", t: "Accounts Merge", d: "Medium", f: 38, tp: "Array, Sorting",
    q: 'Given a list of accounts where each account contains a name and some emails, merge accounts that share a common email. Return the merged accounts sorted.',
    brute: 'For every pair of accounts, check if they share an email and merge. O(N^2 * E^2).',
    opt_hint: 'O(N * E * alpha) Time, Union-Find',
    optimal: 'Build a Union-Find. Map each email to the first time it\'s seen in an account. For subsequent occurrences, union the current account with the first-seen account. Finally, group emails by their root account.',
    space_hint: 'O(N * E) Space',
    space: 'Storing the email-to-account mapping and Union-Find parents.',
    followup: 'Can you solve it with DFS/BFS? (Yes, build a graph where emails are nodes; edges connect emails that appear in the same account. DFS finds connected components).'
  },
  {
    c: "Google", t: "Flood Fill", d: "Easy", f: 25, tp: "Array, Hash Table",
    q: 'An image is represented by an m x n integer grid image where image[i][j] represents the pixel value. Perform a flood fill starting from pixel (sr, sc), replacing the color and all 4-directionally connected cells of the same original color with newColor.',
    brute: 'N/A. DFS/BFS is the standard solution.',
    opt_hint: 'O(M*N) Time, DFS',
    optimal: 'Store the original color. DFS from (sr, sc). If the current cell is the original color, change it to newColor and recurse in 4 directions.',
    space_hint: 'O(M*N) Space',
    space: 'Recursion stack can go as deep as M*N for a fully connected image.',
    followup: 'What if the new color equals the original color? (Return immediately to avoid infinite recursion).'
  },
  {
    c: "Google", t: "Asteroid Collision", d: "Medium", f: 25, tp: "Array, Hash Table",
    q: 'Given an array of asteroids moving in the same row. Positive means moving right, negative means moving left. Return the state after all collisions. (Same sign never collide; right-moving hits left-moving.)',
    brute: 'Simulate all collisions repeatedly until stable. O(N^2).',
    opt_hint: 'O(N) Time, Stack',
    optimal: 'Use a stack. For each asteroid: if positive or stack empty or stack top is negative, push. Else (current is negative, top is positive): if |current| > top, pop and retry. If equal, pop both. If |current| < top, skip current.',
    space_hint: 'O(N) Space',
    space: 'Stack holds at most N asteroids.',
    followup: 'What if two asteroids of the same sign can also collide? (Adjust the comparison conditions in the stack logic).'
  },
  {
    c: "Google", t: "Daily Temperatures", d: "Medium", f: 25, tp: "Stack",
    q: 'Given an array of integers temperatures representing daily temperatures, return an array answer such that answer[i] is the number of days after day i until a warmer temperature.',
    brute: 'For each day, scan forward until a warmer temperature is found. Time O(N^2).',
    opt_hint: 'O(N) Time, Monotonic Decreasing Stack',
    optimal: 'Maintain a stack of indices with decreasing temperatures. For each new temperature, pop indices from the stack whose temperature is smaller. Set `answer[popped_index] = i - popped_index`.',
    space_hint: 'O(N) Space',
    space: 'Stack can hold at most N indices.',
    followup: 'What if we want the previous warmer temperature? (Traverse from right to left with the same stack logic).'
  },
  {
    c: "Google", t: "Reorganize String", d: "Medium", f: 25, tp: "Hash Table, String",
    q: 'Given a string s, rearrange the characters of s so that any two adjacent characters are not the same. Return any valid rearrangement or an empty string if not possible.',
    brute: 'Try all permutations and check for validity. O(N!).',
    opt_hint: 'O(N log N) Time, Max Heap',
    optimal: 'Count character frequencies. Use a Max Heap. At each step, pop the most frequent character. If it is the same as the last placed character, pop the second most frequent. Place it and re-push both.',
    space_hint: 'O(1) Space',
    space: 'Heap stores at most 26 unique characters — constant space.',
    followup: 'When is it impossible? (If any character\'s frequency > ceil(N/2)).'
  },
  {
    c: "Google", t: "Jewels and Stones", d: "Easy", f: 12, tp: "Array, Hash Table",
    q: 'You are given strings jewels (types of jewels) and stones (what you have). Return how many of your stones are also jewels.',
    brute: 'For every stone, scan through jewels. O(J * S) time.',
    opt_hint: 'O(J + S) Time, HashSet',
    optimal: 'Add all jewel types to a HashSet. Iterate through stones, incrementing count if the stone is in the set.',
    space_hint: 'O(J) Space',
    space: 'HashSet stores all J jewel types.',
    followup: 'Can you do it in O(1) space? (Yes, if jewels are only lowercase/uppercase letters — use a 52-element boolean array instead of a HashSet).'
  },
  {
    c: "Google", t: "Binary Search", d: "Easy", f: 50, tp: "Binary Search",
    q: 'Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. Return the index if found, otherwise return -1.',
    brute: 'Linear scan through the array. O(N) time.',
    opt_hint: 'O(log N) Time, Binary Search',
    optimal: 'Set `left = 0`, `right = len - 1`. While `left <= right`: `mid = left + (right - left) // 2`. If `nums[mid] == target` return mid. If `nums[mid] < target` set `left = mid + 1`, else `right = mid - 1`.',
    space_hint: 'O(1) Space',
    space: 'Only three pointer variables used.',
    followup: 'What is the risk of `(left + right) // 2`? (Integer overflow for very large values; always use `left + (right - left) // 2`).'
  },
  {
    c: "Google", t: "Cheapest Flights Within K Stops", d: "Medium", f: 12, tp: "Array, Hash Table",
    q: 'There are n cities connected by flights. Find the cheapest price from src to dst with at most k stops.',
    brute: 'DFS exploring all paths. Exponential time.',
    opt_hint: 'O(K * E) Time, Bellman-Ford (K iterations)',
    optimal: 'Run K+1 iterations of Bellman-Ford. In each iteration, relax all edges using a *copy* of the previous iteration\'s distances to avoid chaining updates in the same round.',
    space_hint: 'O(N) Space',
    space: 'Two distance arrays of size N (current and previous iteration).',
    followup: 'Why not Dijkstra? (Dijkstra doesn\'t naturally handle the stop constraint. It finds shortest path by distance, not by number of hops).'
  },
  {
    c: "Google", t: "Guess the Word", d: "Hard", f: 38, tp: "Hash Table, String",
    q: 'There is a secret word. You guess words from a wordlist and get told how many characters match. Find the secret word in 10 guesses using the Master API.',
    brute: 'Guess randomly and hope for the best. Probabilistically fails.',
    opt_hint: 'O(N^2) Time, Minimax Word Selection',
    optimal: 'For each guess, filter the remaining candidates by the match count returned. Choose the next guess as the word that minimizes the worst-case remaining candidates (minimax). A simpler approach: pick a word that shares the most common characters with the rest.',
    space_hint: 'O(N) Space',
    space: 'Candidate list shrinks with each guess.',
    followup: 'What makes this problem hard? (It is interactive and requires making guesses under uncertainty, which is rare in standard algorithm problems).'
  },
  {
    c: "Google", t: "Koko Eating Bananas", d: "Medium", f: 50, tp: "Array, Hash Table",
    q: 'Koko can eat bananas at rate k bananas/hour. She has h hours. Given piles, find the minimum integer k such that she can eat all piles within h hours.',
    brute: 'Try every k from 1 to max(piles). O(max * N).',
    opt_hint: 'O(N log M) Time, Binary Search on Answer',
    optimal: 'Binary search on k from 1 to max(piles). For each k, calculate total hours = sum(ceil(pile/k)). If hours <= h, search left half (try smaller k). Else search right.',
    space_hint: 'O(1) Space',
    space: 'Only pointer and sum variables.',
    followup: 'What other problems use Binary Search on Answer? (Capacity to Ship Packages, Minimum Days to Bloom, Minimum Speed to Arrive on Time).'
  },
  {
    c: "Google", t: "Middle of the Linked List", d: "Easy", f: 38, tp: "Linked List, Two Pointers",
    q: 'Given the head of a singly linked list, return the middle node. If there are two middle nodes, return the second middle node.',
    brute: 'Count the list length, traverse to the middle. Two passes.',
    opt_hint: 'O(N) Time, Fast & Slow Pointers',
    optimal: 'Use two pointers, `slow` and `fast`. Move `slow` by 1 and `fast` by 2 each step. When `fast` reaches the end, `slow` is at the middle.',
    space_hint: 'O(1) Space',
    space: 'Only two pointers used.',
    followup: 'What if you need the first middle for even-length lists? (Move `fast` only while `fast.next != null && fast.next.next != null`).'
  },
  {
    c: "Google", t: "Random Pick with Weight", d: "Medium", f: 38, tp: "Array, Hash Table",
    q: 'Given an array w of weights, implement pickIndex() that returns an index with probability proportional to w[i].',
    brute: 'Flatten weights into an array and pick randomly. Works but uses O(sum(w)) space.',
    opt_hint: 'O(N) Build / O(log N) Pick, Prefix Sums + Binary Search',
    optimal: 'Build a prefix sum array. To pick, generate a random number in [1, total_weight] and binary search for its position in the prefix sum array.',
    space_hint: 'O(N) Space',
    space: 'Prefix sum array of size N.',
    followup: 'Why prefix sums? (They map each random number in [1, total] to exactly one index, with the range proportional to the weight of that index).'
  },
  {
    c: "Google", t: "Maximum Width Ramp", d: "Medium", f: 25, tp: "Array, Hash Table",
    q: 'Given an integer array nums, a ramp is a pair (i, j) where i < j and nums[i] <= nums[j]. Return the maximum width j - i of a ramp.',
    brute: 'Check all pairs (i, j). Time O(N^2).',
    opt_hint: 'O(N) Time, Monotonic Stack + Right Scan',
    optimal: 'Build a decreasing monotonic stack of indices from left to right. Then scan from right to left: for each j, pop stack elements where `nums[stack.top()] <= nums[j]` and update max width.',
    space_hint: 'O(N) Space',
    space: 'Monotonic stack stores at most N indices.',
    followup: 'Why build the stack from the left? (We want candidates for the left bound `i` with the smallest possible values to maximize the chance of `nums[i] <= nums[j]`).'
  },
  {
    c: "Google", t: "Minimum Area Rectangle II", d: "Medium", f: 12, tp: "Stack",
    q: 'Given a set of points, find the minimum area of any rectangle formed from these points, with sides NOT necessarily parallel to the axes.',
    brute: 'For every 4 points, check if they form a rectangle. O(N^4).',
    opt_hint: 'O(N^2 log N) Time, Diagonal as Key',
    optimal: 'For every pair of points (p1, p2), treat them as the diagonal of a potential rectangle. The center and length of each diagonal uniquely identifies a rectangle. Group pairs by their diagonal\'s center and length. If two pairs share these properties, compute the area.',
    space_hint: 'O(N^2) Space',
    space: 'Storing all O(N^2) diagonal representations.',
    followup: 'How is this different from Rectangle I? (I requires sides parallel to axes, making it simpler. II requires checking all orientations).'
  },
  {
    c: "Google", t: "Fibonacci Number", d: "Easy", f: 38, tp: "Array, Hash Table",
    q: 'Given n, calculate F(n) where F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2).',
    brute: 'Naive recursion. Time O(2^N).',
    opt_hint: 'O(N) Time, Iterative DP',
    optimal: 'Iterate from 2 to n, keeping only the last two values: `a, b = b, a + b`. Return `b`.',
    space_hint: 'O(1) Space',
    space: 'Two rolling variables instead of an O(N) array.',
    followup: 'Can you do O(log N)? (Yes, using matrix exponentiation: [[1,1],[1,0]]^n gives the nth Fibonacci number).'
  },
  {
    c: "Google", t: "Squares of a Sorted Array", d: "Easy", f: 38, tp: "Array, Sorting",
    q: 'Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.',
    brute: 'Square all elements and sort. Time O(N log N).',
    opt_hint: 'O(N) Time, Two Pointers from Ends',
    optimal: 'Use two pointers at the start and end of the array. Compare absolute values. Place the larger square at the end of the result array and move the corresponding pointer inward.',
    space_hint: 'O(N) Space',
    space: 'Output array of size N.',
    followup: 'Why from the ends? (Because the largest squares come from the most negative or most positive values, which are at the two ends of a sorted array).'
  },
  {
    c: "Google", t: "Rotting Oranges", d: "Medium", f: 38, tp: "Array, Hash Table",
    q: 'Given a grid where 0 = empty, 1 = fresh orange, 2 = rotten orange, return the minimum number of minutes until no fresh orange remains. Return -1 if impossible.',
    brute: 'Simulate each minute, scanning entire grid. O((M*N)^2).',
    opt_hint: 'O(M*N) Time, Multi-source BFS',
    optimal: 'Put all initially rotten oranges in the BFS queue. Process level by level (each level = 1 minute). Rot adjacent fresh oranges. Count minutes until queue is empty. Check if any fresh remain.',
    space_hint: 'O(M*N) Space',
    space: 'Queue can hold all M*N cells in the worst case.',
    followup: 'Why BFS and not DFS? (BFS naturally finds the shortest distance/minimum time from all sources simultaneously. DFS would not give the minimum).'
  },
  {
    c: "Google", t: "Max Consecutive Ones III", d: "Medium", f: 38, tp: "Array, Hash Table",
    q: 'Given a binary array nums and an integer k, return the maximum number of consecutive 1s in the array if you can flip at most k 0s.',
    brute: 'Try every subarray, count 0s, return max length with 0-count <= k. O(N^2).',
    opt_hint: 'O(N) Time, Sliding Window',
    optimal: 'Expand right pointer. When a 0 is encountered, decrement k. If k < 0, move left pointer until a 0 is skipped (increment k). Track max window size at each step.',
    space_hint: 'O(1) Space',
    space: 'Only left/right pointer and k counter.',
    followup: 'What is the difference from Max Consecutive Ones II? (II allows flipping at most 1 zero; III generalizes to K zeros, same sliding window approach).'
  },
  {
    c: "Google", t: "Capacity To Ship Packages Within D Days", d: "Medium", f: 38, tp: "Array, Hash Table",
    q: 'Given weights of packages and D days, find the minimum weight capacity of a ship to ship all packages within D days (in order).',
    brute: 'Try every possible capacity from max(weights) to sum(weights). O(N * Sum).',
    opt_hint: 'O(N log Sum) Time, Binary Search on Answer',
    optimal: 'Binary search between max(weights) (minimum possible) and sum(weights) (ship all in 1 day). For each capacity, greedily simulate how many days are needed. If days <= D, try smaller capacity.',
    space_hint: 'O(1) Space',
    space: 'Only pointer and running sum variables.',
    followup: 'Why is the lower bound max(weights)? (The ship must be able to carry at least the heaviest single package).'
  },
  {
    c: "Google", t: "The Earliest Moment When Everyone Become Friends", d: "Medium", f: 38, tp: "Array, Hash Table",
    q: 'There are n people and a list of logs [timestamp, x, y] meaning x and y became friends at that time. Return the earliest time when all people become friends (directly or indirectly).',
    brute: 'After each event, run DFS/BFS to check connectivity. O(E * (V + E)).',
    opt_hint: 'O(E log E) Time, Union-Find',
    optimal: 'Sort logs by timestamp. Apply Union-Find. After each union, check if there is only one connected component (when the number of components drops to 1, return that timestamp).',
    space_hint: 'O(N) Space',
    space: 'Union-Find parent and rank arrays of size N.',
    followup: 'What if they never all become friends? (Return -1 if after processing all logs, the number of connected components is still > 1).'
  },
  {
    c: "Google", t: "Shortest Path in Binary Matrix", d: "Medium", f: 25, tp: "Depth-First Search, Matrix",
    q: 'Given an n x n binary matrix grid, return the length of the shortest clear path. A clear path uses only cells with value 0, connecting top-left to bottom-right, in 8 directions.',
    brute: 'DFS exploring all paths. Exponential.',
    opt_hint: 'O(N^2) Time, BFS',
    optimal: 'BFS from (0,0) if it\'s 0. Explore all 8 directions. Track distance. Return distance when reaching (n-1, n-1). Return -1 if not reachable.',
    space_hint: 'O(N^2) Space',
    space: 'Queue and visited tracking for all N^2 cells.',
    followup: 'Why BFS not DFS? (BFS guarantees the shortest path in an unweighted graph. DFS might find a longer path first).'
  },
  {
    c: "Google", t: "Defanging an IP Address", d: "Easy", f: 12, tp: "Array, Hash Table",
    q: 'Given a valid IPv4 address, return a defanged version where every \'.\' is replaced with \'[.]\'.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, String Replace',
    optimal: 'Python: `return address.replace(\'.\', \'[.]\')`. Or iterate and build a result string character by character.',
    space_hint: 'O(N) Space',
    space: 'Output string is slightly larger than input.',
    followup: 'What if you needed to defang other special chars too? (Use a dictionary mapping of char -> escaped char).'
  },
  {
    c: "Google", t: "Snapshot Array", d: "Medium", f: 12, tp: "Array",
    q: 'Implement a SnapshotArray that supports set(index, val), snap() returning snap_id, and get(index, snap_id) returning the value at that index at that snapshot.',
    brute: 'Copy the entire array on every snap(). O(N) per snap, too slow.',
    opt_hint: 'O(log S) per get, Binary Search on Sparse History',
    optimal: 'For each index, store a list of (snap_id, val) only when the value changes. For get(index, snap_id), binary search the history list for the largest snap_id <= the queried snap_id.',
    space_hint: 'O(S) Space',
    space: 'Only store (snap_id, val) pairs when changes occur, totaling O(total number of set calls) across all snaps.',
    followup: 'Why is this better than copying the array? (If set() is called rarely compared to snap(), this sparse approach uses far less memory).'
  },
  {
    c: "Google", t: "Immediate Food Delivery II", d: "Medium", f: 12, tp: "Array, Hash Table",
    q: 'SQL: Find the percentage of immediate orders in the first orders of all customers, rounded to 2 decimal places. An order is immediate if delivery date equals order date.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, SQL Window Functions / Subquery',
    optimal: 'SQL: `SELECT ROUND(100 * AVG(order_date = customer_pref_delivery_date), 2) AS immediate_percentage FROM Delivery WHERE (customer_id, order_date) IN (SELECT customer_id, MIN(order_date) FROM Delivery GROUP BY customer_id);`',
    space_hint: 'O(N) Space',
    space: 'Subquery scans the table once.',
    followup: 'What does AVG(boolean expression) do in MySQL? (MySQL evaluates boolean as 1/0, so AVG gives the proportion of true values directly).'
  },
  {
    c: "Google", t: "Critical Connections in a Network", d: "Hard", f: 25, tp: "Breadth-First Search, Graph",
    q: 'There are n servers with connections. A critical connection is a connection that, if removed, will make some servers unable to reach some other server. Return all critical connections.',
    brute: 'Remove each edge one by one and check connectivity. O(E * (V + E)).',
    opt_hint: 'O(V + E) Time, Tarjan\'s Bridge-Finding Algorithm',
    optimal: 'DFS with `disc[]` (discovery time) and `low[]` (lowest reachable disc time) arrays. An edge (u, v) is a bridge if `low[v] > disc[u]`, meaning v cannot reach u or its ancestors without this edge.',
    space_hint: 'O(V + E) Space',
    space: 'Storage for adjacency list, disc and low arrays.',
    followup: 'What is an articulation point? (Similar concept: a node whose removal disconnects the graph. Also found using Tarjan\'s algorithm with a slight variation).'
  },
  {
    c: "Google", t: "Unique Number of Occurrences", d: "Easy", f: 25, tp: "Array, Hash Table",
    q: 'Given an array of integers arr, return true if the number of occurrences of each value in the array is unique.',
    brute: 'N/A. Counting is already the approach.',
    opt_hint: 'O(N) Time, HashMap + HashSet',
    optimal: 'Count frequencies using a HashMap. Put all frequency values into a HashSet. If `set.size() == map.size()`, all occurrences are unique.',
    space_hint: 'O(N) Space',
    space: 'HashMap and HashSet each store at most N entries.',
    followup: 'Is there an O(1) space solution? (If values are bounded — sort the frequency array and check for adjacent duplicates in O(N log N) time, O(1) space).'
  },
  {
    c: "Google", t: "Count Square Submatrices with All Ones", d: "Medium", f: 12, tp: "Array, Hash Table",
    q: 'Given a binary matrix, return the total number of square submatrices that contain all 1s.',
    brute: 'For every possible top-left corner and every possible size, check if all ones. O(N^5).',
    opt_hint: 'O(M*N) Time, 2D DP',
    optimal: '`dp[i][j]` = size of the largest square ending at (i,j). If `matrix[i][j] == 1`, `dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1`. Each value also equals the number of squares ending at that cell. Sum all dp values.',
    space_hint: 'O(1) Space',
    space: 'Modify the input matrix in-place as the dp table.',
    followup: 'How is this related to Maximal Square? (Maximal Square finds the largest single square; this problem counts all squares by summing dp values).'
  },
  {
    c: "Google", t: "Replace Employee ID With The Unique Identifier", d: "Easy", f: 12, tp: "Array, Hash Table",
    q: 'SQL: For each user in Employees, show their unique_id from EmployeeUNI if it exists, else null.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, LEFT JOIN',
    optimal: 'SQL: `SELECT u.unique_id, e.name FROM Employees e LEFT JOIN EmployeeUNI u ON e.id = u.id;` — LEFT JOIN ensures all employees appear even without a unique_id.',
    space_hint: 'O(N) Space',
    space: 'Output table is of size N.',
    followup: 'What is the difference between LEFT JOIN and INNER JOIN here? (INNER JOIN would exclude employees without a unique_id. LEFT JOIN preserves all employees and outputs NULL for missing unique_ids).'
  },
  {
    c: "Google", t: "Running Sum of 1d Array", d: "Easy", f: 50, tp: "Array",
    q: 'Given an array nums, return the running sum of nums where runningSum[i] = sum(nums[0]...nums[i]).',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, Prefix Sum',
    optimal: 'Iterate from index 1: `nums[i] += nums[i-1]`. Return modified array.',
    space_hint: 'O(1) Extra Space',
    space: 'In-place modification of the input array.',
    followup: 'How would you compute a range sum from the running sum array? (`sum(l, r) = runningSum[r] - runningSum[l-1]`).'
  },
  {
    c: "Google", t: "Minimum Number of Days to Make m Bouquets", d: "Medium", f: 25, tp: "Array, Hash Table",
    q: 'Given an array bloomDay, you need m bouquets each requiring k adjacent flowers. Return the minimum number of days to make m bouquets, or -1 if impossible.',
    brute: 'Simulate day by day, checking if m bouquets are possible each time. O(max(bloomDay) * N).',
    opt_hint: 'O(N log(max(bloomDay))) Time, Binary Search on Answer',
    optimal: 'Binary search on the number of days. For a given `mid` days, greedily count how many bouquets can be formed (consecutive flowers that bloomed by day `mid`). If >= m, try fewer days.',
    space_hint: 'O(1) Space',
    space: 'Only counting variables and pointers.',
    followup: 'When is it impossible? (If `m * k > n`, there are not enough flowers to ever form m bouquets).'
  },
  {
    c: "Google", t: "Average Time of Process per Machine", d: "Easy", f: 38, tp: "Array, Hash Table",
    q: 'SQL: For each machine, find the average time it takes to complete a process.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, SQL Self Join / GROUP BY',
    optimal: 'SQL: `SELECT machine_id, ROUND(AVG(end_time - start_time), 3) AS processing_time FROM (SELECT machine_id, process_id, MAX(CASE WHEN activity_type=\'end\' THEN timestamp END) - MAX(CASE WHEN activity_type=\'start\' THEN timestamp END) AS time FROM Activity GROUP BY machine_id, process_id) t GROUP BY machine_id;`',
    space_hint: 'O(N) Space',
    space: 'Internal aggregation tables.',
    followup: 'Can you do this with a self-join? (Yes, join the table to itself on machine_id and process_id where one row is start and the other is end, then subtract and average).'
  },
  {
    c: "Google", t: "Merge Strings Alternately", d: "Easy", f: 50, tp: "Array, Hash Table, Sorting, String",
    q: 'You are given two strings word1 and word2. Merge them by adding letters in alternating order, starting with word1. If a string is longer, append the additional letters at the end.',
    brute: 'N/A.',
    opt_hint: 'O(M+N) Time, Two Pointers',
    optimal: 'Use two pointers i, j. While both are valid, append word1[i] then word2[j]. Append the remaining tail of whichever string is longer.',
    space_hint: 'O(M+N) Space',
    space: 'Output string of combined length.',
    followup: 'What if you had 3 strings to interleave? (Use a priority queue or cycle through them round-robin).'
  },
  {
    c: "Google", t: "Frequency of the Most Frequent Element", d: "Medium", f: 25, tp: "Array, Hash Table",
    q: 'The frequency of an element is the number of times it occurs in an array. You can increment any element by 1 in one operation. Return the maximum possible frequency of any element after at most k operations.',
    brute: 'For every element as a target, count operations needed to bring others up to it. O(N^2).',
    opt_hint: 'O(N log N) Time, Sliding Window + Sort',
    optimal: 'Sort the array. Use a sliding window. Expand right, accumulating the cost to bring all elements in the window up to nums[right]. If cost > k (window_size * nums[right] - window_sum > k), shrink from left.',
    space_hint: 'O(log N) Space',
    space: 'Sorting space O(log N). Window tracking is O(1).',
    followup: 'Why sort first? (After sorting, the cheapest elements to bring up to a target are always its immediate left neighbors).'
  },
  {
    c: "Google", t: "Shortest Palindrome", d: "Hard", f: 25, tp: "Hash Table, String",
    q: 'Given a string s, you can insert characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.',
    brute: 'Try adding 0, 1, 2, ... characters to the front until it\'s a palindrome. O(N^2).',
    opt_hint: 'O(N) Time, KMP Failure Function',
    optimal: 'Create string `s + \'#\' + reverse(s)`. Compute the KMP failure function on it. The last value of the failure function gives the longest palindrome prefix of s. Prepend the remaining suffix reversed.',
    space_hint: 'O(N) Space',
    space: 'O(N) for the combined string and failure function array.',
    followup: 'What does the \'#\' separator do? (Prevents the failure function from crossing between the original and reversed string, ensuring matches are true prefixes of s).'
  },
  {
    c: "Google", t: "The Skyline Problem", d: "Hard", f: 12, tp: "Array, Hash Table",
    q: 'Given the locations and heights of buildings, return the skyline formed by these buildings as a list of key points.',
    brute: 'For every x coordinate, determine the max height. O(N * max_x).',
    opt_hint: 'O(N log N) Time, Max Heap with Events',
    optimal: 'Create events: building start as (x, -height) and end as (x, height). Sort events. Process with a Max Heap of active heights. When the max height changes, record a skyline key point.',
    space_hint: 'O(N) Space',
    space: 'The heap and event list store O(N) entries.',
    followup: 'Why negate heights for start events? (So that sorting puts starts before ends at the same x, and higher buildings are processed first within starts).'
  },
  {
    c: "Google", t: "Summary Ranges", d: "Easy", f: 25, tp: "Array",
    q: 'Given a sorted unique integer array nums, return the smallest sorted list of ranges that cover all numbers in the array exactly.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, Linear Scan',
    optimal: 'Use a start pointer. Scan while consecutive (nums[i+1] == nums[i]+1). When a gap is found, record the range [start, nums[i]] and set new start = nums[i+1].',
    space_hint: 'O(N) Space',
    space: 'Output list of ranges.',
    followup: 'What if the input is not sorted? (Sort it first in O(N log N), then apply the same logic).'
  },
  {
    c: "Google", t: "Search a 2D Matrix II", d: "Medium", f: 25, tp: "Binary Search, Depth-First Search, Matrix",
    q: 'Write an efficient algorithm to search for a target value in an m x n matrix where each row is sorted left to right and each column is sorted top to bottom.',
    brute: 'Check all M*N elements. Time O(M*N).',
    opt_hint: 'O(M+N) Time, Start from Top-Right',
    optimal: 'Start at the top-right corner. If current == target, return true. If current > target, move left. If current < target, move down. Exit when out of bounds.',
    space_hint: 'O(1) Space',
    space: 'Only two pointer variables.',
    followup: 'Why top-right and not top-left? (Top-right has a unique property: moving left decreases value, moving down increases value — giving a clear binary decision at every step).'
  },
  {
    c: "Google", t: "Group Shifted Strings", d: "Medium", f: 38, tp: "Hash Table, String",
    q: 'We can shift a string by adding 1 to each character. Group all strings that belong to the same shifting sequence.',
    brute: 'For each string, generate its entire shift sequence and compare. O(N^2 * L).',
    opt_hint: 'O(N * L) Time, Canonical Form HashMap',
    optimal: 'For each string, compute its canonical form: the sequence of differences between consecutive characters (mod 26). Use this as a HashMap key. Strings with the same canonical form are in the same group.',
    space_hint: 'O(N * L) Space',
    space: 'HashMap stores all canonical forms and grouped strings.',
    followup: 'What does mod 26 handle? (Wrap-around shifts, e.g., \'z\' shifted by 1 becomes \'a\').'
  },
  {
    c: "Google", t: "Serialize and Deserialize Binary Tree", d: "Hard", f: 12, tp: "Binary Tree, Depth-First Search, Tree",
    q: 'Design an algorithm to serialize and deserialize a binary tree. Serialization converts the tree to a string; deserialization recovers the tree from the string.',
    brute: 'N/A. Both operations require full traversal.',
    opt_hint: 'O(N) Time, BFS or Preorder DFS with null markers',
    optimal: 'Serialize: BFS level-order, using \'null\' for missing children. Deserialize: BFS again, reading values from the serialized list and assigning children left/right in order.',
    space_hint: 'O(N) Space',
    space: 'Output string and queue both O(N).',
    followup: 'Can you do it with preorder DFS? (Yes — serialize with preorder + null markers; deserialize by recursively consuming the list left-to-right).'
  },
  {
    c: "Google", t: "Design Hit Counter", d: "Medium", f: 25, tp: "Array, Hash Table",
    q: 'Design a hit counter which counts the number of hits received in the past 5 minutes (300 seconds).',
    brute: 'Store every timestamp and count. Can use unbounded memory.',
    opt_hint: 'O(1) Time, Circular Buffer of Size 300',
    optimal: 'Use two arrays of size 300: `times[300]` and `hits[300]`. On `hit(t)`: `idx = t % 300`. If `times[idx] == t`, increment `hits[idx]`. Else reset. On `getHits(t)`: sum all `hits[i]` where `times[i] > t - 300`.',
    space_hint: 'O(1) Space',
    space: 'Fixed-size arrays of 300 elements regardless of traffic.',
    followup: 'What if the window was 5 hours instead of 5 minutes? (Scale the array size to 18000 for seconds, or use a sliding window deque for arbitrary windows).'
  },
  {
    c: "Google", t: "Combination Sum IV", d: "Medium", f: 25, tp: "Array, Backtracking",
    q: 'Given an array of distinct integers nums and a target, return the number of possible combinations that add up to target. Order matters (different orderings count as different combinations).',
    brute: 'Recursive DFS with all permutations. Exponential.',
    opt_hint: 'O(target * N) Time, DP',
    optimal: 'DP where `dp[i]` = number of ways to make amount i. For each amount from 1 to target, try adding each number in nums: `dp[i] += dp[i - num]` for all `num <= i`.',
    space_hint: 'O(target) Space',
    space: '1D DP array of size target + 1.',
    followup: 'How is this different from Coin Change II? (Coin Change II is combinations (order doesn\'t matter); this is permutations (order matters). The loop order in DP is swapped).'
  },
  {
    c: "Google", t: "Find the Difference", d: "Easy", f: 25, tp: "Binary Search",
    q: 'Given two strings s and t where t is generated by shuffling s and adding one extra character. Find the extra character added to t.',
    brute: 'Sort both strings and compare character by character. O(N log N).',
    opt_hint: 'O(N) Time, XOR or Sum Difference',
    optimal: 'XOR all characters of s and t together. Since all paired characters cancel out (a XOR a = 0), the result is the extra character.',
    space_hint: 'O(1) Space',
    space: 'Single XOR accumulator variable.',
    followup: 'Can you use sum difference? (Yes: sum of ASCII values of all chars in t minus sum of all chars in s = ASCII of the extra char).'
  },
  {
    c: "Google", t: "Add Strings", d: "Easy", f: 12, tp: "Hash Table, String",
    q: 'Given two non-negative integers num1 and num2 represented as strings, return the sum of num1 and num2 as a string. You must not convert inputs to integers directly.',
    brute: 'Convert to integers, add, convert back. Fails for very large numbers.',
    opt_hint: 'O(max(M,N)) Time, School Addition',
    optimal: 'Use two pointers starting from the end of both strings. Add digits with a carry. Prepend the result character. Continue until both strings and carry are exhausted.',
    space_hint: 'O(max(M,N)) Space',
    space: 'Output string of max(M,N) + 1 length.',
    followup: 'How would you multiply two number strings? (Multiply Strings — uses a result array and school multiplication algorithm).'
  },
  {
    c: "Google", t: "Find All Numbers Disappeared in an Array", d: "Easy", f: 50, tp: "Array, Binary Search",
    q: 'Given an array nums of n integers where nums[i] is in [1, n], return all integers in [1, n] that do not appear in nums.',
    brute: 'Use a HashSet of all seen numbers, then check [1, n]. O(N) time and space.',
    opt_hint: 'O(N) Time, In-place Index Marking',
    optimal: 'For each number, mark index `abs(num) - 1` as negative. After the pass, indices that are still positive correspond to missing numbers.',
    space_hint: 'O(1) Extra Space',
    space: 'Marks are done in-place on the input array.',
    followup: 'Does modifying the input array violate O(1) space? (In interviews, if the problem allows it, this is considered O(1) extra space. Otherwise use a separate array).'
  },
  {
    c: "Google", t: "Next Greater Element II", d: "Medium", f: 25, tp: "Array, Hash Table",
    q: 'Given a circular integer array nums, return the next greater number for every element. The next greater number of a number x is the first greater number to its traversal-order next in the array.',
    brute: 'For every element, scan forward (with wrap-around) until finding a greater element. O(N^2).',
    opt_hint: 'O(N) Time, Monotonic Stack with Double Pass',
    optimal: 'Iterate `2*N` times (simulating the circular array using `i % N`). Maintain a monotonic decreasing stack of indices. When a greater element is found, pop and record answer for those indices.',
    space_hint: 'O(N) Space',
    space: 'Stack holds at most N elements.',
    followup: 'How does iterating 2*N handle the circular wrap? (The second pass allows elements near the end to look at elements near the beginning, simulating circular traversal).'
  },
  {
    c: "Google", t: "Reverse String II", d: "Easy", f: 25, tp: "Hash Table, String",
    q: 'Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, Chunked Reversal',
    optimal: 'Convert string to a list. Step through indices by 2k. For each step i, reverse the slice `s[i:i+k]` in place.',
    space_hint: 'O(N) Space',
    space: 'List representation of the string is O(N).',
    followup: 'What if there are fewer than k characters left at the end? (The problem says reverse all remaining characters — handle with `min(i+k, len(s))` as the end index).'
  },
  {
    c: "Google", t: "Swap Adjacent in LR String", d: "Medium", f: 25, tp: "Hash Table, String",
    q: 'In a string of \'L\', \'R\', \'X\': L can move left past X, R can move right past X. They cannot pass each other. Given start and end strings, determine if start can be transformed into end.',
    brute: 'BFS all possible swaps. Exponential.',
    opt_hint: 'O(N) Time, Two Pointers with Invariant Checking',
    optimal: 'After removing all \'X\'s, both strings must have L\'s and R\'s in the same relative order. Then two-pointer check: L in start can only move left (its index must be >= its index in end). R can only move right.',
    space_hint: 'O(N) Space',
    space: 'Filtered character lists of size N.',
    followup: 'What are the two key invariants? (1) L/R sequences must match. (2) Each L must have the same or higher index in start, each R the same or lower index in start).'
  },
  {
    c: "Google", t: "Find Eventual Safe States", d: "Medium", f: 12, tp: "Binary Search",
    q: 'A node is safe if every path starting from that node leads to a terminal node (no outgoing edges). Return all safe nodes in sorted order.',
    brute: 'DFS from every node, tracking if it leads to a cycle. O(V * (V+E)).',
    opt_hint: 'O(V + E) Time, DFS with 3-state Coloring',
    optimal: 'DFS with states: 0 = unvisited, 1 = visiting (in current path), 2 = safe. If a node is visited (state=1), it\'s in a cycle — return unsafe. If all neighbors are safe, mark node as safe (state=2).',
    space_hint: 'O(V) Space',
    space: 'State array and recursion stack both O(V).',
    followup: 'Can you solve this with topological sort? (Yes — reverse all edges, find all nodes reachable from terminal nodes via topological sort / BFS from nodes with in-degree 0 in reversed graph).'
  },
  {
    c: "Google", t: "Peak Index in a Mountain Array", d: "Medium", f: 25, tp: "Array, Binary Search",
    q: 'An array is mountain-shaped: arr[0] < arr[1] < ... < arr[peak] > arr[peak+1] > ... > arr[n-1]. Find the peak index.',
    brute: 'Linear scan to find where arr[i] > arr[i+1]. O(N).',
    opt_hint: 'O(log N) Time, Binary Search',
    optimal: 'Binary search. If `arr[mid] < arr[mid+1]`, peak is to the right (left = mid+1). Else peak is to the left or at mid (right = mid).',
    space_hint: 'O(1) Space',
    space: 'Only pointer variables.',
    followup: 'What if the array has multiple peaks? (The problem guarantees exactly one peak. For multiple peaks, binary search wouldn\'t work and you\'d need a different approach).'
  },
  {
    c: "Google", t: "Transpose Matrix", d: "Easy", f: 25, tp: "Depth-First Search, Matrix",
    q: 'Given a 2D integer array matrix, return the transpose of matrix. The transpose swaps the matrix\'s row and column indices.',
    brute: 'N/A.',
    opt_hint: 'O(M*N) Time, Direct Index Swap',
    optimal: 'Create a result matrix of size N x M. Set `result[j][i] = matrix[i][j]` for all i, j.',
    space_hint: 'O(M*N) Space',
    space: 'Output matrix is the transposed grid.',
    followup: 'Can you do it in-place for square matrices? (Yes, swap `matrix[i][j]` with `matrix[j][i]` for all i < j).'
  },
  {
    c: "Google", t: "Minimum Number of Increments on Subarrays to Form a Target Array", d: "Hard", f: 38, tp: "Array, Sliding Window, String",
    q: 'Given target, initially you have an array of all zeros. In one operation, you can increment any subarray by 1. Return the minimum number of operations to form the target.',
    brute: 'Simulate operations greedily. Difficult to minimize directly.',
    opt_hint: 'O(N) Time, Greedy Height Difference',
    optimal: 'The answer is `target[0] + sum(max(0, target[i] - target[i-1]) for i in 1..n-1)`. Each \'uphill\' in the target requires new independent increments, while \'downhills\' are free (existing operations already cover them).',
    space_hint: 'O(1) Space',
    space: 'Only a running sum variable.',
    followup: 'Why do downhills cost nothing? (Operations on subarrays carry over — if you already have operations raising the previous index, they naturally extend to the current index at no extra cost).'
  },
  {
    c: "Google", t: "Minimum Number of Operations to Move All Balls to Each Box", d: "Medium", f: 12, tp: "Array, Hash Table",
    q: 'There are n boxes in a row. Each box has a ball (1) or is empty (0). For each box i, find the minimum number of operations to move all balls to box i.',
    brute: 'For every box, simulate moving all balls to it. O(N^2).',
    opt_hint: 'O(N) Time, Two-Pass Prefix',
    optimal: 'Pass 1 (left to right): accumulate ops and ball count from the left. Pass 2 (right to left): accumulate ops and ball count from the right. Sum both passes into the answer array.',
    space_hint: 'O(1) Extra Space',
    space: 'Only running sums needed (not counting output array).',
    followup: 'Why does this give the exact number of operations? (Each ball contributes 1 operation per box it must travel. Running sums accumulate these distances efficiently).'
  },
  {
    c: "Google", t: "Consecutive Numbers", d: "Medium", f: 12, tp: "Array, Hash Table",
    q: 'SQL: Find all numbers that appear at least three times consecutively.',
    brute: 'Load data and scan in application code.',
    opt_hint: 'O(N) Time, SQL Self Join',
    optimal: 'SQL: `SELECT DISTINCT l1.Num AS ConsecutiveNums FROM Logs l1 JOIN Logs l2 ON l1.id = l2.id - 1 JOIN Logs l3 ON l1.id = l3.id - 2 WHERE l1.Num = l2.Num AND l2.Num = l3.Num;`',
    space_hint: 'O(N) Space',
    space: 'Internal join memory.',
    followup: 'How with window functions? (`LAG()` and `LEAD()` functions can fetch adjacent row values without a self-join, often more readable).'
  },
  {
    c: "Google", t: "Sort an Array", d: "Medium", f: 50, tp: "Array, Sorting",
    q: 'Given an array of integers nums, sort the array in ascending order and return it. You must not use any built-in sort functions. Solve it with O(n log n) time complexity.',
    brute: 'Bubble Sort, Insertion Sort, Selection Sort. All O(N^2).',
    opt_hint: 'O(N log N) Time, Merge Sort or Heap Sort',
    optimal: 'Merge Sort: divide array into halves, recursively sort, merge. Or Heap Sort: build a max heap in O(N), then extract max N times in O(N log N).',
    space_hint: 'O(log N) Space',
    space: 'Heap sort is O(1) extra space. Merge sort is O(N) for the temp array (or O(log N) with in-place merging).',
    followup: 'When would you use Heap Sort vs Merge Sort? (Heap Sort has O(1) space. Merge Sort is stable and has better cache performance. Prefer Merge Sort unless memory is critical).'
  },
  {
    c: "Google", t: "Longest Common Subsequence", d: "Medium", f: 38, tp: "Dynamic Programming",
    q: 'Given two strings text1 and text2, return the length of their longest common subsequence. A subsequence does not need to be contiguous.',
    brute: 'Generate all subsequences of both strings and find the longest common one. O(2^(M+N)).',
    opt_hint: 'O(M*N) Time, 2D Dynamic Programming',
    optimal: '`dp[i][j]` = LCS of text1[:i] and text2[:j]. If `text1[i-1] == text2[j-1]`, `dp[i][j] = dp[i-1][j-1] + 1`. Else `dp[i][j] = max(dp[i-1][j], dp[i][j-1])`.',
    space_hint: 'O(min(M,N)) Space',
    space: 'Only the previous row of the DP table is needed, reducing space from O(M*N) to O(min(M,N)).',
    followup: 'How to reconstruct the actual LCS string? (Backtrack through the dp table following the decisions that led to each cell\'s value).'
  },
  {
    c: "Google", t: "Check if Array Is Sorted and Rotated", d: "Easy", f: 38, tp: "Array, Binary Search, Sorting",
    q: 'Given an array nums, return true if the array was originally sorted in non-decreasing order and then rotated some number of positions. An array with no rotation also counts.',
    brute: 'Try every rotation and check if sorted. O(N^2).',
    opt_hint: 'O(N) Time, Count Inversions',
    optimal: 'Count the number of \'drops\' where `nums[i] > nums[i+1]`. Also check `nums[n-1] > nums[0]`. If total drops <= 1, it is a valid sorted rotated array.',
    space_hint: 'O(1) Space',
    space: 'Single counter variable.',
    followup: 'What if there are duplicates? (The condition changes slightly — `nums[i] > nums[i+1]` is still the check, but the problem must specify handling).'
  },
  {
    c: "Google", t: "Is Subsequence", d: "Easy", f: 25, tp: "Dynamic Programming",
    q: 'Given two strings s and t, return true if s is a subsequence of t. A subsequence maintains relative order but not necessarily contiguous characters.',
    brute: 'N/A. Two-pointer is already optimal.',
    opt_hint: 'O(N) Time, Two Pointers',
    optimal: 'Use pointer i for s and j for t. When `s[i] == t[j]`, increment i. Always increment j. Return true if i reaches len(s).',
    space_hint: 'O(1) Space',
    space: 'Two integer pointers.',
    followup: 'What if you have many queries of s against the same t? (Preprocess t: for each character at each position, store the next occurrence of every letter. Then each query runs in O(|s| log |t|) using binary search).'
  },
  {
    c: "Google", t: "Fizz Buzz", d: "Easy", f: 38, tp: "Array, Hash Table",
    q: 'Given an integer n, for i from 1 to n: output \'FizzBuzz\' if divisible by 3 and 5, \'Fizz\' if divisible by 3, \'Buzz\' if divisible by 5, else output the number as a string.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, If-Else or String Concatenation',
    optimal: 'Iterate 1 to n. For each number, build result string: append \'Fizz\' if i%3==0, append \'Buzz\' if i%5==0. If result is empty, use str(i).',
    space_hint: 'O(1) Space',
    space: 'Constant space per iteration, O(N) for the output array.',
    followup: 'How to handle arbitrary divisors? (Generalize using a list of (divisor, label) pairs and the concatenation approach, avoiding a chain of if-elses).'
  },
  {
    c: "Google", t: "Counter", d: "Easy", f: 38, tp: "Array, Hash Table",
    q: 'Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called.',
    brute: 'N/A.',
    opt_hint: 'O(1) Time, Closure',
    optimal: 'Use a closure in JavaScript. Return a function that increments and returns a local variable initialized to n. In Python, use a generator or a class.',
    space_hint: 'O(1) Space',
    space: 'Only stores the current counter value.',
    followup: 'How to implement this using a generator? (yield n; while True: n+=1; yield n).'
  },
  {
    c: "Google", t: "Excel Sheet Column Title", d: "Easy", f: 25, tp: "Array, Hash Table",
    q: 'Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet (1->A, 26->Z, 27->AA).',
    brute: 'N/A.',
    opt_hint: 'O(log N) Time, Base-26 Conversion',
    optimal: 'While columnNumber > 0: decrement by 1 (to make it 0-indexed), take mod 26 to get the current character, prepend `chr(ord(\'A\') + remainder)`, divide by 26. Repeat.',
    space_hint: 'O(log N) Space',
    space: 'Output string length is O(log26 N).',
    followup: 'Why decrement by 1 before mod? (Because Excel is 1-indexed: \'A\'=1, not 0. Without decrement, \'Z\'=26 would map to 0 instead of \'Z\').'
  },
  {
    c: "Google", t: "Greatest Common Divisor of Strings", d: "Easy", f: 38, tp: "Hash Table, String",
    q: 'For two strings s and t, we say t divides s if s = t + t + ... + t. Given strings str1 and str2, return the largest string x such that x divides both str1 and str2.',
    brute: 'Try every prefix of the shorter string as a candidate divisor. O(min(M,N) * (M+N)).',
    opt_hint: 'O(M+N) Time, GCD of Lengths',
    optimal: 'If `str1 + str2 != str2 + str1`, no common divisor exists. Otherwise, the answer is `str1[:gcd(len(str1), len(str2))]`.',
    space_hint: 'O(M+N) Space',
    space: 'Concatenated strings for the equality check.',
    followup: 'Why does `str1 + str2 == str2 + str1` imply a common divisor? (If the concatenations are equal, both strings are made of the same repeating unit — provable via string periodicity theory).'
  },
  {
    c: "Google", t: "Substring with Concatenation of All Words", d: "Hard", f: 12, tp: "Binary Tree, Depth-First Search, Hash Table, Sliding Window, String, Tree",
    q: 'You are given a string s and an array of strings words of the same length. Return all starting indices of substring(s) in s that is a concatenation of each word in words exactly once.',
    brute: 'Check every possible starting position in s. For each, extract a substring and check if it\'s a valid concatenation. O(N * M * K).',
    opt_hint: 'O(N * K) Time, Sliding Window + HashMap',
    optimal: 'Slide a window of size (num_words * word_len). Use a HashMap to track word counts. Iterate through s with word_len as step size. Move left pointer when a word exceeds count.',
    space_hint: 'O(M * K) Space',
    space: 'HashMap to store the word counts.',
    followup: 'What if words have different lengths? (Much more complex, likely requires a Trie or Aho-Corasick algorithm).'
  },
  {
    c: "Google", t: "Concatenation of Array", d: "Easy", f: 62, tp: "Array",
    q: 'Given an integer array nums, return an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, Linear Pass',
    optimal: 'Initialize an array of size 2n. Copy nums into the first n indices and again into the next n indices. Or simply `return nums + nums` in Python.',
    space_hint: 'O(N) Space',
    space: 'Output array is of size 2n.',
    followup: 'Can you do it in-place? (No, the result array is twice as long as the input).'
  },
  {
    c: "Google", t: "Combine Two Tables", d: "Easy", f: 50, tp: "Array, Hash Table",
    q: 'SQL: Write a solution to report the first name, last name, city, and state of each person in the Person table. If the address of a personId is not present in the Address table, report null instead.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, LEFT JOIN',
    optimal: 'SQL: `SELECT p.firstName, p.lastName, a.city, a.state FROM Person p LEFT JOIN Address a ON p.personId = a.personId;`',
    space_hint: 'O(N) Space',
    space: 'Database join space.',
    followup: 'Difference between LEFT JOIN and INNER JOIN? (INNER JOIN would exclude persons without an address).'
  },
  {
    c: "Google", t: "Vertical Order Traversal of a Binary Tree", d: "Hard", f: 25, tp: "Binary Tree, Depth-First Search, Tree",
    q: 'Given the root of a binary tree, return the vertical order traversal of its nodes\' values. If two nodes are at the same (row, col), sort them by value.',
    brute: 'Standard BFS, sorting the entire list of nodes by column and row at the end. O(N log N).',
    opt_hint: 'O(N log N) Time, BFS + Sorting by coordinates',
    optimal: 'BFS while tracking (row, col). Group nodes by column in a TreeMap. For each column, sort by row index and then by value.',
    space_hint: 'O(N) Space',
    space: 'Mapping all nodes to their coordinates.',
    followup: 'How to handle vertical order in O(N) if sorting is not needed for same-coordinate nodes? (LC 314 — use simple BFS with min/max column tracking).'
  },
  {
    c: "Google", t: "Sum of Two Integers", d: "Medium", f: 25, tp: "Array",
    q: 'Given two integers a and b, return the sum of the two integers without using the operators + and -.',
    brute: 'N/A.',
    opt_hint: 'O(1) Time, Bit Manipulation',
    optimal: 'While b != 0: `carry = a & b`, `a = a ^ b`, `b = carry << 1`. (Note: Python requires masking for 32-bit overflow).',
    space_hint: 'O(1) Space',
    space: 'Uses only bitwise operations on local variables.',
    followup: 'How to handle negative numbers in Python? (Mask with 0xffffffff and check sign bit at the end).'
  },
  {
    c: "Google", t: "Binary Subarrays With Sum", d: "Medium", f: 25, tp: "Array, Sliding Window, String",
    q: 'Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum equal to goal.',
    brute: 'Check every subarray sum. Time O(N^2).',
    opt_hint: 'O(N) Time, Prefix Sum + HashMap',
    optimal: 'Track running prefix sum. `count[sum] += 1`. For each index, `total += count[sum - goal]`. (Alternatively, use Sliding Window `atMost(goal) - atMost(goal-1)`).',
    space_hint: 'O(N) Space',
    space: 'HashMap for prefix sums.',
    followup: 'Why sliding window needs `atMost(goal) - atMost(goal-1)`? (Because the sum is not strictly increasing with just 0s and 1s, it\'s monotonically non-decreasing, so atMost is easier to calculate).'
  },
  {
    c: "Google", t: "Majority Element II", d: "Medium", f: 25, tp: "Array",
    q: 'Given an integer array of size n, find all elements that appear more than floor(n / 3) times.',
    brute: 'Count frequencies with a HashMap. O(N) time and space.',
    opt_hint: 'O(N) Time, Boyer-Moore (2 candidates)',
    optimal: 'Maintain two candidates and two counters. Iterate: if matches cand1, count1++; else if cand2, count2++; else if count1==0, cand1=num; else if count2==0, cand2=num; else decrement both. Verify both candidates at the end.',
    space_hint: 'O(1) Space',
    space: 'Only two candidates and two counters.',
    followup: 'Can there be more than 2 such elements? (No, because 3 * (n/3 + 1) > n).'
  },
  {
    c: "Google", t: "Find Leaves of Binary Tree", d: "Medium", f: 12, tp: "Binary Search, Binary Tree, Depth-First Search, Tree",
    q: 'Given the root of a binary tree, collect a tree\'s nodes as if you were doing this: Collect and remove all leaves, repeat until the tree is empty.',
    brute: 'Repeatedly traverse and remove leaves. O(N^2) if skewed.',
    opt_hint: 'O(N) Time, Post-order Height',
    optimal: 'Post-order DFS. Calculate `height = 1 + max(dfs(left), dfs(right))`. Use `height` as the index in the result list and append current node\'s value. Root has max height.',
    space_hint: 'O(N) Space',
    space: 'Output list + recursion stack.',
    followup: 'Why use height instead of depth? (Height counts from the bottom, matching the \'removing leaves\' layers correctly).'
  },
  {
    c: "Google", t: "Increasing Triplet Subsequence", d: "Medium", f: 25, tp: "Dynamic Programming",
    q: 'Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k].',
    brute: 'Check all triplets (i, j, k). O(N^3).',
    opt_hint: 'O(N) Time, Two Thresholds',
    optimal: 'Maintain two variables `first` and `second` initialized to infinity. Iterate: if `num <= first`, `first = num`; else if `num <= second`, `second = num`; else (num > second), return true.',
    space_hint: 'O(1) Space',
    space: 'Two variables.',
    followup: 'Does `first` appearing after `second` break the order? (No, because if we found a `second`, there was *some* `first` before it that was smaller than it. Even if `first` is updated later to a smaller value, the old `first < second` relationship still holds the validity).'
  },
  {
    c: "Google", t: "Next Greater Element I", d: "Easy", f: 25, tp: "Array, Hash Table",
    q: 'Given two arrays nums1 and nums2 where nums1 is a subset of nums2, find the next greater element for each value in nums1 as it exists in nums2.',
    brute: 'For each element in nums1, find its index in nums2 and scan forward. O(M * N).',
    opt_hint: 'O(N) Time, Monotonic Stack + HashMap',
    optimal: 'Process nums2 with a monotonic decreasing stack. When a greater element is found, pop and map `popped_val -> current_val` in a HashMap. Then iterate nums1 and fetch results from map.',
    space_hint: 'O(N) Space',
    space: 'HashMap and stack storage for nums2.',
    followup: 'What if nums1 contains duplicates? (Problem states nums1 and nums2 are unique, simplifying the mapping).'
  },
  {
    c: "Google", t: "Remove Duplicates from Sorted List", d: "Easy", f: 38, tp: "Array, Linked List, Sorting, Two Pointers",
    q: 'Given the head of a sorted linked list, delete all duplicates such that each element appears only once.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, Single Pass',
    optimal: 'Iterate with `curr`. If `curr.val == curr.next.val`, set `curr.next = curr.next.next`. Else, move `curr = curr.next`.',
    space_hint: 'O(1) Space',
    space: 'In-place modification.',
    followup: 'How about removing ALL nodes that have duplicates? (LC 82 — use a dummy node and a loop to skip the entire duplicate group).'
  },
  {
    c: "Google", t: "First Bad Version", d: "Easy", f: 25, tp: "Array, Hash Table",
    q: 'You have n versions [1, 2, ..., n] and you want to find out the first bad one which causes all the following ones to be bad. You are given an API isBadVersion(version).',
    brute: 'Linear scan 1 to n. O(N) calls to API.',
    opt_hint: 'O(log N) Time, Binary Search',
    optimal: 'Binary search between 1 and n. If `isBadVersion(mid)` is true, search left (right = mid). Else search right (left = mid + 1).',
    space_hint: 'O(1) Space',
    space: 'Only two pointers.',
    followup: 'Why `right = mid` and not `right = mid - 1`? (Because `mid` could be the first bad version, so we must keep it in the range).'
  },
  {
    c: "Google", t: "Rotate String", d: "Easy", f: 25, tp: "Hash Table, String",
    q: 'Given two strings s and goal, return true if s can become goal after some number of shifts on s.',
    brute: 'Try all N rotations of s. O(N^2).',
    opt_hint: 'O(N) Time, Substring Search',
    optimal: 'If `len(s) != len(goal)`, return false. Otherwise, return `goal in (s + s)`. All possible rotations are substrings of `s + s`.',
    space_hint: 'O(N) Space',
    space: 'Space for `s + s` concatenation.',
    followup: 'How to make the substring search O(N)? (Use KMP or Rabin-Karp instead of standard string search).'
  },
  {
    c: "Google", t: "Non-overlapping Intervals", d: "Medium", f: 12, tp: "Array, Sorting",
    q: 'Given an array of intervals, return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.',
    brute: 'Try all 2^N combinations and find the longest non-overlapping set.',
    opt_hint: 'O(N log N) Time, Greedy by End Time',
    optimal: 'Sort intervals by end time. Pick the first interval. For subsequent intervals, if it starts after the previous ends, pick it and update `end`. Total picked is the max possible non-overlapping set. Return `total_intervals - picked`.',
    space_hint: 'O(log N) Space',
    space: 'Sorting space.',
    followup: 'Why sort by end time instead of start time? (Greedily picking the one that ends earliest leaves the most room for future intervals).'
  },
  {
    c: "Google", t: "All Nodes Distance K in Binary Tree", d: "Medium", f: 12, tp: "Binary Tree, Depth-First Search, Linked List, Tree, Two Pointers",
    q: 'Given the root of a binary tree, a target node, and an integer k, return all nodes that have a distance k from target.',
    brute: 'Calculate distances using DFS from root for every node. O(N^2).',
    opt_hint: 'O(N) Time, Parent Mapping + BFS',
    optimal: '1. DFS to map each node to its parent. 2. BFS starting from `target` node, treating the tree as an undirected graph (visit left, right, and parent). Stop at level K.',
    space_hint: 'O(N) Space',
    space: 'Parent map + BFS queue + visited set.',
    followup: 'Can you do it without a parent map? (Yes — use a recursive DFS that returns distance to target, then search children of nodes along the path at distance K-dist).'
  },
  {
    c: "Google", t: "Search Suggestions System", d: "Medium", f: 12, tp: "Binary Search",
    q: 'Given a list of products and a searchWord. After each character of searchWord is typed, return the top 3 lexicographical products that start with the prefix.',
    brute: 'Filter the entire list after each character and sort. O(N log N * L).',
    opt_hint: 'O(N log N + L log N) Time, Sorting + Binary Search',
    optimal: 'Sort the products. For each prefix, use binary search (`bisect_left`) to find the first product. Take the next 3 and check if they still match the prefix.',
    space_hint: 'O(N) Space',
    space: 'Storage for sorted products + output list.',
    followup: 'How about a Trie? (Insert all into Trie. Each node stores top 3 products. Query is O(L) but consumes more memory).'
  },
  {
    c: "Google", t: "Odd Even Linked List", d: "Medium", f: 25, tp: "Linked List, Two Pointers",
    q: 'Given the head of a singly linked list, group all nodes with odd indices together followed by the nodes with even indices.',
    brute: 'Copy into two arrays (odd/even) and rebuild. O(N) space.',
    opt_hint: 'O(N) Time, Two Pointers',
    optimal: 'Maintain `odd` and `even` pointers. `odd.next = even.next`, `odd = odd.next`, `even.next = odd.next`, `even = even.next`. Link `odd_tail.next = even_head` at the end.',
    space_hint: 'O(1) Space',
    space: 'In-place pointer manipulation.',
    followup: 'What is the boundary condition? (Stop when `even` or `even.next` is null).'
  },
  {
    c: "Google", t: "Product Price at a Given Date", d: "Medium", f: 12, tp: "Array",
    q: 'SQL: Find the prices of all products on \'2019-08-16\'. Assume the price of all products before any change is 10.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, SQL Subquery + UNION',
    optimal: '1. Find products with changes before/on date: `SELECT id, price FROM Products WHERE (id, change_date) IN (SELECT id, MAX(change_date) FROM Products WHERE change_date <= \'2019-08-16\' GROUP BY id)`. 2. UNION with products having NO changes before date (default 10).',
    space_hint: 'O(N) Space',
    space: 'Internal DB storage for result set.',
    followup: 'How to handle products with multiple changes on the same day? (Usually `MAX(change_date)` is enough, but if multiple per day exist, a `MAX(price)` or `LIMIT 1` subquery might be needed).'
  },
  {
    c: "Google", t: "Confirmation Rate", d: "Medium", f: 25, tp: "Array, Hash Table",
    q: 'SQL: Find the confirmation rate of each user (confirmed / total). Round to 2 decimal places.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, LEFT JOIN + IFNULL/AVG',
    optimal: 'SQL: `SELECT s.user_id, ROUND(IFNULL(AVG(action=\'confirmed\'), 0), 2) AS confirmation_rate FROM Signups s LEFT JOIN Confirmations c ON s.user_id = c.user_id GROUP BY s.user_id;`',
    space_hint: 'O(N) Space',
    space: 'Join space.',
    followup: 'Why use AVG(action=\'confirmed\')? (MySQL evaluates the boolean as 1 or 0, so the average directly gives the rate).'
  },
  {
    c: "Google", t: "Number of 1 Bits", d: "Easy", f: 12, tp: "Array, Hash Table",
    q: 'Write a function that takes an unsigned integer and returns the number of \'1\' bits it has (also known as the Hamming weight).',
    brute: 'Loop 32 times, shifting and checking the last bit. O(log N).',
    opt_hint: 'O(K) Time, Kernighan\'s Algorithm',
    optimal: 'While n != 0: `n = n & (n - 1)`, `count++`. This trick clears the lowest set bit in each iteration. (K = number of set bits).',
    space_hint: 'O(1) Space',
    space: 'Single counter.',
    followup: 'How to do this for 64-bit integers? (Same logic, or use built-in `popcount` instructions).'
  },
  {
    c: "Google", t: "Valid Palindrome II", d: "Easy", f: 12, tp: "Hash Table, String",
    q: 'Given a string s, return true if s can be a palindrome after deleting at most one character from it.',
    brute: 'Delete each character one by one and check if result is palindrome. O(N^2).',
    opt_hint: 'O(N) Time, Two Pointers',
    optimal: 'Standard palindrome two-pointer. On mismatch at (i, j), check if `isPal(s[i+1:j+1])` OR `isPal(s[i:j])`. If either is true, return true.',
    space_hint: 'O(1) Space',
    space: 'Constant extra space (not counting substring creation in Python, which could be O(N) but can be done via pointers for O(1)).',
    followup: 'What if you can delete K characters? (Use DP or recursion with memoization, O(N*K)).'
  },
  {
    c: "Google", t: "Article Views I", d: "Easy", f: 25, tp: "Array, Hash Table",
    q: 'SQL: Find all the authors that viewed at least one of their own articles. Return the result table sorted by id in ascending order.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, SQL DISTINCT',
    optimal: 'SQL: `SELECT DISTINCT author_id AS id FROM Views WHERE author_id = viewer_id ORDER BY id;`',
    space_hint: 'O(N) Space',
    space: 'Sorting space.',
    followup: 'Why use DISTINCT? (An author might view multiple of their own articles, but we only need to list them once).'
  },
  {
    c: "Microsoft", t: "Design HashMap", d: "Easy", f: 38, tp: "Array, Hash Table",
    q: 'Design a HashMap without using any built-in hash table libraries. Support put, get, and remove.',
    brute: 'Use a giant array of size 1,000,001. O(1) time but O(N) space.',
    opt_hint: 'O(1) Avg Time, Buckets with Chaining',
    optimal: 'Use an array of size 1000 (buckets). For each bucket, store a linked list (or array) of (key, value) pairs. Use `key % 1000` as the hash function.',
    space_hint: 'O(N + K) Space',
    space: 'K buckets + N stored pairs.',
    followup: 'How to handle collisions? (Chaining with linked lists or open addressing with linear probing).'
  },
  {
    c: "Microsoft", t: "Special Binary String", d: "Hard", f: 50, tp: "Hash Table, String",
    q: 'Special binary strings are binary strings with 1s and 0s matching correctly and every prefix having at least as many 1s as 0s. Return the lexicographically largest string.',
    brute: 'Try all possible swaps of special substrings. Exponential.',
    opt_hint: 'O(N^2) Time, Recursion + Sorting',
    optimal: 'Split S into its inner special strings (when count of 1s == count of 0s). Recursively solve for the content between the outer 1 and 0. Sort the resulting special strings descending and join.',
    space_hint: 'O(N) Space',
    space: 'Recursion stack + sorted components.',
    followup: 'Why sort descending? (Because we want the largest lexicographical result, and the components can be swapped in any order as long as the Special property holds).'
  },
  {
    c: "Microsoft", t: "Is Graph Bipartite?", d: "Medium", f: 25, tp: "Breadth-First Search, Graph",
    q: 'A graph is bipartite if the nodes can be partitioned into two independent sets A and B such that every edge connects a node in A and a node in B.',
    brute: 'Try all 2^N possible partitions. Exponential.',
    opt_hint: 'O(V + E) Time, BFS/DFS 2-Coloring',
    optimal: 'Traverse the graph. For each component, start coloring with color 0. For each neighbor, color with 1 - current_color. If a neighbor is already colored with current_color, return false.',
    space_hint: 'O(V) Space',
    space: 'Color array and queue/stack.',
    followup: 'Can this be done with Union-Find? (Yes — for each node u, union all its neighbors together. If u is ever in the same set as its neighbor, it\'s not bipartite).'
  },
  {
    c: "Microsoft", t: "Design Authentication Manager", d: "Medium", f: 75, tp: "Array, Hash Table",
    q: 'Implement the AuthenticationManager class which manages tokens with expiration times.',
    brute: 'Use a list. Finding/renewing a token takes O(N).',
    opt_hint: 'O(1) Time, HashMap',
    optimal: 'Use a HashMap mapping `tokenId -> expiryTime`. On `generate()`, `map[id] = currentTime + timeToLive`. On `renew()`, update if `map[id] > currentTime`. On `countUnexpired()`, iterate and count (or use an ordered map to optimize).',
    space_hint: 'O(N) Space',
    space: 'Stores all active tokens.',
    followup: 'How to make countUnexpired() faster than O(N)? (Use an OrderedDict or TreeMap to store tokens by expiry time. Pop expired tokens from the front in O(1) amortized).'
  },
  {
    c: "Microsoft", t: "Populating Next Right Pointers in Each Node", d: "Medium", f: 38, tp: "Linked List, Two Pointers",
    q: 'Given a perfect binary tree, populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.',
    brute: 'Standard Level Order Traversal (BFS) using a queue. O(N) space.',
    opt_hint: 'O(N) Time, O(1) Space',
    optimal: 'Iterate level by level using the existing `next` pointers. For node u at level L: `u.left.next = u.right` and `u.right.next = u.next.left` (if u.next exists).',
    space_hint: 'O(1) Space',
    space: 'No queue or recursion stack needed since it\'s a perfect tree.',
    followup: 'What if it\'s NOT a perfect binary tree? (LC 117 — use a dummy node at each level to build the next level\'s chain).'
  },
  {
    c: "Microsoft", t: "Final Prices With a Special Discount in a Shop", d: "Easy", f: 50, tp: "Array, Hash Table",
    q: 'Given prices, for each item i, you get a discount equal to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i].',
    brute: 'For each price, scan forward. O(N^2).',
    opt_hint: 'O(N) Time, Monotonic Increasing Stack',
    optimal: 'Iterate through prices. Maintain a monotonic increasing stack of indices. When `prices[i] <= prices[stack.top()]`, pop and update `prices[top] -= prices[i]`.',
    space_hint: 'O(N) Space',
    space: 'Stack of size N.',
    followup: 'Is this the same as Next Smaller Element? (Yes, exactly. The first price less than or equal to current is the next smaller element).'
  },
  {
    c: "Microsoft", t: "Average Selling Price", d: "Easy", f: 38, tp: "Array, Hash Table",
    q: 'SQL: Find the average selling price for each product. Round to 2 decimal places.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, SQL LEFT JOIN + GROUP BY',
    optimal: 'SQL: `SELECT p.product_id, IFNULL(ROUND(SUM(p.price * u.units) / SUM(u.units), 2), 0) AS average_price FROM Prices p LEFT JOIN UnitsSold u ON p.product_id = u.product_id AND u.purchase_date BETWEEN p.start_date AND p.end_date GROUP BY p.product_id;`',
    space_hint: 'O(N) Space',
    space: 'Join space.',
    followup: 'Why use LEFT JOIN? (To include products that haven\'t sold any units, resulting in a 0 average price via IFNULL).'
  },
  {
    c: "Microsoft", t: "Number of Good Pairs", d: "Easy", f: 25, tp: "Array, Hash Table",
    q: 'Given an array of integers nums, return the number of good pairs. A pair (i, j) is called good if nums[i] == nums[j] and i < j.',
    brute: 'Check all pairs (i, j). Time O(N^2).',
    opt_hint: 'O(N) Time, Frequency HashMap',
    optimal: 'Count frequencies of each number. For each number occurring `c` times, it contributes `c * (c - 1) / 2` good pairs.',
    space_hint: 'O(N) Space',
    space: 'HashMap to store frequencies.',
    followup: 'Can you do it in one pass? (Yes — as you iterate, `total += count[num]` then `count[num]++`).'
  },
  {
    c: "Microsoft", t: "Excel Sheet Column Number", d: "Easy", f: 38, tp: "Array, Hash Table",
    q: 'Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number (A->1, AA->27).',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, Base-26 Conversion',
    optimal: 'Iterate through string. `res = res * 26 + (ord(char) - ord(\'A\') + 1)`. Equivalent to converting a base-26 number to decimal.',
    space_hint: 'O(1) Space',
    space: 'Only one integer accumulator.',
    followup: 'What is the inverse? (Excel Sheet Column Title — uses mod 26 and division).'
  },
  {
    c: "Microsoft", t: "Longest Substring with At Least K Repeating Characters", d: "Medium", f: 25, tp: "Binary Tree, Depth-First Search, Hash Table, Sliding Window, String, Tree",
    q: 'Given a string s and an integer k, return the length of the longest substring of s such that the frequency of each character in this substring is greater than or equal to k.',
    brute: 'Check every substring. O(N^3).',
    opt_hint: 'O(N) Time, Sliding Window or Divide & Conquer',
    optimal: 'Divide and Conquer: Find a character in current string with frequency < k. Split the string by this character and recursively find the max in each part. Base case: if all chars frequency >= k, return string length.',
    space_hint: 'O(N) Space',
    space: 'Recursion stack space.',
    followup: 'Can you use sliding window? (Yes — iterate through number of unique characters allowed in the window (1 to 26). O(26 * N)).'
  },
  {
    c: "Microsoft", t: "Maximum Number of Non-overlapping Palindrome Substrings", d: "Hard", f: 38, tp: "Binary Tree, Depth-First Search, Hash Table, Sliding Window, String, Tree",
    q: 'Given a string s and an integer k, return the maximum number of non-overlapping palindrome substrings, each of which has a length of at least k.',
    brute: 'Exponential exploration of all valid partitions.',
    opt_hint: 'O(N * K) Time, Greedy + Two Pointers',
    optimal: 'Greedily pick the first possible palindrome of length k or k+1. Use two pointers to check palindromes centered at each index. Once a palindrome is found, skip past it and repeat.',
    space_hint: 'O(1) Space',
    space: 'No extra storage besides pointers.',
    followup: 'Why only check lengths k and k+1? (Because any palindrome of length > k+1 contains a palindrome of length k or k+1 within it, and picking the shorter one is always greedily better).'
  },
  {
    c: "Microsoft", t: "Shifting Letters", d: "Medium", f: 38, tp: "Backtracking",
    q: 'Given a string s and an array shifts where `shifts[i] = x` means shift characters `s[0...i]` x times. Return final string.',
    brute: 'For each shift, iterate through the prefix and update. Time O(N^2).',
    opt_hint: 'O(N) Time, Reverse Prefix Sum',
    optimal: 'The total shift for `s[i]` is the sum of `shifts[i...n-1]`. Compute reverse prefix sums of the shifts array. Apply `(ord(char) - ord(\'a\') + total_shift) % 26` to each character.',
    space_hint: 'O(1) Extra Space',
    space: 'In-place modification or O(N) for output string.',
    followup: 'What if shifts are very large? (Apply `% 26` early to the shifts sum to prevent integer overflow).'
  },
  {
    c: "Microsoft", t: "Count Servers that Communicate", d: "Medium", f: 25, tp: "Array, Hash Table",
    q: 'Given a grid, a server at (r, c) communicates if there is another server in the same row or same column. Return total number of communicating servers.',
    brute: 'For every server, scan its row and column. O(M*N * (M+N)).',
    opt_hint: 'O(M*N) Time, Row/Col Counting',
    optimal: '1. Count total servers in each row and column (`rowCount[M]`, `colCount[N]`). 2. Iterate servers; if `rowCount[r] > 1` or `colCount[c] > 1`, the server communicates.',
    space_hint: 'O(M + N) Space',
    space: 'Arrays to store row and column counts.',
    followup: 'Can you do it in one pass? (No, you need the final counts to determine if a server has a peer in the same row/col).'
  },
  {
    c: "Microsoft", t: "Palindrome Partitioning II", d: "Hard", f: 25, tp: "Hash Table, String",
    q: 'Given a string s, partition s such that every substring of the partition is a palindrome. Return the minimum cuts needed for such a partitioning.',
    brute: 'Generate all partitions and find min. O(2^N).',
    opt_hint: 'O(N^2) Time, DP',
    optimal: '1. Precompute `isPal[i][j]` 2D table. 2. `minCuts[i]` = min cuts for `s[0...i]`. `minCuts[i] = min(minCuts[j-1] + 1)` for all `j <= i` where `s[j...i]` is a palindrome.',
    space_hint: 'O(N^2) Space',
    space: '2D boolean table for palindrome checks.',
    followup: 'How to optimize space to O(N)? (Instead of 2D table, expand around centers to find palindromes and update the `minCuts` array on the fly).'
  },
  {
    c: "Microsoft", t: "Twisted Mirror Path Count", d: "Medium", f: 25, tp: "Depth-First Search, Matrix",
    q: 'Calculate the number of paths in a grid with mirrors that reflect paths. (Niche/Specific Problem)',
    brute: 'Exhaustive search of all paths. O(3^N).',
    opt_hint: 'O(N^2) Time, DP with Directions',
    optimal: 'Maintain a 3D DP table `dp[r][c][dir]` where dir is the direction the path is moving. Mirrors change the direction. Sum paths leading to target.',
    space_hint: 'O(N^2) Space',
    space: '3D DP table storage.',
    followup: 'How to handle multiple reflection points? (Ensure the DP state transitions correctly reflect the physics of the mirrors).'
  },
  {
    c: "Microsoft", t: "Minimize Malware Spread", d: "Hard", f: 25, tp: "Array, Hash Table",
    q: 'In a network, malware spreads through connections. Given a list of initially infected nodes, which one should you remove to minimize the final number of infected nodes?',
    brute: 'Simulate removal for every initial node. O(I * (V+E)).',
    opt_hint: 'O(V + E) Time, Connected Components + Counting',
    optimal: '1. Find connected components using Union-Find or DFS. 2. For each component, count how many initial nodes are in it. 3. If a component has exactly ONE initial node, removing it saves the whole component. Pick the node saving the largest such component.',
    space_hint: 'O(V) Space',
    space: 'Union-Find parents and component sizes.',
    followup: 'What if every component has at least two infected nodes? (Removing any node saves 0 nodes, so return the infected node with the smallest index).'
  },
  {
    c: "Microsoft", t: "Convert Integer to the Sum of Two No-Zero Integers", d: "Easy", f: 25, tp: "Array",
    q: 'No-Zero integer is a positive integer that does not contain any 0 in its decimal representation. Given n, return [a, b] such that a+b = n and both are no-zero.',
    brute: 'Try all pairs (a, n-a). O(N * log N).',
    opt_hint: 'O(N log N) Time, Enumeration',
    optimal: 'Iterate `a` from 1 to `n/2`. If `\'0\' not in str(a)` and `\'0\' not in str(n-a)`, return `[a, n-a]`.',
    space_hint: 'O(log N) Space',
    space: 'String conversion space.',
    followup: 'Is it guaranteed to have a solution? (Yes, for n >= 2).'
  },
  {
    c: "Microsoft", t: "Number of People Aware of a Secret", d: "Medium", f: 25, tp: "Array, Hash Table",
    q: 'On day 1, one person discovers a secret. Every day from `day + delay`, they share the secret until `day + forget`. Return number of people who know the secret on day n.',
    brute: 'Track every person\'s \'days since discovery\'. O(N^2).',
    opt_hint: 'O(N) Time, DP with Prefix Sums',
    optimal: 'Maintain `dp[i]` = number of people who discovered the secret on day i. `num_sharing` increases by `dp[i - delay]` and decreases by `dp[i - forget]`. `dp[i] = num_sharing`. Result is sum of `dp` from `n-forget+1` to `n`.',
    space_hint: 'O(N) Space',
    space: 'DP array of size n.',
    followup: 'How to handle huge n? (Matrix exponentiation isn\'t easily applicable due to the delay/forget window, so O(N) is usually the target).'
  },
  {
    c: "Microsoft", t: "Rearrange Words in a Sentence", d: "Medium", f: 25, tp: "Hash Table, String",
    q: 'Given a sentence, rearrange the words in increasing order of their lengths. If lengths are equal, keep original order. First word must be capitalized.',
    brute: 'N/A.',
    opt_hint: 'O(N log N) Time, Stable Sort',
    optimal: 'Split into words, lowercase all. Perform a STABLE sort by word length. Capitalize the first word of the result and join.',
    space_hint: 'O(N) Space',
    space: 'Storage for words list.',
    followup: 'Why stable sort? (To preserve \'original order\' for words of equal length as requested).'
  },
  {
    c: "Microsoft", t: "Game of Life", d: "Medium", f: 38, tp: "Array, Hash Table",
    q: 'Implement Conway\'s Game of Life on an m x n board. Update the board in-place.',
    brute: 'Use a copy of the board to compute new states. O(M*N) space.',
    opt_hint: 'O(M*N) Time, State Encoding',
    optimal: 'Encode new states in the board: 2 = currently dead, becomes alive; 3 = currently alive, becomes dead. In a second pass, map 2->1 and 3->0.',
    space_hint: 'O(1) Space',
    space: 'In-place modification using bit/state encoding.',
    followup: 'What if the board is infinite? (Use a HashSet to store only live cell coordinates. Update only neighbors of live cells).'
  },
  {
    c: "Microsoft", t: "Vowel Spellchecker", d: "Medium", f: 38, tp: "Array, Hash Table",
    q: 'Given a wordlist and queries. For each query: 1. If exact match, return it. 2. If case-insensitive match, return it. 3. If vowel-agnostic match, return it. Else return \'\'.',
    brute: 'Check each query against every word in wordlist. O(Q * N).',
    opt_hint: 'O(N + Q) Time, HashMaps',
    optimal: 'Precompute 3 maps: `exact{word}`, `lowered{word.lower()}`, `voweled{word.replace_vowels(\'*\')}`. For each map, only store the FIRST occurrence. Query by checking maps in priority order.',
    space_hint: 'O(N) Space',
    space: 'Maps store the entire wordlist.',
    followup: 'What defines a vowel-agnostic match? (Replacing all vowels \'aeiou\' with a placeholder \'*\' and comparing).'
  },
  {
    c: "Microsoft", t: "Robot Room Cleaner", d: "Hard", f: 25, tp: "Array, Hash Table",
    q: 'A robot can move, turn, and clean in an unknown room. Clean all reachable cells.',
    brute: 'N/A. Interactive problem.',
    opt_hint: 'O(N) Time, Backtracking with Visited Set',
    optimal: 'DFS. Maintain a `visited` set of relative coordinates (row, col). At each cell: clean, then for each direction, if `move()` is true and neighbor not visited, recurse. Backtrack by turning 180, moving back, and turning 180.',
    space_hint: 'O(N) Space',
    space: 'Visited set and recursion stack.',
    followup: 'How to handle the relative direction? (Start facing up (0). When turning right, increment direction (dir + 1) % 4).'
  },
  {
    c: "Microsoft", t: "Path Sum", d: "Easy", f: 25, tp: "Array, Depth-First Search, Dynamic Programming, Matrix",
    q: 'Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, Recursive DFS',
    optimal: 'Base case: if null, return false. If leaf, return `val == target`. Else return `hasPath(left, target - val) || hasPath(right, target - val)`.',
    space_hint: 'O(H) Space',
    space: 'Recursion stack depth O(H).',
    followup: 'Can you do it iteratively? (Yes, use a stack storing pairs of (node, current_sum)).'
  },
  {
    c: "Microsoft", t: "Maximum Number of Words You Can Type", d: "Easy", f: 25, tp: "Hash Table, String",
    q: 'Given a string text and brokenLetters. Return number of words in text that do NOT contain any broken letters.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, HashSet',
    optimal: 'Put brokenLetters into a HashSet. Split text into words. For each word, check if any character exists in the HashSet.',
    space_hint: 'O(1) Space',
    space: 'HashSet stores at most 26 characters.',
    followup: 'How to do it without splitting the string? (Iterate through chars, track a flag for the current word, increment count at spaces if flag is still false).'
  },
  {
    c: "Microsoft", t: "Battleships in a Board", d: "Medium", f: 50, tp: "Array, Hash Table",
    q: 'Given a board, count how many battleships (horizontal/vertical lines of \'X\') are on it. Battleships don\'t touch.',
    brute: 'Standard island counting (DFS/BFS). O(M*N) space for visited.',
    opt_hint: 'O(M*N) Time, One-Pass In-Place',
    optimal: 'Iterate. Only count \'X\' if it\'s the TOP-LEFT of a battleship: `board[i][j] == \'X\'` AND `board[i-1][j] != \'X\'` AND `board[i][j-1] != \'X\'`.',
    space_hint: 'O(1) Space',
    space: 'No extra storage or modification needed.',
    followup: 'Why only check top and left? (Since battleships are straight lines and don\'t touch, the top-left cell is unique for each ship).'
  },
  {
    c: "Microsoft", t: "Design Task Manager", d: "Medium", f: 25, tp: "Array, Hash Table",
    q: 'Implement a TaskManager supporting: add(userId, taskId, priority), edit(taskId, newPriority), rm(taskId), and exec() which executes the highest priority task.',
    brute: 'Use a list. Operations take O(N).',
    opt_hint: 'O(log N) Ops, PriorityQueue + HashMap',
    optimal: 'Use a Max-Heap for (priority, taskId, userId). Use a HashMap mapping `taskId -> (userId, priority)` to track the current state. During `exec()`, pop from heap and check if it matches the current state in HashMap (lazy deletion).',
    space_hint: 'O(N) Space',
    space: 'Heap and map storing all tasks.',
    followup: 'Why lazy deletion? (Because standard Heaps don\'t support O(log N) removal by ID. We only clean up when the \'stale\' task reaches the top).'
  },
  {
    c: "Microsoft", t: "Path Sum II", d: "Medium", f: 25, tp: "Array, Depth-First Search, Dynamic Programming, Matrix",
    q: 'Given root and targetSum, return all root-to-leaf paths where the sum of node values equals targetSum.',
    brute: 'Generate all root-to-leaf paths and filter. O(N * H).',
    opt_hint: 'O(N) Time, Backtracking',
    optimal: 'DFS. Maintain a `currentPath` list. Add value, recurse. If leaf and sum matches, add a copy of `currentPath` to result. Pop value before returning.',
    space_hint: 'O(H) Space',
    space: 'Recursion stack and current path storage.',
    followup: 'Why add a COPY of currentPath? (Because the list is modified in-place; if you add a reference, it will be empty at the end).'
  },
  {
    c: "Microsoft", t: "Maximum Width of Binary Tree", d: "Medium", f: 25, tp: "Binary Tree, Depth-First Search, Tree",
    q: 'Return the maximum width of a binary tree. Width is the number of nodes (including nulls) between the end-nodes at each level.',
    brute: 'None. Requires indexing.',
    opt_hint: 'O(N) Time, Indexing BFS',
    optimal: 'Assign an index to each node: `root = 0`, `left = 2*i`, `right = 2*i + 1`. Perform level-order traversal. For each level, `width = last_node.index - first_node.index + 1`. Take max.',
    space_hint: 'O(N) Space',
    space: 'Queue storage for one level.',
    followup: 'Does it overflow? (Indices can grow exponentially (2^depth). In Java/C++, use `long` or unsigned. Python handles large integers automatically).'
  },
  {
    c: "Microsoft", t: "Minimum Operations to Make Array Equal to Target", d: "Hard", f: 50, tp: "Array",
    q: 'Given nums and target. You can increment/decrement a subarray. Return min operations to make nums == target.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, Difference Array Greedy',
    optimal: 'Let `diff[i] = target[i] - nums[i]`. The problem becomes making all `diff[i]` zero using subarray updates. Operations needed: `sum(max(0, diff[i] - diff[i-1]))` considering signs.',
    space_hint: 'O(1) Space',
    space: 'Running calculation variables.',
    followup: 'Is this same as LC 1526? (Yes, this is the signed version of \'Minimum Number of Increments on Subarrays to Form a Target Array\').'
  },
  {
    c: "Microsoft", t: "Palindromic Substrings", d: "Medium", f: 25, tp: "Binary Tree, Depth-First Search, Hash Table, Sliding Window, String, Tree",
    q: 'Given a string s, return the number of palindromic substrings in it.',
    brute: 'Check every substring. O(N^3).',
    opt_hint: 'O(N^2) Time, Expand Around Center',
    optimal: 'Iterate through each index as a center (both single char and between two chars). Expand outward while chars match, incrementing count.',
    space_hint: 'O(1) Space',
    space: 'Only pointers used.',
    followup: 'Can you do O(N)? (Yes, Manacher\'s Algorithm solves this in O(N) time and space).'
  },
  {
    c: "Microsoft", t: "Maximal Network Rank", d: "Medium", f: 25, tp: "Breadth-First Search, Graph",
    q: 'Given n cities and roads. The network rank of two cities is total roads connected to either city (shared road counted once). Return max rank.',
    brute: 'Check every pair of cities (i, j). Time O(N^2).',
    opt_hint: 'O(N^2) Time, Degree Counting',
    optimal: 'Calculate degrees for all cities. For each pair (i, j), `rank = deg[i] + deg[j] - (1 if connected else 0)`. Use an adjacency matrix for O(1) connection check.',
    space_hint: 'O(N^2) Space',
    space: 'Adjacency matrix (or O(E) for adjacency set).',
    followup: 'Can you do better than O(N^2)? (Yes, find top 2 max degree nodes and handle ties, but O(N^2) is acceptable given N=100).'
  },
  {
    c: "Microsoft", t: "Count Elements With Maximum Frequency", d: "Easy", f: 25, tp: "Array, Hash Table",
    q: 'Given an array, return the total frequencies of elements that have the maximum frequency.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, HashMap',
    optimal: 'Count frequencies. Find `maxFreq`. Sum all frequencies that equal `maxFreq`.',
    space_hint: 'O(N) Space',
    space: 'Frequency map.',
    followup: 'Can you do it in one pass? (Yes — track `maxFreq` and `totalFreq`. When a new `maxFreq` is hit, reset `totalFreq`. If current count equals `maxFreq`, increment `totalFreq`).'
  },
  {
    c: "Microsoft", t: "Making A Large Island", d: "Hard", f: 38, tp: "Depth-First Search, Matrix",
    q: 'You are given an n x n binary grid. You can change at most one 0 to 1. Return the size of the largest island.',
    brute: 'Flip each 0 and run DFS/BFS. O(N^4).',
    opt_hint: 'O(N^2) Time, Island ID and Size Mapping',
    optimal: '1. Find all islands and map their ID to their size using DFS. 2. For each 0, calculate potential size by summing unique neighbor island sizes + 1.',
    space_hint: 'O(N^2) Space',
    space: 'Mapping grid cells to island IDs.',
    followup: 'What if there are no 0s? (Return n*n).'
  },
  {
    c: "Microsoft", t: "Minimum Initial Energy to Finish Tasks", d: "Hard", f: 38, tp: "Array, Hash Table",
    q: 'Given tasks [actual, minimum]. To do a task, you need `minimum` energy, but it only consumes `actual`. Return min initial energy to do all tasks in any order.',
    brute: 'Try all permutations. O(N!).',
    opt_hint: 'O(N log N) Time, Greedy Sort',
    optimal: 'Sort tasks by `(minimum - actual)` descending. This prioritizes tasks that require the most \'overhead\' energy early while you have more total energy.',
    space_hint: 'O(log N) Space',
    space: 'Sorting space.',
    followup: 'Why sort by difference? (Because you want to minimize the \'waste\' or gap between required and consumed energy at each step to preserve your starting capital).'
  },
  {
    c: "Microsoft", t: "Kth Missing Positive Number", d: "Easy", f: 25, tp: "Heap (Priority Queue), Sorting",
    q: 'Given a sorted array and an integer k, find the kth positive integer that is missing from this array.',
    brute: 'Linear scan, incrementing a missing-counter. O(N + K).',
    opt_hint: 'O(log N) Time, Binary Search on Missing Count',
    optimal: 'Binary search on indices. Missing numbers at index `i` is `arr[i] - (i + 1)`. Find the first index where `missing >= k`. Result is `left + k`.',
    space_hint: 'O(1) Space',
    space: 'Only two pointers.',
    followup: 'What if k is larger than all gaps in the array? (The binary search naturally handles this by returning `n + k`).'
  },
  {
    c: "Microsoft", t: "Longest Palindrome", d: "Easy", f: 25, tp: "Hash Table, String",
    q: 'Given a string, find the length of the longest palindrome that can be built with those letters.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, Char Counting',
    optimal: 'Count each character\'s frequency. For each frequency `f`, add `f // 2 * 2` to result. If any frequency is odd, add 1 to the final result (for the center character).',
    space_hint: 'O(1) Space',
    space: 'Frequency map for 52 characters.',
    followup: 'Can you do it with a HashSet? (Yes — if char in set, remove and add 2 to result; else add to set. Result + 1 if set not empty).'
  },
  {
    c: "Microsoft", t: "Count Subarrays With Fixed Bounds", d: "Hard", f: 25, tp: "Array, Sliding Window, String",
    q: 'Given nums, minK, maxK. Return number of subarrays where the min value is minK and max value is maxK.',
    brute: 'Check every subarray. O(N^2).',
    opt_hint: 'O(N) Time, Sliding Window + Three Pointers',
    optimal: 'Track 3 indices: `lastBad` (outside [minK, maxK]), `lastMin`, and `lastMax`. For each `i`, if valid, add `max(0, min(lastMin, lastMax) - lastBad)` to the total.',
    space_hint: 'O(1) Space',
    space: 'Three integer variables.',
    followup: 'Why `min(lastMin, lastMax) - lastBad`? (This gives the number of subarrays ending at `i` that start after the last bad number and include at least one `minK` and one `maxK`).'
  },
  {
    c: "Microsoft", t: "Minimum Score Triangulation of Polygon", d: "Medium", f: 25, tp: "Array, Hash Table",
    q: 'Given a convex polygon, triangulate it. The score of a triangulation is the sum of the products of values of the vertices of each triangle. Return the minimum score.',
    brute: 'Try all possible triangulations. Exponential.',
    opt_hint: 'O(N^3) Time, Range DP',
    optimal: '`dp[i][j]` = min score to triangulate points from i to j. `dp[i][j] = min(dp[i][k] + dp[k][j] + v[i]*v[k]*v[j])` for all i < k < j.',
    space_hint: 'O(N^2) Space',
    space: '2D DP table.',
    followup: 'How is this related to Matrix Chain Multiplication? (It is the same core logic — finding the optimal way to group/partition a sequence).'
  },
  {
    c: "Microsoft", t: "Count the Number of Infection Sequences", d: "Hard", f: 50, tp: "Array, Hash Table",
    q: 'Given n children and a list of initially infected. Every second, an uninfected child next to an infected one becomes infected. Return total possible sequences to infect everyone.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, Combinatorics',
    optimal: 'Identify gaps between infected children. Total sequences = `(total_gaps!) / (gap1! * gap2! * ...)` multiplied by `2^(gap_size-1)` for internal gaps. Use modular inverse for divisions.',
    space_hint: 'O(N) Space',
    space: 'Precomputing factorials.',
    followup: 'Why `2^(gap_size-1)`? (For internal gaps, each step has 2 choices — left or right — except for the very last child in the gap).'
  },
  {
    c: "Microsoft", t: "Delete and Earn", d: "Medium", f: 25, tp: "Array, Hash Table",
    q: 'Given an array, you can pick a number `x` and earn `x` points, but you must delete all occurrences of `x-1` and `x+1`. Return max points.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, House Robber Reduction',
    optimal: '1. Sum values for each number into an array `points`. 2. Run House Robber DP on `points`: `dp[i] = max(dp[i-1], dp[i-2] + points[i])`.',
    space_hint: 'O(MaxVal) Space',
    space: 'Array to store sums for each value up to 10,000.',
    followup: 'What if the range of values is very large? (Sort unique values and only process relevant ones, skipping gaps using the value difference).'
  },
  {
    c: "Microsoft", t: "Intersection of Two Arrays II", d: "Easy", f: 25, tp: "Array",
    q: 'Given two arrays, return their intersection. Each element in the result must appear as many times as it shows in both arrays.',
    brute: 'For each element in nums1, check if in nums2. If so, remove from nums2 and add to result. O(M*N).',
    opt_hint: 'O(M + N) Time, HashMap',
    optimal: 'Count frequencies of nums1 in a HashMap. Iterate through nums2; if element exists in map with count > 0, add to result and decrement map count.',
    space_hint: 'O(min(M, N)) Space',
    space: 'HashMap to store the smaller array\'s frequencies.',
    followup: 'What if arrays are sorted? (Use two pointers. If `nums1[i] < nums2[j]`, `i++`. Else if `>`, `j++`. Else add to result and `i++, j++`).'
  },
  {
    c: "Microsoft", t: "Product Sales Analysis III", d: "Medium", f: 25, tp: "Array",
    q: 'SQL: For each product, select the year, quantity, and price for the first year it was sold.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, SQL Subquery',
    optimal: 'SQL: `SELECT product_id, year AS first_year, quantity, price FROM Sales WHERE (product_id, year) IN (SELECT product_id, MIN(year) FROM Sales GROUP BY product_id);`',
    space_hint: 'O(N) Space',
    space: 'Internal grouping memory.',
    followup: 'How to handle if multiple sales happened in the same first year? (The subquery approach returns all rows matching that first year, which is usually correct unless a single row is required).'
  },
  {
    c: "Microsoft", t: "Sorting the Sentence", d: "Easy", f: 25, tp: "Array, Sorting",
    q: 'A sentence is shuffled by appending a 1-indexed number to each word. Restore the original sentence.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, Split & Sort',
    optimal: 'Split into words. For each word, extract the last character (the index), and place the rest of the word in a result array at `index - 1`. Join the array.',
    space_hint: 'O(N) Space',
    space: 'Array of words.',
    followup: 'How to handle double-digit indices? (Iterate from the end to find the first non-digit character to extract the full index).'
  },
  {
    c: "Microsoft", t: "Successful Pairs of Spells and Potions", d: "Medium", f: 25, tp: "Array, Hash Table",
    q: 'Given spells and potions and `success` threshold. For each spell, find how many potions meet `spell * potion >= success`.',
    brute: 'For each spell, check every potion. O(M * N).',
    opt_hint: 'O(M log N + N log N) Time, Sorting + Binary Search',
    optimal: 'Sort potions. For each spell, calculate `target = ceil(success / spell)`. Binary search potions for the first element >= `target`. Number of successes is `n - bisect_left(potions, target)`.',
    space_hint: 'O(log N) Space',
    space: 'Sorting space.',
    followup: 'Why not binary search spells? (Potions is the fixed array being compared against for every spell, so sorting it once provides the most reuse).'
  },
  {
    c: "Microsoft", t: "Design Memory Allocator", d: "Medium", f: 38, tp: "Array, Hash Table",
    q: 'Implement a memory allocator with `allocate(size, mID)` and `free(mID)`. Allocate finds the first contiguous block of size.',
    brute: 'Use an array to represent memory. Allocation is O(N).',
    opt_hint: 'O(N) Time, Linear Pass',
    optimal: 'Use an array of size n. For `allocate`, scan for the first sequence of `size` zeros. For `free`, iterate and set all cells with `mID` to 0.',
    space_hint: 'O(N) Space',
    space: 'Memory array of size N.',
    followup: 'How to optimize allocate? (Maintain a list of free blocks and use a balanced BST to find the best fit, but simple O(N) is often the expected start).'
  },
  {
    c: "Microsoft", t: "Find K Pairs with Smallest Sums", d: "Medium", f: 25, tp: "Array, Binary Search",
    q: 'Given two sorted arrays, return k pairs (u, v) with the smallest sums.',
    brute: 'Generate all M*N pairs and sort. O(M*N log(M*N)).',
    opt_hint: 'O(K log K) Time, Min-Heap',
    optimal: 'Push `(nums1[i] + nums2[0], i, 0)` for all `i` into a Min-Heap. Pop the smallest sum `(sum, i, j)`. Add `(nums1[i], nums2[j])` to result. Push `(nums1[i] + nums2[j+1], i, j+1)` back into the heap.',
    space_hint: 'O(K) Space',
    space: 'Heap size is at most K (or min(N, K)).',
    followup: 'Why not push all combinations? (Because k is often much smaller than M*N, and the sorted property allows us to only explore promising neighbors).'
  },
  {
    c: "Microsoft", t: "Minimum Number of Refueling Stops", d: "Hard", f: 25, tp: "Array, Hash Table",
    q: 'A car starts with fuel. To reach a target, it can stop at stations for more fuel. Return min stops.',
    brute: 'Recursive exploration of all stop combinations. O(2^N).',
    opt_hint: 'O(N log N) Time, Greedy + Max Heap',
    optimal: 'Drive until you run out of fuel. While fuel is negative, pop the largest available fuel station from a Max Heap and \'retroactively\' stop there. Add its fuel and increment stops. Add current station to heap.',
    space_hint: 'O(N) Space',
    space: 'Heap storing all passed fuel stations.',
    followup: 'Why is this greedy optimal? (Because stopping at the station with the most fuel gives you the maximum reach, regardless of when you actually \'stopped\' there).'
  },
  {
    c: "Microsoft", t: "Check if the Sentence Is Pangram", d: "Easy", f: 25, tp: "Array, Hash Table",
    q: 'Return true if the sentence contains every letter of the English alphabet at least once.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, HashSet',
    optimal: 'Convert sentence to a set and check if `len(set) == 26`. Or use a boolean array of size 26.',
    space_hint: 'O(1) Space',
    space: 'HashSet stores at most 26 characters.',
    followup: 'Can you use a bitmask? (Yes — use an integer. `mask |= (1 << (ord(char) - ord(\'a\')))`. Check if `mask == (1 << 26) - 1`).'
  },
  {
    c: "Microsoft", t: "Broken Calculator", d: "Medium", f: 25, tp: "Stack",
    q: 'You can multiply by 2 or subtract 1. Find min operations to reach target from startValue.',
    brute: 'BFS. O(Target).',
    opt_hint: 'O(log Target) Time, Work Backwards',
    optimal: 'Work from target to startValue. If target is even, divide by 2. If odd, add 1. If target becomes <= startValue, add `startValue - target` to the count.',
    space_hint: 'O(1) Space',
    space: 'No extra storage.',
    followup: 'Why work backwards? (Because working forward (multiply/subtract) has infinite possibilities, but working backwards (divide/add) has a unique optimal choice at every step).'
  },
  {
    c: "Microsoft", t: "Minimum Genetic Mutation", d: "Medium", f: 25, tp: "Array, Hash Table",
    q: 'Find min mutations from start to end gene. Each mutation changes 1 char to one of {A, C, G, T} and must exist in the bank.',
    brute: 'DFS. O(4^8).',
    opt_hint: 'O(Bank_Size * Gene_Length) Time, BFS',
    optimal: 'BFS starting from start gene. For each gene, try all possible 1-char mutations. If in bank and not visited, push to queue.',
    space_hint: 'O(Bank_Size) Space',
    space: 'Queue and visited set.',
    followup: 'How is this related to Word Ladder? (It is the exact same problem structure — finding the shortest path in a transformation graph).'
  },
  {
    c: "Microsoft", t: "Investments in 2016", d: "Medium", f: 25, tp: "Array, Hash Table",
    q: 'SQL: Find the sum of TIV_2016 for policyholders who have the same TIV_2015 as at least one other, and have a unique location.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, SQL Subqueries',
    optimal: 'SQL: `SELECT ROUND(SUM(tiv_2016), 2) AS tiv_2016 FROM Insurance WHERE tiv_2015 IN (SELECT tiv_2015 FROM Insurance GROUP BY tiv_2015 HAVING COUNT(*) > 1) AND (lat, lon) IN (SELECT lat, lon FROM Insurance GROUP BY lat, lon HAVING COUNT(*) = 1);`',
    space_hint: 'O(N) Space',
    space: 'DB grouping space.',
    followup: 'Can you use window functions? (Yes — `COUNT(*) OVER(PARTITION BY tiv_2015)` and `COUNT(*) OVER(PARTITION BY lat, lon)` to avoid subqueries).'
  },
  {
    c: "Microsoft", t: "Maximum OR", d: "Medium", f: 38, tp: "Array, Hash Table",
    q: 'Given nums and k. You can multiply any element by 2 at most k times. Return max possible Bitwise OR of all elements.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, Prefix/Suffix OR',
    optimal: 'Only one number should receive all k multiplications (shifting it left by k). Compute prefix ORs and suffix ORs. For each index i, `result = max(result, prefix[i-1] | (nums[i] << k) | suffix[i+1])`.',
    space_hint: 'O(N) Space',
    space: 'Arrays for prefix and suffix ORs.',
    followup: 'Why only one number? (Because the OR operation only cares about the highest bit position. Shifting one number k times reaches higher bits than shifting multiple numbers fewer times).'
  },
  {
    c: "Microsoft", t: "Assign Cookies", d: "Easy", f: 38, tp: "Array, Hash Table",
    q: 'Give cookies to children with greed factor g. Each child gets 1 cookie. Return max satisfied children.',
    brute: 'N/A.',
    opt_hint: 'O(N log N) Time, Greedy Two-Pointers',
    optimal: 'Sort children by greed and cookies by size. Use two pointers. If `cookie[j] >= greed[i]`, child i is satisfied, `i++`. Always `j++`.',
    space_hint: 'O(log N) Space',
    space: 'Sorting space.',
    followup: 'Why sort? (To use the smallest possible cookie that satisfies the least greedy child, preserving larger cookies for more greedy children).'
  },
  {
    c: "Microsoft", t: "Consecutive Numbers Sum", d: "Hard", f: 25, tp: "Array",
    q: 'Given n, return the number of ways it can be written as the sum of consecutive positive integers.',
    brute: 'Try every starting number and sum. O(N^2).',
    opt_hint: 'O(sqrt N) Time, Math',
    optimal: 'Sum of k terms starting at x: `n = k*x + k*(k-1)/2`. Thus `n - k*(k-1)/2` must be positive and divisible by k. Iterate k from 1 until `k*(k-1)/2 >= n`.',
    space_hint: 'O(1) Space',
    space: 'Only local variables.',
    followup: 'Why is k limited to sqrt(2n)? (Because the minimal sum of k positive integers is roughly `k^2 / 2`, which must be <= n).'
  },
  {
    c: "Microsoft", t: "Minimum Number of Steps to Make Two Strings Anagram", d: "Medium", f: 38, tp: "Hash Table, String",
    q: 'Given s and t, return min steps to change characters of t to make it an anagram of s.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, Char Counting',
    optimal: 'Count char frequencies of s and t. Calculate the difference: `sum(max(0, countS[char] - countT[char]))`. This is the number of characters that must be replaced.',
    space_hint: 'O(1) Space',
    space: 'Fixed size frequency arrays.',
    followup: 'Is it the same as `sum(abs(diff)) / 2`? (Yes, since they are equal length, the total positive difference equals the total negative difference).'
  },
  {
    c: "Microsoft", t: "Longest Palindromic Subsequence", d: "Medium", f: 50, tp: "Dynamic Programming",
    q: 'Given a string s, find the length of the longest palindromic subsequence in s.',
    brute: 'Generate all subsequences and check. O(2^N).',
    opt_hint: 'O(N^2) Time, DP',
    optimal: 'LPS(s) is equivalent to LCS(s, reverse(s)). Run standard 2D DP for Longest Common Subsequence.',
    space_hint: 'O(N) Space',
    space: '1D DP optimization of LCS.',
    followup: 'Can you solve it with Range DP? (Yes — `dp[i][j]` is max palindrome in `s[i...j]`. If `s[i]==s[j]`, `2 + dp[i+1][j-1]`. Else `max(dp[i+1][j], dp[i][j-1])`).'
  },
  {
    c: "Microsoft", t: "Employee Bonus", d: "Easy", f: 50, tp: "Array, Hash Table",
    q: 'SQL: Find the name and bonus of each employee with a bonus less than 1000.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, LEFT JOIN',
    optimal: 'SQL: `SELECT e.name, b.bonus FROM Employee e LEFT JOIN Bonus b ON e.empId = b.empId WHERE b.bonus < 1000 OR b.bonus IS NULL;`',
    space_hint: 'O(N) Space',
    space: 'Join memory.',
    followup: 'Why use OR IS NULL? (Employees with NO bonus are implicitly less than 1000 and must be included in the result).'
  },
  {
    c: "Microsoft", t: "Calculate Money in Leetcode Bank", d: "Easy", f: 38, tp: "Array, Hash Table",
    q: 'Every day you put in more money. Monday: 1, Tuesday: 2... Sunday: 7. Next Monday: 2... Return total money after n days.',
    brute: 'Simulate day by day. O(N).',
    opt_hint: 'O(1) Time, Math Formula',
    optimal: 'Number of full weeks `w = n // 7`, extra days `d = n % 7`. Weekly sum is `28 + 7*(w-1)*week_offset`. Use arithmetic series sum for weeks and the remaining days.',
    space_hint: 'O(1) Space',
    space: 'Constant space.',
    followup: 'Can you use a loop? (Yes, O(N) is fast enough for n=1000, but O(1) is the \'premium\' solution).'
  },
  {
    c: "Microsoft", t: "Design Circular Queue", d: "Medium", f: 38, tp: "Monotonic Queue, Queue",
    q: 'Implement a circular queue with fixed size using an array.',
    brute: 'N/A.',
    opt_hint: 'O(1) Ops, Array + Pointers',
    optimal: 'Use an array of size k. Maintain `head`, `count`. `tail = (head + count - 1) % k`. For enQueue: `tail = (head + count) % k`, add item, `count++`.',
    space_hint: 'O(k) Space',
    space: 'Array of size k.',
    followup: 'How to handle thread safety? (Use a lock or atomic variables for head/count updates).'
  },
  {
    c: "Microsoft", t: "Smallest String With Swaps", d: "Medium", f: 38, tp: "Hash Table, String",
    q: 'Given a string and pairs of indices that can be swapped. Swaps are transitive. Return lexicographically smallest string.',
    brute: 'BFS all permutations. O(N!).',
    opt_hint: 'O(N log N) Time, Union-Find',
    optimal: '1. Use Union-Find to group all connected indices. 2. For each group, extract the characters, sort them, and place them back into the sorted index positions.',
    space_hint: 'O(N) Space',
    space: 'Union-Find parents and groups.',
    followup: 'Why sort? (Because transitive swaps mean any character in a group can move to any position in that group, so we just sort for the best order).'
  },
  {
    c: "Microsoft", t: "N-Queens II", d: "Hard", f: 25, tp: "Backtracking",
    q: 'Return the number of distinct solutions to the n-queens puzzle.',
    brute: 'N/A.',
    opt_hint: 'O(N!) Time, Backtracking with bitmasks',
    optimal: 'DFS row by row. Maintain 3 sets/bitmasks: `cols`, `diag1 (r+c)`, `diag2 (r-c)`. If current (r, c) isn\'t in any set, place queen and recurse. Increment counter on success.',
    space_hint: 'O(N) Space',
    space: 'Sets/masks and recursion stack.',
    followup: 'How many solutions for N=8? (92).'
  },
  {
    c: "Microsoft", t: "Count Negative Numbers in a Sorted Matrix", d: "Easy", f: 25, tp: "Array, Depth-First Search, Matrix, Sorting",
    q: 'Given an m x n matrix sorted row-wise and col-wise in non-increasing order, return the number of negative numbers.',
    brute: 'Check every element. O(M*N).',
    opt_hint: 'O(M + N) Time, Staircase Search',
    optimal: 'Start at bottom-left corner. If negative, then all elements to its right in that row are negative; add `n - c`, and move up (`r--`). Else move right (`c++`).',
    space_hint: 'O(1) Space',
    space: 'Only pointers.',
    followup: 'Can you use binary search? (Yes — O(M log N) by binary searching each row. But staircase is strictly better).'
  },
  {
    c: "Microsoft", t: "Smallest Number With All Set Bits", d: "Easy", f: 25, tp: "Array, Hash Table",
    q: 'Given n, find the smallest number x >= n such that the binary representation of x contains only set bits (all 1s).',
    brute: 'Check every x >= n until bits are all 1s. O(N log N).',
    opt_hint: 'O(log N) Time, Bit Manipulation',
    optimal: 'Find the position of the highest set bit in n. The result is `(1 << (highest_bit_pos + 1)) - 1`.',
    space_hint: 'O(1) Space',
    space: 'No extra storage.',
    followup: 'How to find highest bit pos? (Use `n.bit_length()` in Python or `31 - clz(n)` in C++).'
  },
  {
    c: "Microsoft", t: "Insert into a Binary Search Tree", d: "Medium", f: 25, tp: "Binary Search, Binary Tree, Depth-First Search, Tree",
    q: 'Insert a value into a BST while maintaining its property.',
    brute: 'N/A.',
    opt_hint: 'O(H) Time, Recursive/Iterative DFS',
    optimal: 'Compare value with root. If smaller, recurse left. If larger, recurse right. When hitting a null child, create and attach the new node.',
    space_hint: 'O(H) Space',
    space: 'Recursion stack or O(1) if iterative.',
    followup: 'Does it have to be balanced? (No, the problem asks for ANY valid insertion, and the leaf insertion is the simplest).'
  },
  {
    c: "Microsoft", t: "Open the Lock", d: "Medium", f: 25, tp: "Array, Hash Table",
    q: 'A lock has 4 wheels with digits 0-9. Each turn increments/decrements a wheel. Given deadends, find min turns to reach target from \'0000\'.',
    brute: 'DFS. O(10^4).',
    opt_hint: 'O(10,000) Time, BFS',
    optimal: 'BFS starting from \'0000\'. Each state has 8 neighbors (2 for each wheel). If a neighbor isn\'t in deadends and not visited, push to queue.',
    space_hint: 'O(10,000) Space',
    space: 'Visited set and queue.',
    followup: 'What if deadends contains \'0000\'? (Return -1 immediately).'
  },
  {
    c: "Microsoft", t: "The Two Sneaky Numbers of Digitville", d: "Easy", f: 25, tp: "Array, Hash Table",
    q: 'In an array of n+2 numbers where each number from 0 to n-1 appears exactly once, except for two numbers that appear twice. Find them.',
    brute: 'Sort or use HashMap. O(N) space.',
    opt_hint: 'O(N) Time, Bit Manipulation',
    optimal: 'XOR all numbers in the array and XOR all numbers from 0 to n-1. The result is `x ^ y` where x, y are duplicates. Find the rightmost set bit in `x ^ y` to partition into two groups. XOR each group separately.',
    space_hint: 'O(1) Space',
    space: 'XOR variables.',
    followup: 'Is this same as Single Number III? (Yes, the logic is identical — finding two distinct elements using bitwise partitioning).'
  },
  {
    c: "Microsoft", t: "Flatten a Multilevel Doubly Linked List", d: "Medium", f: 25, tp: "Linked List, Two Pointers",
    q: 'Flatten a multilevel doubly linked list where some nodes have a child pointer pointing to another doubly linked list.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, Recursive DFS',
    optimal: 'Traverse the list. When a child is found, recursively flatten the child list. Attach the flattened child between the current node and the next node. Update all prev/next pointers.',
    space_hint: 'O(N) Space',
    space: 'Recursion stack depth.',
    followup: 'Can you do it iteratively? (Yes, use a stack to store the `next` nodes when you encounter a child, and process them after the child list is exhausted).'
  },
  {
    c: "Microsoft", t: "Design In-Memory File System", d: "Hard", f: 25, tp: "Array, Hash Table",
    q: 'Implement an in-memory file system supporting ls, mkdir, addContentToFile, and readContentFromFile.',
    brute: 'N/A.',
    opt_hint: 'O(L) Ops, Trie-based Structure',
    optimal: 'Use a Trie where each node is a file or directory. Directory nodes have a children map. File nodes have a content string. Split paths by \'/\' to traverse.',
    space_hint: 'O(Total Chars) Space',
    space: 'Storage for all file names and contents.',
    followup: 'How to handle huge file contents? (Use a list of blocks/buffers instead of a single string to allow efficient appending and memory management).'
  },
  {
    c: "Microsoft", t: "Remove Linked List Elements", d: "Easy", f: 38, tp: "Linked List, Two Pointers",
    q: 'Given head and val, remove all nodes with the given val.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, Dummy Node',
    optimal: 'Use a dummy node pointing to head. Iterate with `curr`. If `curr.next.val == val`, `curr.next = curr.next.next`. Else `curr = curr.next`.',
    space_hint: 'O(1) Space',
    space: 'In-place modification.',
    followup: 'Why use a dummy node? (To handle the case where the head itself needs to be removed).'
  },
  {
    c: "Microsoft", t: "Sort Characters By Frequency", d: "Medium", f: 25, tp: "Array, Sorting",
    q: 'Given a string, sort it in decreasing order based on the frequency of characters.',
    brute: 'Count frequencies and sort the string using a custom comparator. O(N log N).',
    opt_hint: 'O(N) Time, Bucket Sort',
    optimal: 'Count frequencies. Create buckets where `bucket[i]` is a list of characters with frequency `i`. Iterate buckets from N down to 1 and build result string.',
    space_hint: 'O(N) Space',
    space: 'Storage for frequencies and buckets.',
    followup: 'What if k is small? (Use a Max Heap of size K if we only needed the top K characters).'
  },
  {
    c: "Microsoft", t: "Find if Path Exists in Graph", d: "Easy", f: 38, tp: "Binary Search, Breadth-First Search, Depth-First Search, Graph, Matrix",
    q: 'Given an undirected graph, find if there is a valid path between source and destination.',
    brute: 'N/A.',
    opt_hint: 'O(V + E) Time, DFS/BFS or Union-Find',
    optimal: 'DFS/BFS from source. If destination reached, return true. Or Union-Find: `union` all edges, check `find(source) == find(destination)`.',
    space_hint: 'O(V) Space',
    space: 'Visited set or Union-Find parents.',
    followup: 'When to use Union-Find over BFS? (If there are multiple connectivity queries on the same graph).'
  },
  {
    c: "Microsoft", t: "Power Grid Maintenance", d: "Medium", f: 25, tp: "Depth-First Search, Matrix",
    q: 'Find the minimum edges to keep a grid connected (Niche/Specific Problem).',
    brute: 'Try all subsets of edges. Exponential.',
    opt_hint: 'O(E log E) Time, Kruskal\'s Algorithm',
    optimal: 'This is a Minimum Spanning Tree problem. Sort edges by weight and use Union-Find to build the tree without cycles.',
    space_hint: 'O(V) Space',
    space: 'Union-Find storage.',
    followup: 'How to handle mandatory edges? (Add them to the Union-Find first before processing other edges).'
  },
  {
    c: "Microsoft", t: "Count Binary Substrings", d: "Easy", f: 50, tp: "Binary Tree, Depth-First Search, Hash Table, Sliding Window, String, Tree",
    q: 'Given a binary string, return the number of non-empty substrings that have the same number of 0\'s and 1\'s, and all 0\'s and all 1\'s are grouped consecutively.',
    brute: 'Check every substring. O(N^3).',
    opt_hint: 'O(N) Time, Group Counting',
    optimal: 'Count the lengths of consecutive groups (e.g., \'001110\' -> [2, 3, 1]). For each adjacent pair (a, b) in the group lengths, they contribute `min(a, b)` valid substrings.',
    space_hint: 'O(1) Extra Space',
    space: 'Only track `prev_group_len` and `curr_group_len`.',
    followup: 'Why `min(a, b)`? (Because you can form palindromic-like \'0...01...1\' structures centered at the boundary up to the smaller group\'s size).'
  },
  {
    c: "Microsoft", t: "Longest String Chain", d: "Medium", f: 25, tp: "Hash Table, String",
    q: 'Given a list of words, find the longest word chain `w1, w2, ..., wk` where each word is a predecessor of the next (inserting 1 char).',
    brute: 'DFS exploring all possible chains. Exponential.',
    opt_hint: 'O(N log N + N * L^2) Time, DP on Sorted Words',
    optimal: 'Sort words by length. Use a HashMap `dp[word]` = longest chain ending at word. For each word, try deleting each char to find a predecessor in the map. `dp[word] = max(dp[pred]) + 1`.',
    space_hint: 'O(N * L) Space',
    space: 'HashMap storage.',
    followup: 'Why sort by length? (Because a word can only be a successor of a shorter word, ensuring predecessors are already in the DP map).'
  },
  {
    c: "Microsoft", t: "Maximum Palindromes After Operations", d: "Medium", f: 25, tp: "Hash Table, String",
    q: 'Given words, you can swap any two characters between any words. Return the maximum number of words you can make into palindromes.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, Greedy Character Counting',
    optimal: '1. Count total pairs of characters and remaining singletons across all words. 2. Sort words by length ascending. 3. Greedily fill each word with pairs. If length is odd, consume one singleton. If you run out of pairs, stop.',
    space_hint: 'O(1) Space',
    space: 'Fixed size frequency count.',
    followup: 'Why sort by length ascending? (To maximize the number of words by satisfying the shortest ones first, which require fewer character pairs).'
  },
  {
    c: "Microsoft", t: "Nth Highest Salary", d: "Medium", f: 25, tp: "Array, Hash Table",
    q: 'SQL: Find the nth highest salary from the Employee table.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, SQL LIMIT with OFFSET',
    optimal: 'SQL: `SET N = N - 1; RETURN (SELECT DISTINCT salary FROM Employee ORDER BY salary DESC LIMIT 1 OFFSET N);`',
    space_hint: 'O(N) Space',
    space: 'Sorting space.',
    followup: 'How to handle duplicates? (The `DISTINCT` keyword ensures the nth UNIQUE salary is returned).'
  },
  {
    c: "Microsoft", t: "Shortest Common Supersequence", d: "Hard", f: 25, tp: "Array, Hash Table",
    q: 'Given two strings, return the shortest string that has both as subsequences.',
    brute: 'Exponential exploration.',
    opt_hint: 'O(M*N) Time, LCS Backtracking',
    optimal: '1. Find the Longest Common Subsequence (LCS). 2. Build the result by adding characters from both strings while preserving the LCS characters exactly once at their respective positions.',
    space_hint: 'O(M*N) Space',
    space: 'DP table for LCS.',
    followup: 'Why LCS? (Because the common characters should be shared to minimize total length. Length = len(s1) + len(s2) - len(LCS)).'
  },
  {
    c: "Microsoft", t: "Largest Odd Number in String", d: "Easy", f: 25, tp: "Hash Table, String",
    q: 'Given a numeric string, return the largest odd integer that is a non-empty substring.',
    brute: 'Check every substring. O(N^2).',
    opt_hint: 'O(N) Time, Suffix Scan',
    optimal: 'Scan from right to left. The first odd digit found is the end of the largest odd number. Return the prefix ending at that digit.',
    space_hint: 'O(1) Space',
    space: 'No extra storage.',
    followup: 'Why only prefixes? (Because any odd number is defined by its last digit. Since it\'s a numeric string, the largest one will always start from the first digit and end at the rightmost odd digit).'
  },
  {
    c: "Microsoft", t: "Robot Bounded In Circle", d: "Medium", f: 25, tp: "Array, Hash Table",
    q: 'Given instructions G, L, R. Determine if the robot stays within a circle after infinite repetitions.',
    brute: 'Simulate 4 cycles. O(N).',
    opt_hint: 'O(N) Time, Final Position Check',
    optimal: 'Simulate one cycle. The robot is bounded if it returns to (0,0) OR it faces a direction other than North at the end of one cycle.',
    space_hint: 'O(1) Space',
    space: 'Only track (x, y) and direction.',
    followup: 'Why does facing a different direction guarantee a circle? (If it\'s not facing North, the robot will eventually rotate 90/180/270 degrees and return to the origin after 2 or 4 cycles).'
  },
  {
    c: "Microsoft", t: "Valid Perfect Square", d: "Easy", f: 25, tp: "Array, Hash Table",
    q: 'Check if a number is a perfect square without using built-in sqrt.',
    brute: 'Linear scan 1 to n. O(N).',
    opt_hint: 'O(log N) Time, Binary Search',
    optimal: 'Binary search between 1 and n. Compare `mid * mid` with `num`. (Or use Newton\'s Method: `x = (x + n/x) / 2`).',
    space_hint: 'O(1) Space',
    space: 'Only pointers.',
    followup: 'What is the trick with odd numbers? (A perfect square is the sum of the first n odd numbers: 1+3+5+... = n^2. You can subtract odds until you reach 0).'
  },
  {
    c: "Microsoft", t: "Set Intersection Size At Least Two", d: "Hard", f: 25, tp: "Array, Hash Table",
    q: 'Given intervals, find the minimum size of a set S that contains at least two integers from each interval.',
    brute: 'N/A.',
    opt_hint: 'O(N log N) Time, Greedy Sort',
    optimal: 'Sort by end time. Pick the two largest numbers in the current interval if needed. Maintain the two largest picked numbers and check if they satisfy the next interval.',
    space_hint: 'O(log N) Space',
    space: 'Sorting space.',
    followup: 'Why pick largest numbers? (Picking the largest numbers (the ones furthest to the right) maximizes the overlap with future intervals, satisfying them greedily).'
  },
  {
    c: "Microsoft", t: "Unique Length-3 Palindromic Subsequences", d: "Medium", f: 25, tp: "Dynamic Programming",
    q: 'Given a string, count unique length-3 palindromic subsequences.',
    brute: 'Check all `nC3` subsequences. O(N^3).',
    opt_hint: 'O(26 * N) Time, Fixed Centers',
    optimal: 'Length-3 palindromes are \'aba\'. For each unique char \'a\', find its first and last occurrence indices. Count unique characters between these two indices to find all valid \'b\' values.',
    space_hint: 'O(1) Space',
    space: 'Fixed storage for 26 characters\' ranges.',
    followup: 'Why only check first and last? (Because for a given character \'a\', any \'aba\' structure must have the two \'a\'s outside the \'b\' to form a length-3 palindrome).'
  },
  {
    c: "Microsoft", t: "Greatest Sum Divisible by Three", d: "Medium", f: 38, tp: "Array",
    q: 'Given array, find the maximum sum of elements such that the sum is divisible by three.',
    brute: 'Recursive exploration of all subsets. O(2^N).',
    opt_hint: 'O(N) Time, DP',
    optimal: '`dp[r]` = max sum with remainder `r` mod 3. Update `dp` for each number: `new_dp[(r + num) % 3] = max(new_dp, dp[r] + num)`.',
    space_hint: 'O(1) Space',
    space: 'DP array of size 3.',
    followup: 'Can you do it with sorting? (Yes — sum all, then subtract the smallest 1 or 2 numbers with remainder 1 or 2 if total remainder is not 0).'
  },
  {
    c: "Microsoft", t: "Department Top Three Salaries", d: "Hard", f: 25, tp: "Array, Hash Table",
    q: 'SQL: Find employees who are high earners in each department (top 3 unique salaries).',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, SQL DENSE_RANK',
    optimal: 'SQL: `SELECT d.name AS Department, e.name AS Employee, e.salary FROM Employee e JOIN Department d ON e.departmentId = d.id WHERE (SELECT COUNT(DISTINCT salary) FROM Employee e2 WHERE e2.salary > e.salary AND e2.departmentId = e.departmentId) < 3;`',
    space_hint: 'O(N) Space',
    space: 'Internal DB storage for grouping.',
    followup: 'What is the difference between RANK and DENSE_RANK? (DENSE_RANK doesn\'t skip numbers after ties, ensuring exactly the top 3 \'unique\' salary values are picked).'
  },
  {
    c: "Microsoft", t: "Kth Smallest Element in a Sorted Matrix", d: "Medium", f: 25, tp: "Array, Depth-First Search, Heap (Priority Queue), Matrix, Sorting",
    q: 'Given an n x n matrix where rows and cols are sorted, find the kth smallest element.',
    brute: 'Flatten and sort. O(N^2 log N).',
    opt_hint: 'O(N log(Max-Min)) Time, Binary Search on Answer',
    optimal: 'Binary search on the value range. For each `mid`, count elements <= `mid` using the staircase method in O(N). If count < k, search right.',
    space_hint: 'O(1) Space',
    space: 'Only pointers.',
    followup: 'Can you use a Heap? (Yes — push the first element of each row. Pop min, push next in row. O(K log N)).'
  },
  {
    c: "Microsoft", t: "Minimum Increments to Equalize Leaf Paths", d: "Medium", f: 25, tp: "Depth-First Search, Matrix",
    q: 'In a full binary tree, find min increments so all root-to-leaf paths have the same sum.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, Bottom-up Greedy',
    optimal: 'Traverse bottom-up. For each node, calculate the path sums of children. Increment the smaller child to match the larger. Update the current path sum and total operations.',
    space_hint: 'O(H) Space',
    space: 'Recursion stack.',
    followup: 'Why increment smaller child? (Because we want the minimum operations, so we only add what\'s necessary to equalize).'
  },
  {
    c: "Microsoft", t: "Smallest Integer Divisible by K", d: "Medium", f: 25, tp: "Array, Hash Table",
    q: 'Given K, find the length of the smallest positive integer n such that n contains only digit 1, and n is divisible by K.',
    brute: 'Test 1, 11, 111... until divisible. O(K).',
    opt_hint: 'O(K) Time, Pigeonhole Principle',
    optimal: 'Iterate `rem = (rem * 10 + 1) % K`. If `rem == 0`, return length. If a remainder repeats, no solution exists (return -1).',
    space_hint: 'O(K) Space',
    space: 'Set to track seen remainders.',
    followup: 'When is there no solution? (If K is divisible by 2 or 5, it cannot divide a number ending in 1).'
  },
  {
    c: "Microsoft", t: "Paths in Matrix Whose Sum Is Divisible by K", d: "Hard", f: 25, tp: "Array, Depth-First Search, Matrix",
    q: 'Given m x n grid and k. Find number of paths from top-left to bottom-right where sum is divisible by k.',
    brute: 'DFS exploring all paths. Exponential.',
    opt_hint: 'O(M * N * K) Time, 3D DP',
    optimal: '`dp[i][j][rem]` = paths to (i,j) with sum mod k = rem. `dp[i][j][(rem + val) % k] = dp[i-1][j][rem] + dp[i][j-1][rem]`.',
    space_hint: 'O(N * K) Space',
    space: '1D DP optimization on grid row.',
    followup: 'Why include K in DP? (Because we only care about the remainder mod K, limiting the state space to a manageable size).'
  },
  {
    c: "Microsoft", t: "Palindrome Pairs", d: "Hard", f: 25, tp: "Hash Table, String",
    q: 'Given unique strings, find all pairs (i, j) such that `words[i] + words[j]` is a palindrome.',
    brute: 'Check all pairs. O(N^2 * L).',
    opt_hint: 'O(N * L^2) Time, Trie or HashMap',
    optimal: 'For each word, split into prefix and suffix. If prefix is a palindrome, check if reverse(suffix) is in map. If suffix is a palindrome, check if reverse(prefix) is in map.',
    space_hint: 'O(N * L) Space',
    space: 'HashMap storage of all words.',
    followup: 'What are edge cases? (Empty string matches any palindrome; \'a\' matches \'aa\' via different splits).'
  },
  {
    c: "Microsoft", t: "Minimum Cost to Cut a Stick", d: "Hard", f: 25, tp: "Array, Hash Table",
    q: 'Given a stick of length n and cuts. Find min cost to make all cuts (cost of cut = length of stick).',
    brute: 'Try all cut orders. O(N!).',
    opt_hint: 'O(M^3) Time, Range DP',
    optimal: 'Sort cuts and add boundaries [0, n]. `dp[i][j]` = min cost for cuts between `cuts[i]` and `cuts[j]`. `dp[i][j] = min(dp[i][k] + dp[k][j]) + (cuts[j] - cuts[i])` for all i < k < j.',
    space_hint: 'O(M^2) Space',
    space: '2D DP table.',
    followup: 'Is this same as Optimal Binary Search Tree? (Yes, it\'s a classic range DP structure).'
  },
  {
    c: "Microsoft", t: "Construct Binary Search Tree from Preorder Traversal", d: "Medium", f: 25, tp: "Binary Search, Binary Tree, Depth-First Search, Tree",
    q: 'Return the root of a BST constructed from its preorder traversal.',
    brute: 'Insert every number into BST. O(N log N) or O(N^2) if skewed.',
    opt_hint: 'O(N) Time, Range Limits DFS',
    optimal: 'DFS with `(min, max)` limits. The next preorder element is the root if it fits in current limits. Recurse left with `(min, val)` and right with `(val, max)`.',
    space_hint: 'O(H) Space',
    space: 'Recursion stack.',
    followup: 'Can you do it with a stack? (Yes — O(N) iterative solution using a monotonic stack to find parents).'
  },
  {
    c: "Microsoft", t: "Decrypt String from Alphabet to Integer Mapping", d: "Easy", f: 25, tp: "Hash Table, String",
    q: 'Convert numeric mapping to letters. 1-9 -> a-i; 10#-26# -> j-z.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, Suffix Scan or Regex',
    optimal: 'Iterate with index i. If `i + 2 < len` and `s[i+2] == \'#\'`, treat `s[i:i+2]` as a double-digit letter and skip 3 chars. Else treat `s[i]` as single-digit.',
    space_hint: 'O(N) Space',
    space: 'Output string.',
    followup: 'Why check i+2 first? (To prioritize double-digit mappings like \'10#\' over the single digit \'1\' followed by \'0#\').'
  },
  {
    c: "Microsoft", t: "Find Words Containing Character", d: "Easy", f: 25, tp: "Binary Search, Hash Table, String",
    q: 'Given words and char x. Return indices of words containing x.',
    brute: 'N/A.',
    opt_hint: 'O(N * L) Time, Linear Scan',
    optimal: 'Iterate through words. If x in word, append index to result.',
    space_hint: 'O(N) Space',
    space: 'Result indices list.',
    followup: 'How to optimize? (Break internal word loop immediately after first occurrence is found).'
  },
  {
    c: "Microsoft", t: "Most Stones Removed with Same Row or Column", d: "Medium", f: 25, tp: "Array, Hash Table",
    q: 'A stone can be removed if it shares a row/col with another. Return max stones removed.',
    brute: 'N/A.',
    opt_hint: 'O(N) Time, Union-Find or DFS',
    optimal: 'Total stones removed = Total stones - Number of connected components. Union stones that share a row or column. Use `~row` as a key for columns to avoid collisions.',
    space_hint: 'O(N) Space',
    space: 'Union-Find storage.',
    followup: 'Why `Total - Components`? (In each component of size S, you can remove S-1 stones, leaving only 1 stone behind).'
  },
  {
    c: "Microsoft", t: "Count of Smaller Numbers After Self", d: "Hard", f: 25, tp: "Array, Hash Table",
    q: 'Given array, return count of numbers to the right that are strictly smaller.',
    brute: 'For each element, scan all elements to its right. O(N^2).',
    opt_hint: 'O(N log N) Time, Merge Sort or BIT',
    optimal: 'Modify Merge Sort. During merging two halves, if an element from right is moved, it means all remaining elements in left are larger than it. Use a Fenwick Tree / BIT on coordinate-compressed values for an easier approach.',
    space_hint: 'O(N) Space',
    space: 'Temporary arrays or BIT storage.',
    followup: 'Why merge sort? (Merge sort naturally tracks how many elements \'jump\' over another during sorting, which corresponds to the \'smaller after\' count).'
  },
  {
    c: "Microsoft", t: "Count Mentions Per User", d: "Medium", f: 25, tp: "Array, Hash Table",
    q: 'Simulate a chat system with \'MESSAGE\' and \'OFFLINE\' events. Count mentions for each user.',
    brute: 'N/A.',
    opt_hint: 'O(E log E + E * U) Time, Sorting + Simulation',
    optimal: '1. Sort events by timestamp (OFFLINE before MESSAGE for same time). 2. Track `offlineUntil[U]`. 3. Process messages: if \'ALL\', increment all; if \'HERE\', increment non-offline; if specific IDs, increment those.',
    space_hint: 'O(U) Space',
    space: 'Offline status and mention counts.',
    followup: 'What if timestamps are the same? (Process \'OFFLINE\' first to ensure accurate \'HERE\' mentions).'
  },
  {
    c: "Microsoft", t: "Number of Smooth Descent Periods of a Stock", d: "Medium", f: 25, tp: "Array, Hash Table",
    q: 'A smooth descent period is a period where prices decrease by 1 each day. Return the total number of smooth descent periods.',
    brute: 'Check every subarray. O(N^2).',
    opt_hint: 'O(N) Time, DP / Running Count',
    optimal: 'Maintain a running count `cur`. If `price[i] == price[i-1] - 1`, `cur++`. Else `cur = 1`. Sum all `cur` values into the result.',
    space_hint: 'O(1) Space',
    space: 'Only track running count and total sum.',
    followup: 'Is this same as counting contiguous subarrays? (Yes, if we treat the descent property as the grouping condition, each group of size k contributes `k*(k+1)/2` subarrays).'
  },
  {
    c: "Microsoft", t: "Detonate the Maximum Bombs", d: "Medium", f: 25, tp: "Array, Hash Table",
    q: 'You are given a list of bombs. Each bomb has a range. Detonating one bomb can trigger others within its range. Find the maximum number of bombs that can be detonated.',
    brute: 'N/A.',
    opt_hint: 'O(N^3) Time, Graph DFS',
    optimal: '1. Build a directed graph where an edge `u -> v` exists if bomb v is within range of bomb u. 2. For each bomb, run DFS to count how many bombs it can reach. Return the max count.',
    space_hint: 'O(N^2) Space',
    space: 'Adjacency list storage.',
    followup: 'Why directed? (Because bomb A might reach B, but bomb B\'s range might not reach A back).'
  },
  {
    c: "Microsoft", t: "Longest Nice Substring", d: "Easy", f: 25, tp: "Binary Tree, Depth-First Search, Hash Table, Sliding Window, String, Tree",
    q: 'A string is \'nice\' if for every letter it contains, it contains both its uppercase and lowercase forms. Return the longest nice substring.',
    brute: 'Check every substring. O(N^3).',
    opt_hint: 'O(N^2) Time, Divide & Conquer',
    optimal: 'If entire string is nice, return it. Else, find a character that is NOT nice (only appears in one case). Split the string by this character and recursively find the longest nice substring in each part.',
    space_hint: 'O(N) Space',
    space: 'Recursion stack.',
    followup: 'Can you do it in O(N)? (Yes, using sliding window with unique character counts (1 to 26), but divide and conquer is much simpler to implement).'
  },
  {
    c: "Microsoft", t: "Can Make Arithmetic Progression From Sequence", d: "Easy", f: 25, tp: "Array, Hash Table",
    q: 'Return true if the array can be rearranged to form an arithmetic progression.',
    brute: 'Sort and check differences. O(N log N).',
    opt_hint: 'O(N) Time, Math Invariants',
    optimal: 'Find `min`, `max`, and `diff = (max - min) / (n - 1)`. If `diff` isn\'t an integer, return false. Iterate and ensure every `min + i * diff` exists in a HashSet of the array.',
    space_hint: 'O(N) Space',
    space: 'HashSet storage.',
    followup: 'What if `diff == 0`? (That means all elements must be equal; check if all elements match the min).'
  },
  {
    c: "Apple", t: "Find the Celebrity", d: "Medium", f: 50, tp: "Binary Search",
    q: 'In a party, a celebrity knows no one, but everyone knows the celebrity. Given `knows(a, b)`, find the celebrity.',
    brute: 'Check every person. O(N^2) calls to `knows`.',
    opt_hint: 'O(N) Time, Elimination',
    optimal: '1. Assume person 0 is the candidate. 2. For each `i`, if `knows(candidate, i)`, then candidate is not a celebrity; `candidate = i`. 3. Verify the final candidate knows no one and everyone knows them.',
    space_hint: 'O(1) Space',
    space: 'Only tracking one candidate variable.',
    followup: 'Why does this work? (If A knows B, A is not a celebrity. If A doesn\'t know B, B is not a celebrity. Every call to `knows` eliminates one person).'
  },
  {
    c: "Apple", t: "Encode and Decode TinyURL", d: "Medium", f: 38, tp: "Dynamic Programming",
    q: 'Design a service like TinyURL. Convert a long URL to a short URL and vice versa.',
    brute: 'N/A.',
    opt_hint: 'O(1) Ops, HashMap + Random String',
    optimal: 'Generate a random 6-char string. Store `short -> long` and `long -> short` in two HashMaps. If collision occurs, generate a new random string.',
    space_hint: 'O(N) Space',
    space: 'Storage for all URL mappings.',
    followup: 'How to handle huge scale? (Use a distributed database and a counter-based encoding like Base62 to ensure unique IDs across servers).'
  },
  {
    c: "Apple", t: "Meeting Rooms", d: "Easy", f: 50, tp: "Heap (Priority Queue), Sorting",
    q: 'Given intervals, return true if a person could attend all meetings (no overlaps).',
    brute: 'Check every pair for overlap. O(N^2).',
    opt_hint: 'O(N log N) Time, Sorting',
    optimal: 'Sort by start time. Iterate and check if `intervals[i].start < intervals[i-1].end`. If so, return false.',
    space_hint: 'O(log N) Space',
    space: 'Sorting space.',
    followup: 'What is Meeting Rooms II? (Find min rooms needed; uses a Min-Heap of end times).'
  },
  {
    c: "Apple", t: "Interval List Intersections", d: "Medium", f: 38, tp: "Array, Linked List, Sorting, Two Pointers",
    q: 'Given two lists of closed intervals, return the intersection of these two interval lists.',
    brute: 'Check every pair from list A and list B. O(M * N).',
    opt_hint: 'O(M + N) Time, Two Pointers',
    optimal: 'Use two pointers i, j. Intersection starts at `max(startA, startB)` and ends at `min(endA, endB)`. If `start <= end`, it\'s valid. Increment the pointer for the interval that ends earlier.',
    space_hint: 'O(M + N) Space',
    space: 'Output list.',
    followup: 'Why increment the one that ends earlier? (Because the one that ends later could still intersect with the next interval in the other list).'
  },
  {
    c: "Apple", t: "Brace Expansion", d: "Medium", f: 38, tp: "Array, Hash Table",
    q: 'Given string `\'{a,b}c{d,e}f\'`, return all strings that can be formed (lexicographically sorted).',
    brute: 'N/A.',
    opt_hint: 'O(Total Combinations) Time, Backtracking',
    optimal: 'Parse the string into a list of groups (e.g. `[[\'a\', \'b\'], [\'c\'], [\'d\', \'e\'], [\'f\']]`). Perform DFS backtracking to build all possible strings. Sort groups first for lexicographical result.',
    space_hint: 'O(N) Space',
    space: 'Recursion stack and word list.',
    followup: 'What if braces are nested? (Brace Expansion II — requires a more complex stack-based parser to handle nested expansions and unions).'
  },
  {
    c: "Apple", t: "Design Browser History", d: "Medium", f: 38, tp: "Array, Hash Table",
    q: 'Implement `visit(url)`, `back(steps)`, and `forward(steps)`.',
    brute: 'Use a list. Forward/back take O(N) if we must copy.',
    opt_hint: 'O(1) Ops, Doubly Linked List or Two Stacks',
    optimal: 'Use an array and a pointer `curr`. `visit` overwrites forward history. `back` and `forward` just move the pointer.',
    space_hint: 'O(N) Space',
    space: 'History storage.',
    followup: 'Why an array over a Doubly Linked List? (Both are O(1). Array is easier to manage if you want to jump multiple steps instantly without traversing).'
  },
  {
    c: "Apple", t: "Maximum Frequency Stack", d: "Hard", f: 38, tp: "Stack",
    q: 'Implement a stack that pops the most frequent element. If ties, pop the one closest to the top.',
    brute: 'Scan the entire stack for the most frequent element. O(N) pop.',
    opt_hint: 'O(1) Ops, Frequency Map + Grouped Stacks',
    optimal: '1. `freq` map to track counts. 2. `group` map where `group[f]` is a stack of elements with frequency `f`. 3. `maxFreq` variable. To pop: pop from `group[maxFreq]`. If empty, decrement `maxFreq`.',
    space_hint: 'O(N) Space',
    space: 'Frequency map and all elements stored in stacks.',
    followup: 'Why use multiple stacks? (Because an element with frequency 3 was once at frequency 1 and 2. Keeping it in all frequency stacks ensures we can return to its \'previous state\' after popping).'
  }
];