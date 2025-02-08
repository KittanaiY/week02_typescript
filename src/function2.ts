export const findMax = (nums:Array<number>):string => {
    let max:number = 0;
    for (const num of nums ){
        if (num>max){
            max = num;
        }
    }
    return max.toString();
}

export default findMax;
// console.log(findMax([1,2,3,4,5]));