import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        // {
        //   num: 1,
        //   todo: "A notes",
        //   date: "",
        //   description: "A all notes",
        //   isComplete: "",
        //   remark: "Set Deadline",
        //   style: {
        //     color: "",
        //     textStrike: "",
        //     border: "white",
        //   },
        // },
        // {
        //   num: 2,
        //   todo: "B notes",
        //   date: "",
        //   description: "B all notes",
        //   isComplete: "",
        //   remark: "Set Deadline",
        //   style: {
        //     color: "",
        //     textStrike: "",
        //     border: "white",
        //   },
        // },
        // {
        //   num: 3,
        //   todo: "C notes",
        //   date: "",
        //   description: "C all notes",
        //   isComplete: "",
        //   remark: "Set Deadline",
        //   style: {
        //     color: "",
        //     textStrike: "",
        //     border: "white",
        //   },
        // },
      ],

      newTodo: "",
      date: "",

      onClickId: "",

      val: "",
    };
  }

  // DEADLINE TEXT COLOR FUNCTION
  handleAddToDoChange = (e) => {
    this.setState({ val: e.target.value });
    this.setState({ newTodo: e.target.value });
    // console.log(e.target.value);
  };

  handleDateChange = (e) => {
    this.setState({ date: e.target.value });

    let todoInd = e.target.id * 1;
    console.log(todoInd, "selected todo ind");
    console.log(this.state.todos);

    let taskDeadDate = e.target.value;
    let today = new Date().toJSON().slice(0, 10);

    let copyTodos = [...this.state.todos];

    for (let elem of copyTodos) {
      if (elem.num === todoInd) {
        elem.date = e.target.value;
        taskDeadDate > today
          ? ((elem.remark = "Good TO GO !!"),
            (elem.style.color = "orange"),
            (elem.style.border = "orange"))
          : ((elem.remark = "Due day is passed !!"),
            ((elem.style.color = "red"), (elem.style.border = "#FFDE00")));
      }
    }
  };

  handleDescription = (e) => {
    let objId = this.state.onClickId;
    console.log(objId, "desc");

    let copyTodos = [...this.state.todos];
    let currentObj = copyTodos[objId];
    let updatedCurrObj = { ...currentObj, description: e.target.value };

    copyTodos[objId] = updatedCurrObj;
    this.setState({ todos: copyTodos });
  };

  handleCheckBoxChange = (e) => {
    console.log(e.target.checked);
    console.log(e.target.checked, "checked");

    let todoInd = e.target.id * 1 + 1;
    console.log(todoInd);

    let copyTodos = [...this.state.todos];

    if (e.target.checked) {
      copyTodos.map((item) => {
        if (item.num === todoInd) {
          item.style.textStrike = "3px line-through";
          item.remark = "Task is completed!!";
          item.style.color = "crimson";
          item.style.border = "crimson";
          item.isComplete = "complete";
        }
      });
    } else {
      copyTodos.map((item) => {
        if (item.num === todoInd) {
          item.style.textStrike = "none";
          item.remark = "Set Deadline";
          item.style.color = "";
          item.style.border = "white";
          item.isComplete = "";
        }
      });
    }
  };

  handleAddButton = () => {
    let newObjTodo = {
      num: this.state.todos.length + 1,
      todo: this.state.newTodo,
      date: "",
      description: "",
      isComplete: "",
      remark: "Set Deadline",
      style: {
        color: "",
        textStrike: "",
        border: "white",
      },
    };
    let copyAllTodos = [...this.state.todos, newObjTodo];
    this.setState({ todos: copyAllTodos });

    this.setState({ val: "" });
  };

  handleDeleteButton = (e) => {
    // 👇🏻 when id is key
    let objId = e.target.id * 1;
    console.log(objId);
    console.log(this.state.todos, "non updated todo");

    let todosCopy = [...this.state.todos];
    let updatedTodo = [
      ...todosCopy.slice(0, objId),
      ...todosCopy.slice(objId + 1),
    ];

    this.setState({ todos: updatedTodo });

    // 👇🏻 VIA item.id
    // let objId = e.target.id * 1 - 1;
    // console.log(objId);
    // console.log(this.state.todos, "non updated todo");

    // let todosCopy = [...this.state.todos];
    // let updatedTodo = [
    //   ...todosCopy.slice(0, objId),
    //   ...todosCopy.slice(objId + 1),
    // ];

    // this.setState({ todos: updatedTodo });
  };

  render() {
    // console.log(this.state.onClickId);
    // console.log(this.state.todos);
    // console.log(this.state.date);
    return (
      <div className="mainContainer">
        {/* HEADING CONTAINER */}
        <div className="heading">
          <h3> Todo Application </h3>
        </div>

        {/* INPUT TODO CONTAINER */}
        <div className="addTodoContainer">
          <div className="inputFieldContainer">
            <label>Todo:</label>
            <input onChange={this.handleAddToDoChange} value={this.state.val} />
          </div>
          <div className="AddButtonContainer">
            <button onClick={this.handleAddButton}>Add</button>
          </div>

          {/* DISPLAY TODO */}
          <div className="displayTodosContainer">
            {this.state.todos.map((item, key) => {
              const { todo, description } = item;

              return (
                <div
                  //NOTE- item.num is not working properly, humesha key se lene ka.
                  // className={`todoContainer box${item.num}`}
                  className={`todoContainer box${key}`}
                  key={key}
                  // style={{ border: item.style.border }}
                  style={{ border: `5px solid ${item.style.border}` }}
                >
                  <div className="taskNumberContainer">
                    <h4>Task-{key + 1}</h4>
                  </div>
                  <div className="taskNameContainer">
                    <h3 style={{ textDecoration: item.style.textStrike }}>
                      {todo}
                    </h3>
                  </div>
                  <div className="dateContainer">
                    <input
                      id={item.num}
                      onChange={this.handleDateChange}
                      type="date"
                      value={item.date}
                    />
                  </div>
                  <div className="descriptionContainer">
                    <textarea
                      id={key}
                      onClick={() => this.setState({ onClickId: key })}
                      value={description}
                      onChange={this.handleDescription}
                      placeholder="Description"
                    />
                  </div>

                  <div className="checkfieldContainer">
                    <input
                      id={key}
                      onClick={(e) => this.setState({ onClickId: e.target.id })}
                      onChange={this.handleCheckBoxChange}
                      type="checkbox"
                      checked={item.isComplete ? "checked" : ""}
                    />
                  </div>
                  <div className="deleteContainer">
                    {/* <button id={item.num} onClick={this.handleDeleteButton}> */}
                    <button id={key} onClick={this.handleDeleteButton}>
                      Delete
                    </button>
                  </div>
                  <div className="reamrkContainer">
                    <h3 style={{ color: item.style.color }}>{item.remark}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
