class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       const hasMap = new Map()

        for(let i = 0; i < nums.length ; i++ ){
            const change = target- nums[i];
            if(hasMap.has(change)){
                return [hasMap.get(change), i]
            }
            hasMap.set(nums[i],i)

        } 

    }
}
