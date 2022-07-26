import React, { useEffect } from "react";
import "./components/todoStyle/style.css";
import InputField from "./components/InputField";
import TodosList from "./components/TodosList";
import { deleteAll, persistTodos } from "./redux/action/addTodoAction";
import { connect } from "react-redux";

const App = ({ deleteAll, persistTodos }) => {

  useEffect(() => {
    persistTodos();
  }, [persistTodos]);

  return (
    <div className="App">
      <h1 style={{ textDecoration: "underline" }}> Todos App</h1>
      <div className="mainContent">
        <InputField />
        <TodosList />
        <div>
          <button
            style={{ marginTop: "20px", cursor: "pointer" }}
            onClick={deleteAll}
          >
            {" "}
            Delete All
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteAll: () => dispatch(deleteAll()),
  persistTodos: () => dispatch(persistTodos())
});
export default connect(
  null,
  mapDispatchToProps
)(App);