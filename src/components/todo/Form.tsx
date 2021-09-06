import { ReactElement, useState } from "react";
import { todoObject } from "../../initialvalue";

interface Props {
  addTodo: Function;
}

export default function Form({ addTodo }: Props): ReactElement {
  const [state, setState] = useState<todoType>(todoObject);
  const onSubmit: Function = (e: any) => {
    e.preventDefault();
    addTodo(state);
    setState(todoObject);
  };
  const onChange: Function = (e: any) =>
    setState({
      ...state,
      [e.target.name]: e.target.value,
      id: Math.random() * 10000,
    });

  return (
    <div className="card">
      <div className="card-header text-center">
        <h4>Add todo</h4>
      </div>
      <div className="card-body">
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <input
              className="form-control "
              type="text"
              placeholder="Title"
              name="title"
              // value=
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Description"
              name="description"
              onChange={(e) => onChange(e)}
            ></textarea>
          </div>
          <input
            type="submit"
            value="Add"
            className="bg-primary border-0 w-100 rounded p-2"
          />
        </form>
      </div>
    </div>
  );
}
