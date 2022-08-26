// print first Half of the string reversed
let str="Shaheryar";
function FirstHalfReverse(str)
{
    if(str.length%2==0)
    {
        numberVal=(str.length/2);
    }
    else
    {
        numberVal=(str.length/2)+1;
    }
    firstHalf=str.substring(0,numberVal);
    secondHalf=str.substring(numberVal,str.length)
    totalString=firstHalf.split("").reverse().join("").concat(secondHalf);
    return totalString
}
console.log(FirstHalfReverse(str));