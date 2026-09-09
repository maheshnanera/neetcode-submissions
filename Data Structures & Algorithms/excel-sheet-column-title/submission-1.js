class Solution {
    /**
     * @param {number} columnNumber
     * @return {string}
     */
    convertToTitle(columnNumber) {

        // If A -> 1 z ->26
    //AA= 26 +1  = 27 >>> 52 ==>  +1 
    // 26 * (char position at first place) + (char second at first place) 
    // BA

    //26 * 2 +1  = 53


            // Number / 26. = Math.round (reult) = 2 charAt(2) => ! st palce
            //shash is =
    let result = ""

    while(columnNumber){

        columnNumber-- 

      const   reminder = columnNumber % 26

      result = String.fromCharCode(65 + reminder) + result
      
        columnNumber = Math.floor(columnNumber / 26)

    }

        return result    

    }
}
