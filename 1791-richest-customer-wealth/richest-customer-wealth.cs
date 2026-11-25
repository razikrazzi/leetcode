public class Solution {
    public int MaximumWealth(int[][] accounts) {

        var result = accounts.Select(n => n.Sum());

        return result.Max();

    }
}