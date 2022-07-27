export const ToDoReducer = (state, { type, value }) => {
  switch (type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: value.id,
          description: value.description,
        },
      ];
    case "EDIT_TASK":
      return state.map((task) => {
        console.log(value.description);
        return parseInt(task.id) === parseInt(value.id)
          ? { ...task, description: value.description }
          : task;
      });
    case "DELETE_TASK":
      return state.filter((task) => parseInt(task.id) !== parseInt(value.id));
    default:
      return state;
  }
};
