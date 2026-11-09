using System;
using System.Collections.Generic;

public class Solution
{
    public bool ContainsDuplicate(int[] nums)
    {
        HashSet<int> unique = new HashSet<int>(nums);

        return unique.Count < nums.Length;
    }
}