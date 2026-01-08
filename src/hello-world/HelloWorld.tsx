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
        <h1>{greeting.toUpperCase()}</h1>
    )
}

function HelloWorldParagraph() {
    const paragraph = "Welcome to my React application.";
    return (
        <p>{paragraph.toLocaleLowerCase()}</p>
    )
}