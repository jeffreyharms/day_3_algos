/* 
    Given in an alumni interview in 2021.
    String Encode
    You are given a string that may contain sequences of consecutive characters.
    Create a function to shorten a string by including the character,
    then the number of times it appears. 
    
    
    If final result is not shorter (such as "bb" => "b2" ),
    return the original string.
*/

const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a1";

const str4 = "bbcc";
const expected4 = "b2c2";

/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs. Only encode strings
 * when the result yields a shorter length.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
 */
function encodeStr(str) {
    let arr = [];
    let arr2 = [];
    let n = 1;
    for(x=0; x<str.length; x++) {
        arr += str[x];
    }
    console.log(arr);
    for(y=0; y<arr.length; y++) {
        if(arr[y] == arr[y+1]) {
            n +=1;
        }
        else {
            arr2 += arr[y];
            arr2 += n;
            console.log(arr2);
            n = 1;
        }
    }
}

encodeStr(str1);
/* 
    String Decode  
*/

const str7 = "a3b2c1d3";
const expected11 = "aaabbcddd";

const str8 = "a3b2c12d10";
const expected22 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) {
    let arr3 = [];
    let arr4 = [];
    for(i=0; i<str.length; i++) {
        arr3 += str[i];
    }
    for(v=0; v<arr3.length; v++) {
        if(Number.isInteger(arr3[v+1]) == true) {
            for (u=0; u<=arr3[v+1]; u++) {
                arr4 += arr3[v];
            }
        }
    }
    console.log(arr4);
}

decodeStr(str8);