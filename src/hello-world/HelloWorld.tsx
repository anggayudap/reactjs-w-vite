export default function HelloWorld() {
    return (
        <div>
            <HelloWorldHeader />
            <HelloWorldParagraph />
        </div>
    )

}

function HelloWorldHeader() {
    const greeting: string = "Hello, World!";
    return (
        <h1 style={{ color: "green", backgroundColor:"palegoldenrod" }}>{greeting.toUpperCase()}</h1>
    )
}

function HelloWorldParagraph() {
    const paragraph = "Welcome to my React application.";
    const myStyle = {
        fontSize: "20px",
        fontFamily: "Arial, sans-serif",
        color: "blue"
    };
    return (
        <p style={myStyle}>{paragraph.toLocaleLowerCase()}</p>
    )
}