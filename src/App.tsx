import { useState } from "react";

function Button(props: string) {
    console.log(props);
    return <button>{props.text}</button>;
}

function App() {
    const [movies, setMovies] = useState(["Action", "Adventure"]);

    return <Button text="Action" />;
}

export default App;
