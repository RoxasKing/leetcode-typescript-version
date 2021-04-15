/*
  A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

  Implement the Trie class:
    1. Trie() Initializes the trie object.
    2. void insert(String word) Inserts the string word into the trie.
    3. boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
    4. boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

  Example 1:
    Input
      ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
      [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
    Output
      [null, null, true, false, true, null, true]
    Explanation
      Trie trie = new Trie();
      trie.insert("apple");
      trie.search("apple");   // return True
      trie.search("app");     // return False
      trie.startsWith("app"); // return True
      trie.insert("app");
      trie.search("app");     // return True

  Constraints:
    1. 1 <= word.length, prefix.length <= 2000
    2. word and prefix consist only of lowercase English letters.
    3. At most 3 * 10^4 calls in total will be made to insert, search, and startsWith.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/implement-trie-prefix-tree
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Trie

class Trie {
    next: (Trie | null)[] = new Array(26).fill(null)
    isEnd: boolean = false

    constructor() { }

    insert(word: string): void {
        let node = this as Trie
        for (let i = 0; i < word.length; i++) {
            let idx = word.charCodeAt(i) - 97
            if (node.next[idx] === null) {
                node.next[idx] = new Trie()
            }
            node = node.next[idx] as Trie
        }
        node.isEnd = true
    }

    search(word: string): boolean {
        let node = this as Trie
        for (let i = 0; i < word.length; i++) {
            let idx = word.charCodeAt(i) - 97
            if (node.next[idx] === null) {
                return false
            }
            node = node.next[idx] as Trie
        }
        return node.isEnd
    }

    startsWith(prefix: string): boolean {
        let node = this as Trie
        for (let i = 0; i < prefix.length; i++) {
            let idx = prefix.charCodeAt(i) - 97
            if (node.next[idx] === null) {
                return false
            }
            node = node.next[idx] as Trie
        }
        return true
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

export { Trie }
