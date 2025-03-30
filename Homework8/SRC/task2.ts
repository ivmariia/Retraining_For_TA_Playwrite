function processData(param: string | number | boolean | number[]): string | number | boolean | number[] {
    if (typeof param === "string") {
      return param.toUpperCase();
    }
  
    if (typeof param === "number") {
      return param * param;
    }
  
    if (typeof param === "boolean") {
      return !param;
    }
  
    if (Array.isArray(param)) {
      if (param.length === 0) {
        return "Empty array: []";
      }
  
      return param.map((num) => num * num);
    }
  
    throw new Error("Unsupported data type");
  }
  
  
  console.log(processData("text data"));      
  console.log(processData(3));                
  console.log(processData(false));            
  console.log(processData([1, 2, 3, 4]));      
  console.log(processData([]));               
  