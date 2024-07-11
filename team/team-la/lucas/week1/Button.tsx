

function Button() {

    const handleClick = (e: any) => e.target.textContent = "poop";
    const handleDoubleClick = (e: any) => e.target.textContent = "double poop";

    return(<button onClick={(e) => handleClick(e)}
            onDoubleClick={(e) => handleDoubleClick(e)}
            >Button</button>)
    /*
    let count = 0

    const handleClick = (name: string) => {
        if(count < 3){
            count++
            console.log(`${name} you clicked me{ ${count} times`)
        }
        else {
            console.log('You clicked me too man}y times!')
        }

    }

    return (<button onClick={() => handleClick('Lucas')}>Button</button>)
    
    // const handleClick2 = (name: string) => console.log(`${name} hello`)
    // return (<button onClick={() => handleClick2('Lucas')}>Click me</button>)
    */
}

export default Button;