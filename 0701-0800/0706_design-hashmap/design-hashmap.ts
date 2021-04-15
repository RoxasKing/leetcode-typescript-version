/*
  Design a HashMap without using any built-in hash table libraries.

  Implement the MyHashMap class:
    1. MyHashMap() initializes the object with an empty map.
    2. void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
    3. int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
    4. void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.

  Example 1:
    Input
      ["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
      [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
    Output
      [null, null, null, 1, -1, null, 1, null, -1]
    Explanation
      MyHashMap myHashMap = new MyHashMap();
      myHashMap.put(1, 1); // The map is now [[1,1]]
      myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
      myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
      myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
      myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
      myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
      myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
      myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]

  Constraints:
    1. 0 <= key, value <= 10^6
    2. At most 10^4 calls will be made to put, get, and remove.

  Follow up: Please do not use the built-in HashMap library.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/design-hashmap
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

class MyHashMap {
    b: (bucket | undefined)[] = new Array<bucket | undefined>(1001).fill(undefined)

    constructor() { }

    put(key: number, value: number): void {
        let i = Math.floor(key / 1000), j = key % 1000
        if (this.b[i] === undefined) {
            this.b[i] = new bucket()
        }
        (this.b[i] as bucket).h[j] = value;
        (this.b[i] as bucket).valid[j] = true;
        (this.b[i] as bucket).cnt++
    }

    get(key: number): number {
        let i = Math.floor(key / 1000), j = key % 1000
        if (!this.b[i]?.valid[j]) { return -1 }
        return this.b[i]?.h[j] as number
    }

    remove(key: number): void {
        let i = Math.floor(key / 1000), j = key % 1000
        if (!this.b[i]?.valid[j]) { return }
        (this.b[i] as bucket).valid[j] = false;
        (this.b[i] as bucket).cnt--
        if (this.b[i]?.cnt === 0) {
            this.b[i] = undefined
        }
    }
}

class bucket {
    h: number[] = new Array(1001).fill(0)
    valid: boolean[] = new Array(1001).fill(false)
    cnt: number = 0

    constructor() { }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

export { MyHashMap }
