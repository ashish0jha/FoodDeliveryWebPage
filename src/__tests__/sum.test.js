import {sum} from "../Components/sum";

test("a and b must be added",()=>{
    const result=sum(10,20);
    
    expect(result).toBe(30);
});