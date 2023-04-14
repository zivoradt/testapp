export function toPascalCase(inputString){
    const result = inputString.replace(/([A-Z])/g, " $1");
    let finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    let a = finalResult.replaceAll(" ","");
    return a;
}
export function toPascalCaseWithWhiteSpace(inputString){
    const result = inputString.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
   
    return finalResult;
}


