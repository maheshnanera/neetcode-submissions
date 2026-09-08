class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let lastSeen = new Map()

        for(let i=0 ; i <nums.length ; i++){
            const num = nums[i]

            lastSeen.set(num, (lastSeen.get(num) || 0) + 1);
        } 

        const sorted = [...lastSeen.entries()].sort((a,b) => b[1] - a[1])
        

        console.log(11,sorted)       

    return sorted.slice(0,k).map(item => item[0]);

    }
}
