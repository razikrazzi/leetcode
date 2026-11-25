public class Solution {
    public int LengthOfLastWord(string s) {

        string value = s.TrimEnd();
        string[] array = value.Split(' ');
        string last = array[array.Length -1];

        int length = last.Length;
          
            return length;
    }
}