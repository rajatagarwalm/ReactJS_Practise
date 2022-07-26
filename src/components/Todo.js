import React from "react";
import { connect } from "react-redux";
import { deleteTodo, editTodo } from "../redux/action/addTodoAction";

const Todo = ({ todo, idx, deleteTodo, editTodo, selected, text }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                border: "2px solid black",
                cursor: "pointer",
                padding: '5px',
                height: "22px",
                borderRadius: "10px",
                fontSize: "larger",
                fontWeight: 'bold',
                marginBottom: '10px',
            }}
        >
            <div style={{ overflow: 'hidden' }} onClick={() => editTodo(idx)}>{selected === idx ? text : todo}</div>
            <div style={{ cursor: "pointer", border: "1px solid black", borderRadius: '10px', marginLeft: '5px', backgroundColor: 'gray' }} onClick={() => deleteTodo(idx)}>
                x
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    deleteTodo: key => dispatch(deleteTodo(key)),
    editTodo: key => dispatch(editTodo(key))
});

const mapStateToProps = ({ text, selected }) => ({
    text,
    selected
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo);