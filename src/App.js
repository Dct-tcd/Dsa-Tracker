import "./App.css";
import Lister from "./components/Lister";
import Questions from "./components/Questions";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
function App() {
  // const [qstate, setqstate] = useState([]);

  const [Checked, setChecked] = useState([]);
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
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "2",
      Q: "Grid Unique Paths | Count paths from left-top to the right bottom of a matrix",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "3",
      Q: "Two Sum : Check if a pair with given sum exists in Array",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "4",
      Q: "Longest Consecutive Sequence in an Array",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "5",
      Q: "Length of the longest subarray with zero Sum",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "6",
      Q: "Length of Longest Substring without any Repeating Character",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "7",
      Q: "Count the number of subarrays with given xor K",
      done: "not",
    },
    {
      ID: "8",
      Q: "Merge Overlapping Sub-intervals",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "9",
      Q: "Merge two Sorted Arrays Without Extra Space",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "+10",
      Q: "Program to generate Pascal’s Triangle",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "+11",
      Q: "Next_permutation : find next lexicographically greater permutation",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "+12",
      Q: "Kadane’s Algorithm : Maximum Subarray Sum in an Array",
      done: "not",
    },
    {
      ID: "+13",
      Q: "Sort an array of 0s, 1s and 2s",
      status: "Incomplete",
      done: "not",
    },
  ];

  const greedyq = [
    { ID: "1", Q: "N meetings in one room", status: "Incomplete", done: "not" },
    {
      ID: "2",
      Q: "Minimum number of platforms required for a railway",
      status: "Incomplete",
      done: "not",
    },
    { ID: "3", Q: "Job Sequencing Problem", status: "Incomplete", done: "not" },
    {
      ID: "4",
      Q: "Fractional Knapsack Problem",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "5",
      Q: "Find minimum number of coins",
      status: "Incomplete",
      done: "not",
    },
  ];

  const dpq = [
    {
      ID: "1",
      Q: "Maximum Product Subarray in an Array",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "2",
      Q: "Longest Common Subsequence |",
      status: "Incomplete",
      done: "not",
    },
    { ID: "3", Q: "0/1 Knapsack ", status: "Incomplete", done: "not" },
    { ID: "4", Q: "Edit Distance", status: "Incomplete", done: "not" },
    { ID: "5", Q: "Rod Cutting Problem", status: "Incomplete", done: "not" },
    {
      ID: "6",
      Q: "Subset sum equal to target ",
      status: "Incomplete",
      done: "not",
    },
    { ID: "7", Q: "Coin Change 2", status: "Incomplete", done: "not" },
    {
      ID: "8",
      Q: "Minimum Path Sum In a Grid",
      status: "Incomplete",
      done: "not",
    },
  ];

  const Bsq = [
    {
      ID: "1",
      Q: "Nth Root of a Number using Binary Search",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "2",
      Q: "Search Single Element in a sorted array",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "3",
      Q: "Search Element in a Rotated Sorted Array",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "4",
      Q: "Median of Two Sorted Arrays of different sizes",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "5",
      Q: "K-th Element of two sorted arrays",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "6",
      Q: "Allocate Minimum Number of Pages",
      status: "Incomplete",
      done: "not",
    },
    { ID: "7", Q: "Aggressive Cows", status: "Incomplete", done: "not" },
  ];

  const heapq = [
    {
      ID: "1",
      Q: "Maximum Sum Combination",
      status: "Incomplete",
      done: "not",
    },
    { ID: "2", Q: "Kth Largest Element", status: "Incomplete", done: "not" },
    {
      ID: "3",
      Q: "Maximum sum Combination",
      status: "Incomplete",
      done: "not",
    },
    { ID: "4", Q: "Merge K sorted arrays", status: "Incomplete", done: "not" },
    {
      ID: "5",
      Q: "Find Median from Data Stream",
      status: "Incomplete",
      done: "not",
    },
  ];

  const recursionq = [
    {
      ID: "1",
      Q: "Subset Sum : Sum of all Subsets",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "2",
      Q: "Subset – II | Print all the Unique Subsets",
      status: "Incomplete",
      done: "not",
    },
    { ID: "3", Q: "Combination Sum – 1", status: "Incomplete", done: "not" },
    {
      ID: "4",
      Q: "Combination Sum II – Find all unique combinations",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "5",
      Q: "Palindrome Partitioning",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "6",
      Q: "Find K-th Permutation Sequence",
      status: "Incomplete",
      done: "not",
    },
  ];

  const llq = [
    {
      ID: "1",
      Q: "Check if given Linked List is Plaindrome",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "2",
      Q: "Reverse Linked List in groups of Size K",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "3",
      Q: "Detect a Cycle in a Linked List",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "4",
      Q: "Find intersection of Two Linked Lists",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "5",
      Q: "Starting point of loop in a Linked List",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "6",
      Q: "Flattening a Linked List",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "7",
      Q: "Merge two sorted Linked Lists",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "8",
      Q: "Remove N-th node from the end of a Linked List",
      status: "Incomplete",
      done: "not",
    },
  ];

  const Btq = [
    {
      ID: "1",
      Q: "Level Order Traversal of a Binary Tree",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "2",
      Q: "Maximum depth of a Binary Tree",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "3",
      Q: "Calculate the Diameter of a Binary Tree",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "4",
      Q: "Check if the Binary Tree is Balanced Binary Tree",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "5",
      Q: "Lowest Common Ancestor for two given Nodes",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "6",
      Q: "Check if two trees are identical",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "7",
      Q: "Boundary Traversal of a Binary Tree",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "8",
      Q: "Zig Zag Traversal Of Binary Tree",
      status: "Incomplete",
      done: "not",
    },
  ];

  const Bstq = [
    {
      ID: "1",
      Q: "Size of the largest BST in a Binary Tree",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "2",
      Q: "Find a pair with a given sum in BST",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "3",
      Q: "Populate Next Right pointers of Tree",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "4",
      Q: "Find LCA of two nodes in BST",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "5",
      Q: "Find the inorder predecessor/successor of a given Key in BST.",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "6",
      Q: "Kth largest/smallest element in Binary Search Tree",
      status: "Incomplete",
      done: "not",
    },
  ];

  const Sqtq = [
    {
      ID: "1",
      Q: "Implement Min Stack : O(2N) and O(N) Space Complexity",
      status: "Incomplete",
      done: "not",
    },
    { ID: "2", Q: "Sliding Window Maximum", status: "Incomplete", done: "not" },
    {
      ID: "3",
      Q: "Area of largest rectangle in Histogram",
      status: "Incomplete",
      done: "not",
    },
    { ID: "4", Q: "Implement LRU Cache", status: "Incomplete", done: "not" },
    {
      ID: "5",
      Q: "Implement Stack using single Queue",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "6",
      Q: "Check for Balanced Parentheses",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "7",
      Q: "Next Greater Element Using Stack",
      status: "Incomplete",
      done: "not",
    },
  ];

  const Backtrackingq = [
    {
      ID: "1",
      Q: "Rat in a Maze",
      status: "Incomplete",
      done: "not",
    },
    { ID: "2", Q: "M – Coloring Problem", status: "Incomplete", done: "not" },
    {
      ID: "3",
      Q: "Sudoku Solver",
      status: "Incomplete",
      done: "not",
    },
    { ID: "4", Q: "N Queen Problem | Return all Distinct Solutions to the N-Queens Puzzle", status: "Incomplete", done: "not" },
    {
      ID: "5",
      Q: "Print All Permutations of a String/Array",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "6",
      Q: "Word Break (print all ways)",
      status: "Incomplete",
      done: "not",
    },
  ];

  const Graphq = [
    {
      ID: "1",
      Q: "Detect Cycle in an Undirected Graph (using BFS)",
      status: "Incomplete",
      done: "not",
    },
    { ID: "2", Q: "Topological Sort (BFS)", status: "Incomplete", done: "not" },
    {
      ID: "3",
      Q: "Number of Distinct Islands",
      status: "Incomplete",
      done: "not",
    },
    { ID: "4", Q: "Bipartite Graph ", status: "Incomplete", done: "not" },
    {
      ID: "5",
      Q: "Detect a Cycle in Directed Graph | Topological Sort | Kahn’s Algorithm ",
      status: "Incomplete",
      done: "not",
    },
    {
      ID: "6",
      Q: "Print Shortest Path – Dijkstra’s Algorithm",
      status: "Incomplete",
      done: "not",
    },
  ];

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path=""
            element={
              <Lister
                Checked={Checked}
                Checked1={Checked1}
                Checked2={Checked2}
                Checked3={Checked3}
                Checked4={Checked4}
                Checked5={Checked5}
                name="Array"
              />
            }
          ></Route>

          <Route
            exact
            path="/Array"
            element={<Questions Checked={Checked} no={""} setChecked={setChecked}  qlist={arrayq} name="Array"/>}
          ></Route>

          <Route
            exact
            path="/Greedy"
            element={<Questions Checked={Checked1} no={"1"} setChecked={setChecked1} qlist={greedyq} name="Greedy"/>}
          ></Route>

          <Route
            exact
            path="/Dynamic Programming"
            element={<Questions Checked={Checked2} no={"2"} setChecked={setChecked2}  qlist={dpq} name="Dynamic Programming"/>}
          ></Route>

          <Route
            exact
            path="/Binary search"
            element={<Questions Checked={Checked3} no={"3"} setChecked={setChecked3} qlist={Bsq} name="Binary Search"/>}
          ></Route>

          <Route
            exact
            path="/Heaps"
            element={<Questions Checked={Checked4} no={"4"} setChecked={setChecked4} qlist={heapq} name="Heap" />}
          ></Route>

          <Route
            exact
            path="/Recursion"
            element={<Questions Checked={Checked5} no={"5"} setChecked={setChecked5} qlist={recursionq} name="Recursion"/>}
          ></Route>

          <Route
            exact
            path="/Linked list"
            element={<Questions Checked={Checked6} no={"6"} setChecked={setChecked6} qlist={llq} name="Linked List"/>}
          ></Route>

          <Route
            exact
            path="/Binary Tree"
            element={<Questions Checked={Checked7} no={"7"} setChecked={setChecked7} qlist={Btq} name="Binary Tree"/>}
          ></Route>

          <Route
            exact
            path="/Binary Search Tree"
            element={<Questions Checked={Checked8} no={"8"} setChecked={setChecked8} qlist={Bstq} name="Binary Search Tree"/>}
          ></Route>

          <Route
            exact
            path="/Stack and Queue"
            element={<Questions Checked={Checked9} no={"9"} setChecked={setChecked9} qlist={Sqtq} name="Stack and Queue"/>}
          ></Route>

          <Route
            exact
            path="/Backtracking"
            element={<Questions Checked={Checked10} no={"10"} setChecked={setChecked10} qlist={Backtrackingq} name="Backtracking"/>}
          ></Route>

          
            <Route
            exact
            path="/Graphs"
            element={<Questions Checked={Checked11} no={"11"} setChecked={setChecked11} qlist={Graphq} name="Graphs"/>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
