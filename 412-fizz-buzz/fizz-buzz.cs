public class Solution {
    public IList<string> FizzBuzz(int n) {

        List<string> value = new();

        for(int i = 1; i <= n ; i++){
            if(i % 3 == 0 && i % 5 == 0){
                value.Add("FizzBuzz");
            }else if (i % 3 == 0){
                  value.Add("Fizz");
            } else if( i % 5 == 0){
                value.Add("Buzz");
            }else {
               value.Add(i.ToString());
                }
        }
        return value;
    
}
}