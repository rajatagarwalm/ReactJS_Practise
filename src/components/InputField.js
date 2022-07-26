import React from "react";
import { connect } from "react-redux";
import { addTodo, addText, editAddTodo } from "../redux/action/addTodoAction";
import "./todoStyle/style.css";
const InputField = ({ addText, text, selected, addTodo }) => {
    const handleChange = e => addText(e.target.value);
    const handleSubmit = e => {
        e.preventDefault();
        if(text === ""){
            alert("Enter any todo");
            return;
        }
        if (selected || selected === 0)
            editAddTodo({
                value: text,
                selected: selected
            });
        addTodo(text);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                className="inputField"
                type="text"
                name="todo"
                value={text}
                placeholder="Enter your todo..."
                onChange={handleChange}
            />
        </form>
    );
};

const mapDispatchToProps = dispatch => ({
    addTodo: todo => dispatch(addTodo(todo)),
    addText: value => dispatch(addText(value)),
    editAddTodo: obj => dispatch(editAddTodo(obj))
});
const mapStateToProps = ({ text, selected }) => ({
    text,
    selected
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputField);