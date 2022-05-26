function MyApp() {
    return <h1>Hello, world! From React !</h1>;
}

const container = document.getElementById('react_render');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);