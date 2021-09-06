import { ReactElement } from "react";

export default function Form(): ReactElement {
  return (
    <div className="card">
      <div className="card-header text-center">
        <h4>Add todo</h4>
      </div>
      <div className="card-body">
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <input
              id="title"
              className="form-control "
              type="text"
              placeholder="Title"
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Description"
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
