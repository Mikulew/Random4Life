const React = require('react');
const ReactDOM = require('react-dom');

// Create component
let ToDo = React.createClass({
    render() {
        <h1>Random Your Life</h1>
    },
});

// Put component into HTML page
ReactDOM.render(<ToDo/>, document.getElementById('todo-wrapper'));