//const heading=React.createElement("h1",{id:"heading" ,xyz:"abc"},"Hello World By React");
//const root=ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I m h1"),
        React.createElement("h2", {}, "I m an h2 ")
    ]),
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I m h1"),
        React.createElement("h2", {}, "I m an h2 ")
    ])
]);
console.log(parent);
const parentroot = ReactDOM.createRoot(document.getElementById("root"));
parentroot.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
