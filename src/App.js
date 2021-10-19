import logo from "./logo.png";
import React from "react";
import "./App.css";
import FormInput from "./components/FormInput";
import EditModal from "./components/EditModal";
import TodoItem from "./components/TodoItem";

class App extends React.Component {
  state = {
    todos: [
      { id: 1, tittle: "08am-10am Reading a Book" },
      { id: 2, tittle: "10am-12am Algoritma Struktur Data" },
    ],
    isEdit: false,
    editData: {
      id: "",
      tittle: "",
    },
    curTime: new Date().toLocaleString(),
  };

  update = () => {
    const { id, tittle } = this.state.editData;
    const newData = { id, tittle };
    const newTodos = this.state.todos;
    newTodos.splice(id - 1, 1, newData);
    this.setState({
      todos: newTodos,
      isEdit: false,
      editData: {
        id: "",
        tittle: "",
      },
    });
  };

  setTittle = (e) => {
    this.setState({
      editData: {
        ...this.state.editData,
        tittle: e.target.value,
      },
    });
  };
  openModal = (id, data) => {
    this.setState({
      isEdit: true,
      editData: {
        id,
        tittle: data,
      },
    });
  };
  closeModal = () => {
    this.setState({
      isEdit: false,
    });
  };

  deletTask = (id) => {
    this.setState({
      todos: this.state.todos.filter((item) => item.id !== id),
    });
  };
  addTask = (data) => {
    const id = this.state.todos.length;
    const newData = {
      id: id + 1,
      tittle: data,
    };
    this.setState({
      todos: [...this.state.todos, newData],
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="app">
        <div className="logo">
          <img src={logo} alt="logo"></img>
          <h3>To Do List Of the Day</h3>
          <p>Current Time:{this.state.curTime} </p>
        </div>
        <div className="list">
          {todos.map((item) => (
            <TodoItem
              key={item.id}
              items={item}
              del={this.deletTask}
              open={this.openModal}
            />
          ))}
        </div>
        <div>
          <FormInput add={this.addTask} />
        </div>
        <EditModal
          edit={this.state.isEdit}
          close={this.closeModal}
          change={this.setTittle}
          data={this.state.editData}
          update={this.update}
        />
      </div>
    );
  }
}

export default App;
