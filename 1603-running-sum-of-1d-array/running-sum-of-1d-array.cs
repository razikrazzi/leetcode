using System.Linq;
public class Solution {
    public int[] RunningSum(int[] nums) {
      int sum = 0 ;
     
     var arr = nums.Select(n => {
        sum += n;
        return sum;
     }).ToArray();


      return arr;
}
}