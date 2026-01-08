export default function HelloWorld() {
    return (
        <div>
            <HelloWorldHeader />
            <HelloWorldParagraph />
        </div>
    )

}

function HelloWorldHeader() {
    return (
        <h1>Hello, World!</h1>
    )
}

function HelloWorldParagraph() {
    return (
        <p>Welcome to my React application. Split function!</p>
    )
}