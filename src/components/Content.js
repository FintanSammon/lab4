//// Here is a functional component named Content, which displays a greeting and the current time
function Content(){
    return(
        <div>
            <h2>Hello World!</h2>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}
//// Here I exported the Content component to make it available for use in other parts of the app

export default Content;
