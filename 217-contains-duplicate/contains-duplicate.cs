using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public bool ContainsDuplicate(int[] nums)
    {
        var value = nums.Distinct();

        return value.Count() < nums.Length;
    }
}