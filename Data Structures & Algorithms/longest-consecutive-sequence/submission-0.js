class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        const hasMap = new Set(nums)
        let maxLength  = 0
        for (const num of hasMap ){
          if(!hasMap.has(num - 1)){
            let current = num
            let count = 1

          while(hasMap.has(current + 1)){
            current++
            count++
          }
          maxLength = Math.max(maxLength, count)
          }
        }
        return maxLength

    }
}
