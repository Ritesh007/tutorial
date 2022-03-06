// https://leetcode.com/problems/interleaving-string/discuss/1294873/Typescript-DP-solution

function isInterleave(s1: string, s2: string, s3: string): boolean {
    //corner case , if length does not match return
    if(s1.length + s2.length !== s3.length) return false;
    if(s1 === "") return s2 === s3;
    if(s2 === "") return s1 === s3;

    //define variables
    const s1Length = s1.length , s2Length = s2.length;
    let dp = new Array(s1.length +1).fill([]);

    for(let i = 0 ; i <= s1Length ; i ++){
        for(let j = 0 ; j <= s2Length ; j++){
            if(i === 0 && j === 0){
                dp[0][0] = true;
            }else if(i === 0){
                dp[i][j] = dp[i][j - 1] && s2[j - 1] === s3[i + j - 1];
            }else if( j === 0){
                dp[i][j] = dp[i -1][j] && s1[i-1] === s3[i + j -1];
            }else{
                dp[i][j] = (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]) || (dp[i][j] = dp[i -1][j] && s1[i-1] === s3[i + j -1]);
            }
        }
    }

    return dp[s1Length][s2Length];
};