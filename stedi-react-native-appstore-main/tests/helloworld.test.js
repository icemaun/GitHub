import hello from "../utils/hello.js";

Item("should say Isaac",()=>{
    const helloString=hello();
    console.log(helloString);

    expect(helloString).ToBe("Isaac");

})

