import "./App.css";
import Lister from "./components/Lister";
import Questions from "./components/Questions";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
function App() {

  const [mode, setmode] = useState("light")
    
  const [Checked12, setChecked12] = useState([]);
  const [Checked1, setChecked1] = useState([]);
  const [Checked2, setChecked2] = useState([]);
  const [Checked3, setChecked3] = useState([]);
  const [Checked4, setChecked4] = useState([]);
  const [Checked5, setChecked5] = useState([]);
  const [Checked6, setChecked6] = useState([]);
  const [Checked7, setChecked7] = useState([]);
  const [Checked8, setChecked8] = useState([]);
  const [Checked9, setChecked9] = useState([]);
  const [Checked10, setChecked10] = useState([]);
  const [Checked11, setChecked11] = useState([]);
const [progress, setprogress] = useState(0);
  
const [qstate, setqstate] = useState(localStorage.getItem("qstate"));

  useEffect(() => {
    localStorage.setItem("qstate", qstate);
  }, [qstate]);

  const [qstate2, setqstate2] = useState(localStorage.getItem("qstate2"));

  useEffect(() => {
    localStorage.setItem("qstate2", qstate2);
  }, [qstate2]);

  const arrayq = [
    {
      ID: "1",
      Q: "Search in a sorted 2D matrix",
      link: "https://leetcode.com/problems/search-a-2d-matrix/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "2",
      Q: "Grid Unique Paths | Count paths from left-top to the right bottom of a matrix",
      link: "https://leetcode.com/problems/unique-paths/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "3",
      Q: "Two Sum : Check if a pair with given sum exists in Array",
      link: "https://leetcode.com/problems/two-sum/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "4",
      Q: "Longest Consecutive Sequence in an Array",
      link: "https://leetcode.com/problems/longest-consecutive-sequence/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "5",
      Q: "Length of the longest subarray with zero Sum",
      link: "https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "6",
      Q: "Length of Longest Substring without any Repeating Character",
      link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "7",
      Q: "Count the number of subarrays with given xor K",
      link: "https://www.interviewbit.com/problems/subarray-with-given-xor/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "8",
      Q: "Merge Overlapping Sub-intervals",
      link: "https://leetcode.com/problems/merge-intervals/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "9",
      Q: "Merge two Sorted Arrays Without Extra Space",
      link: "https://leetcode.com/problems/merge-sorted-array/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "+10",
      Q: "Program to generate Pascal’s Triangle",
      link: "https://leetcode.com/problems/pascals-triangle/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "+11",
      Q: "Next_permutation : find next lexicographically greater permutation",
      link: "https://leetcode.com/problems/next-permutation/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "+12",
      Q: "Kadane’s Algorithm : Maximum Subarray Sum in an Array",
      link: "https://leetcode.com/problems/maximum-subarray/",
      done: "not",
    },
    {
      ID: "+13",
      Q: "Sort an array of 0s, 1s and 2s",
      link: "https://leetcode.com/problems/sort-colors/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "+14",
      Q: "Grid Unique Paths",
      link: "https://leetcode.com/problems/unique-paths/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "+15",
      Q: "Reverse Pairs",
      link: "https://leetcode.com/problems/reverse-pairs/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "+16",
      Q: "Pow(x,n) : Find X raised to the power N",
      link: "https://leetcode.com/problems/powx-n/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "+17",
      Q: "4 Sum problem",
      link: "https://leetcode.com/problems/4sum/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "+18",
      Q: "Max consecutive Ones",
      link: "https://leetcode.com/problems/max-consecutive-ones/",
      status: "Incomplete",
      done: "not",
    },
  ];

  const greedyq = [
    { ID: "1", 
    Q: "N meetings in one room", 
    link:"https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1",
    status: "Incomplete",
     done: "not" },
    {
      ID: "2",
      Q: "Minimum number of platforms required for a railway",
      link:"https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1#",
      status: "Incomplete",
      done: "not",
    },
    { ID: "3", 
    Q: "Job Sequencing Problem", 
    link:"https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1#",
    status: "Incomplete", 
    done: "not" },
    {
      ID: "4",
      Q: "Fractional Knapsack Problem",
      link:"https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "5",
      Q: "Find minimum number of coins",
      link:"https://www.geeksforgeeks.org/find-minimum-number-of-coins-that-make-a-change/",
      status: "Incomplete",
      done: "not",
    },
  ];

  const dpq = [
    {
      ID: "1",
      Q: "Maximum Product Subarray in an Array",
      link:"https://leetcode.com/problems/maximum-product-subarray/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "2",
      Q: "Longest Common Subsequence |",
      link:"https://leetcode.com/problems/longest-increasing-subsequence/",
      status: "Incomplete",
      done: "not",
    },
    { ID: "3", 
    Q: "0/1 Knapsack ", 
    link:"https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1",
    status: "Incomplete", 
    done: "not" 
  },
    { ID: "4", 
    Q: "Edit Distance",
    link:"https://leetcode.com/problems/edit-distance/",
     status: "Incomplete", 
     done: "not"
     },
    { ID: "5", 
    Q: "Rod Cutting Problem", 
    link:"https://leetcode.com/problems/minimum-cost-to-cut-a-stick/",
    status: "Incomplete", 
    done: "not" 
  },
    {
      ID: "6",
      Q: "Subset sum equal to target ",
      link:"https://leetcode.com/problems/partition-equal-subset-sum/",
      status: "Incomplete",
      done: "not",
    },
    { ID: "7", 
    Q: "Coin Change 2", 
    link:"https://leetcode.com/problems/coin-change/",
    status: "Incomplete", 
    done: "not" 
  },
    {
      ID: "8",
      Q: "Minimum Path Sum In a Grid",
      link:"https://leetcode.com/problems/minimum-path-sum/",
      status: "Incomplete",
      done: "not",
    },
  ];

  const Bsq = [
    {
      ID: "1",
      Q: "Nth Root of a Number using Binary Search", 
      link:"https://bit.ly/3rj7Ib1",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "2",
      Q: "Search Single Element in a sorted array", 
      link:"https://leetcode.com/problems/single-element-in-a-sorted-array/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "3",
      Q: "Search Element in a Rotated Sorted Array", 
      link:"https://leetcode.com/problems/search-in-rotated-sorted-array/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "4",
      Q: "Median of Two Sorted Arrays of different sizes", 
      link:"https://leetcode.com/problems/median-of-two-sorted-arrays/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "5",
      Q: "K-th Element of two sorted arrays", 
      link:"https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "6",
      Q: "Allocate Minimum Number of Pages", 
      link:"https://www.interviewbit.com/problems/allocate-books/",
      status: "Incomplete",
      done: "not",
    },
    { ID: "7", 
    Q: "Aggressive Cows",  
    link:"https://www.spoj.com/problems/AGGRCOW/",
    status: "Incomplete", 
    done: "not" },
  ];

  const heapq = [
    {
      ID: "1",
      Q: "Maximum Sum Combination",
      link: "https://www.interviewbit.com/problems/maximum-sum-combinations/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "2",
      Q: "Kth Largest Element",
      link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "3",
      Q: "Top K frequent elements",
      link: "https://leetcode.com/problems/top-k-frequent-elements/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "4",
      Q: "Merge K sorted arrays",
      link: "https://www.codingninjas.com/codestudio/problems/merge-k-sorted-arrays_975379",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "5",
      Q: "Find Median from Data Stream",
      link: "https://leetcode.com/problems/find-median-from-data-stream/",
      status: "Incomplete",
      done: "not",
    },
  ];

  const recursionq = [
    {
      ID: "1",
      Q: "Subset Sum : Sum of all Subsets",
      link: "https://practice.geeksforgeeks.org/problems/subset-sums2234/1",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "2",
      Q: "Subset – II | Print all the Unique Subsets",
      link: "https://leetcode.com/problems/subsets-ii/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "3",
      Q: "Combination Sum – 1",
      link: "https://leetcode.com/problems/combination-sum/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "4",
      Q: "Combination Sum II – Find all unique combinations",
      link: "https://leetcode.com/problems/combination-sum-ii/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "5",
      Q: "Palindrome Partitioning",
      link: "https://leetcode.com/problems/palindrome-partitioning/",

      status: "Incomplete",
      done: "not",
    },
    {
      ID: "6",
      Q: "Find K-th Permutation Sequence",
      link: "https://leetcode.com/problems/permutation-sequence/",
      status: "Incomplete",
      done: "not",
    },
  ];

  const llq = [
    {
      ID: "1",
      Q: "Check if given Linked List is Plaindrome",
      link: "https://leetcode.com/problems/palindrome-linked-list/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "2",
      Q: "Reverse Linked List in groups of Size K",
      link: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "3",
      Q: "Detect a Cycle in a Linked List",
      link: "https://leetcode.com/problems/linked-list-cycle/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "4",
      Q: "Find intersection of Two Linked Lists",
      link: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "5",
      Q: "Starting point of loop in a Linked List",
      link: "https://leetcode.com/problems/linked-list-cycle-ii/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "6",
      Q: "Flattening a Linked List",
      link: "https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "7",
      Q: "Merge two sorted Linked Lists",
      link: "https://leetcode.com/problems/merge-two-sorted-lists/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "8",
      Q: "Remove N-th node from the end of a Linked List",
      link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
      status: "Incomplete",
      done: "not",
    },
  ];

  const Btq = [
    {
      ID: "1",
      Q: "Level Order Traversal of a Binary Tree",
      link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "2",
      link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      Q: "Maximum depth of a Binary Tree",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "3",
      link: "https://leetcode.com/problems/diameter-of-binary-tree/",
      Q: "Calculate the Diameter of a Binary Tree",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "4",
      link: "https://leetcode.com/problems/balanced-binary-tree/",
      Q: "Check if the Binary Tree is Balanced Binary Tree",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "5",
      link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
      Q: "Lowest Common Ancestor for two given Nodes",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "6",
      link: "https://leetcode.com/problems/same-tree/",
      Q: "Check if two trees are identical",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "7",
      link: "https://leetcode.com/problems/boundary-of-binary-tree/#",
      Q: "Boundary Traversal of a Binary Tree",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "8",
      link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
      Q: "Zig Zag Traversal Of Binary Tree",
      status: "Incomplete",
      done: "not",
    },
  ];

  const Bstq = [
    {
      ID: "1",
      Q: "Size of the largest BST in a Binary Tree",
      link:"https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "2",
      Q: "Find a pair with a given sum in BST",
      link:"https://leetcode.com/problems/two-sum-iv-input-is-a-bst/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "3",
      Q: "Populate Next Right pointers of Tree",
      link:"https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "4",
      Q: "Find LCA of two nodes in BST",
      link:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "5",
      Q: "Find the inorder predecessor/successor of a given Key in BST.",
      link:"https://practice.geeksforgeeks.org/problems/predecessor-and-successor/1",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "6",
      Q: "Kth largest element in Binary Search Tree",
      link:"https://practice.geeksforgeeks.org/problems/kth-largest-element-in-bst/1",
      status: "Incomplete",
      done: "not",
    },
  ];

  const Sqtq = [
    {
      ID: "1",
      Q: "Implement Min Stack : O(2N) and O(N) Space Complexity",
      link: "https://leetcode.com/problems/min-stack/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "2",
      Q: "Sliding Window Maximum",
      link: "https://leetcode.com/problems/sliding-window-maximum/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "3",
      Q: "Area of largest rectangle in Histogram",
      link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "4",
      Q: "Implement LRU Cache",
      link: "https://leetcode.com/problems/lru-cache/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "5",
      Q: "Implement Stack using single Queue",
      link: "https://leetcode.com/problems/implement-stack-using-queues/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "6",
      Q: "Check for Balanced Parentheses",
      link: "https://leetcode.com/problems/valid-parentheses/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "7",
      Q: "Next Greater Element Using Stack",
      link: "https://leetcode.com/problems/next-greater-element-ii/description/",
      status: "Incomplete",
      done: "not",
    },
  ];

  const Backtrackingq = [
    {
      ID: "1",
      Q: "Rat in a Maze",
      link: "https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "2",
      Q: "M – Coloring Problem",
      link: "https://practice.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1#",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "3",
      Q: "Sudoku Solver",
      link: "https://leetcode.com/problems/sudoku-solver/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "4",
      Q: "N Queen Problem | Return all Distinct Solutions to the N-Queens Puzzle",
      link: "https://leetcode.com/problems/n-queens/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "5",
      Q: "Print All Permutations of a String/Array",
      link: "https://leetcode.com/problems/permutations/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "6",
      Q: "Word Break (print all ways)",
      link: "https://bit.ly/3FxgW92",
      status: "Incomplete",
      done: "not",
    },
  ];

  const Graphq = [
    {
      ID: "1",
      Q: "Detect Cycle in an Undirected Graph (using BFS)", 
      link:"https://leetcode.com/problems/course-schedule/",
      status: "Incomplete",
      done: "not",
    },
    { ID: "2", 
    Q: "Topological Sort (BFS)",  
    link:"https://practice.geeksforgeeks.org/problems/topological-sort/1",
    status: "Incomplete", 
    done: "not" 
  },
    {
      ID: "3",
      Q: "Number of Distinct Islands", 
      link:"https://leetcode.com/problems/number-of-islands/",
      status: "Incomplete",
      done: "not",
    },
    { ID: "4", 
    Q: "Bipartite Graph ",  
    link:"https://leetcode.com/problems/is-graph-bipartite/",
    status: "Incomplete", 
    done: "not" 
  },
    {
      ID: "5",
      Q: "Detect a Cycle in Directed Graph | Topological Sort | Kahn’s Algorithm ", 
      link:"https://leetcode.com/problems/course-schedule/",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "6",
      Q: "Print Shortest Path – Dijkstra’s Algorithm", 
      link:"https://practice.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1",
      status: "Incomplete",
      done: "not",
    },
  ];

  return (
    <> 
   
      <Router>
        <Navbar mode={mode} setmode={setmode}/>
        <Routes> 
          <Route
            exact
            path=""
            element={
              <Lister
                setprogress={setprogress}
                progress={progress}
                Checked12={Checked12}
                Checked1={Checked1}
                Checked2={Checked2}
                Checked3={Checked3}
                Checked4={Checked4}
                Checked5={Checked5}
                name="Array"
                mode={mode}
              />
            }
          ></Route>

          <Route
            exact
            path="/Array"
            element={
              <Questions
                Checked={Checked12}
                no={"12"}
                setChecked={setChecked12}
                mode={mode}
                qlist={arrayq}
                name="Array"
              />
            }
          ></Route>

          <Route
            exact
            path="/Greedy"
            element={
              <Questions
                Checked={Checked1}
                no={"1"}
                setChecked={setChecked1}
                mode={mode}
                qlist={greedyq}
                name="Greedy"
              />
            }
          ></Route>

          <Route
            exact
            path="/Dynamic Programming"
            element={
              <Questions
                Checked={Checked2}
                no={"2"}
                setChecked={setChecked2}
                mode={mode}
                qlist={dpq}
                name="Dynamic Programming"
              />
            }
          ></Route>

          <Route
            exact
            path="/Binary search"
            element={
              <Questions
                Checked={Checked3}
                no={"3"}
                setChecked={setChecked3}
                mode={mode}
                qlist={Bsq}
                name="Binary Search"
              />
            }
          ></Route>

          <Route
            exact
            path="/Heaps"
            element={
              <Questions
                Checked={Checked4}
                no={"4"}
                setChecked={setChecked4}
                mode={mode}
                qlist={heapq}
                name="Heap"
              />
            }
          ></Route>

          <Route
            exact
            path="/Recursion"
            element={
              <Questions
                Checked={Checked5}
                no={"5"}
                setChecked={setChecked5}
                mode={mode}
                qlist={recursionq}
                name="Recursion"
              />
            }
          ></Route>

          <Route
            exact
            path="/Linked list"
            element={
              <Questions
                Checked={Checked6}
                no={"6"}
                setChecked={setChecked6}
                mode={mode}
                qlist={llq}
                name="Linked List"
              />
            }
          ></Route>

          <Route
            exact
            path="/Binary Tree"
            element={
              <Questions
                Checked={Checked7}
                no={"7"}
                setChecked={setChecked7}
                mode={mode}
                qlist={Btq}
                name="Binary Tree"
              />
            }
          ></Route>

          <Route
            exact
            path="/Binary Search Tree"
            element={
              <Questions
                Checked={Checked8}
                no={"8"}
                setChecked={setChecked8}
                mode={mode}
                qlist={Bstq}
                name="Binary Search Tree"
              />
            }
          ></Route>

          <Route
            exact
            path="/Stack and Queue"
            element={
              <Questions
                Checked={Checked9}
                no={"9"}
                setChecked={setChecked9}
                mode={mode}
                qlist={Sqtq}
                name="Stack and Queue"
              />
            }
          ></Route>

          <Route
            exact
            path="/Backtracking"
            element={
              <Questions
                Checked={Checked10}
                no={"10"}
                setChecked={setChecked10}
                mode={mode}
                qlist={Backtrackingq}
                name="Backtracking"
              />
            }
          ></Route>

          <Route
            exact
            path="/Graphs"
            element={
              <Questions
                Checked={Checked11}
                no={"11"}
                setChecked={setChecked11}
                mode={mode}
                qlist={Graphq}
                name="Graphs"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
