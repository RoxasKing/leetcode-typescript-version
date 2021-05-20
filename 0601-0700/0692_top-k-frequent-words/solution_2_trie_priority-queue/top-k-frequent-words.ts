/*
  Given a non-empty list of words, return the k most frequent elements.

  Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

  Example 1:
    Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
    Output: ["i", "love"]
    Explanation: "i" and "love" are the two most frequent words.
        Note that "i" comes before "love" due to a lower alphabetical order.

  Example 2:
    Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
    Output: ["the", "is", "sunny", "day"]
    Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
        with the number of occurrence being 4, 3, 2 and 1 respectively.

  Note:
    1. You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
    2. Input words contain only lowercase letters.

  Follow up:
    Try to solve it in O(n log k) time and O(n) extra space.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/top-k-frequent-words
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Trie
// Priority Queue

function topKFrequent(words: string[], k: number): string[] {
    let t = new Trie()
    let arr: Trie[] = []
    for (let word of words) {
        let ret = t.insert(word)
        if (ret !== null) { arr.push(ret) }
    }

    let pq = new PriorityQueue((a: wordFreq, b: wordFreq) => {
        if (a.freq != b.freq) { return a.freq < b.freq }
        return a.word > b.word
    })

    for (let t of arr) {
        pq.push(new wordFreq(t.word, t.freq))
        if (pq.len() > k) { pq.pop() }
    }

    pq.q.sort((a, b) => {
        if (a.freq != b.freq) { return (a.freq > b.freq) ? -1 : (a.freq < b.freq) ? 1 : 0 }
        return (a.word < b.word) ? -1 : (a.word > b.word) ? 1 : 0
    })

    let out = []
    for (let wf of pq.q) {
        out.push(wf.word)
    }
    return out
}

class Trie {
    child: Trie[]
    word: string = ''
    freq: number = 0

    constructor() {
        this.child = new Array<Trie>(26)
    }

    insert(word: string): Trie | null {
        let t = this as Trie
        for (let i = 0; i < word.length; i++) {
            let idx = word.charCodeAt(i) - 97
            if (t.child[idx] == null) {
                t.child[idx] = new Trie()
            }
            t = t.child[idx] as Trie
        }

        let out: (Trie | null) = t
        if (t.freq !== 0) { out = null }

        t.word = word
        t.freq++

        return out
    }
}

class wordFreq {
    word: string
    freq: number

    constructor(word: string, freq: number) {
        this.word = word
        this.freq = freq
    }
}

class PriorityQueue {
    q: wordFreq[] = []
    compareFunc: (a: wordFreq, b: wordFreq) => boolean

    constructor(compareFunc: (a: wordFreq, b: wordFreq) => boolean) {
        this.compareFunc = compareFunc
    }

    len(): number {
        return this.q.length
    }

    up() {
        let son = this.len() - 1
        while (son > 0) {
            let parent = (son - 1) >> 1
            if (!this.compareFunc(this.q[son], this.q[parent])) { return }
            [this.q[parent], this.q[son]] = [this.q[son], this.q[parent]]
            son = parent
        }
    }

    down() {
        let parent = 0
        while (parent < (this.len() >> 1)) {
            let son = (parent << 1) + 1
            if (son > this.len() - 1) { return }
            if (son + 1 < this.len() && this.compareFunc(this.q[son + 1], this.q[son])) { son++ }
            if (!this.compareFunc(this.q[son], this.q[parent])) { return }
            [this.q[parent], this.q[son]] = [this.q[son], this.q[parent]]
            parent = son
        }
    }

    top(): wordFreq {
        return this.q[0]
    }

    push(x: wordFreq) {
        this.q.push(x)
        this.up()
    }

    pop(): wordFreq {
        let last = this.len() - 1;
        [this.q[0], this.q[last]] = [this.q[last], this.q[0]]
        let out = this.q.pop() as wordFreq
        this.down()
        return out
    }
}

export { topKFrequent }
