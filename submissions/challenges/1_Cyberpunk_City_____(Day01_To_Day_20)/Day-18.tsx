import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Day18MazePage() {
  const [showStory, setShowStory] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showJoke, setShowJoke] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white p-8">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-center text-purple-400 drop-shadow-lg"
      >
        Day 18: The Maze of Recursion
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center text-lg mt-4 text-indigo-300"
      >
        🔄🌀 Unfolding the Nested Paths
      </motion.p>

      <div className="mt-10 grid gap-6 max-w-4xl mx-auto">
        <Card className="bg-opacity-20 backdrop-blur-sm border border-purple-500 shadow-xl">
          <CardContent className="p-6">
            <Button variant="secondary" onClick={() => setShowStory(!showStory)}>
              {showStory ? "Hide Story" : "Read the Story 📜"}
            </Button>
            {showStory && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-sm text-gray-300"
              >
                After crossing the Fibonacci Path, you enter a mystic maze of recursion. Echo whispers:
                <br />
                <em>
                  “This is no ordinary labyrinth. Each layer unfolds into another. Your task is to measure how
                  deep the maze goes.”
                </em>
              </motion.div>
            )}
          </CardContent>
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-black/40 p-6 rounded-2xl border border-indigo-600 shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">🎯 Challenge</h2>
          <p>
            Write a recursive function to calculate the <strong>maximum depth</strong> of a nested list structure.
          </p>
          <ul className="list-disc list-inside mt-4 text-sm text-indigo-200">
            <li>Flat list like <code>[1, 2, 3]</code> has depth 1.</li>
            <li><code>[1, [2, 3]]</code> has depth 2.</li>
            <li><code>[1, [2, [3, [4]]]]</code> has depth 4.</li>
          </ul>
        </motion.div>

        <Card className="bg-opacity-10 backdrop-blur-md border border-indigo-500">
          <CardContent className="p-6">
            <h3 className="text-xl font-medium text-purple-200 mb-2">💻 Sample Code (Python)</h3>
            <pre className="bg-black/40 p-4 rounded-md text-green-400 overflow-auto text-sm">
{`def find_depth(structure):
  if not isinstance(structure, list):
    return 0
  elif not structure:
    return 1
  else:
    return 1 + max(find_depth(item) for item in structure)

maze = [1, [2, [3, [4]]]]
print("The maze has a depth of", find_depth(maze))`}
            </pre>
          </CardContent>
        </Card>

        <Card className="bg-opacity-10 backdrop-blur-md border border-purple-500">
          <CardContent className="p-6">
            <Button variant="outline" onClick={() => setShowHint(!showHint)}>
              {showHint ? "Hide Hint" : "Show Hint 💡"}
            </Button>
            {showHint && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-sm text-gray-300"
              >
                Use recursion to check each element. If it's a list, go deeper. Keep track of the deepest level.
              </motion.div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-opacity-10 backdrop-blur-md border border-yellow-500">
          <CardContent className="p-6 text-center">
            <Button variant="ghost" onClick={() => setShowJoke(!showJoke)}>
              {showJoke ? "Hide Echo’s Joke" : "😂 Echo’s Dad Joke"}
            </Button>
            {showJoke && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-yellow-200"
              >
                <em>"Why did the recursive function get a headache? Because it couldn’t stop calling itself!"</em>
              </motion.p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
