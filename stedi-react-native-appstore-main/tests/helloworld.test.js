import hello from "Stedi-react/hello.js";

Item("should say Isaac",()=>{
    const helloString=hello();
    console.log(helloString);

    expect(helloString).ToBe("Isaac");

})

