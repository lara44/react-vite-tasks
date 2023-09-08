import { useState } from 'react';
import { Link } from 'react-router-dom';

function TaskContainer() {
  interface Task {
    id: number;
    description: string;
  }

  const [listTasks, setListTasks] = useState<Task[]>([]);
  const [descriptionTask, setDescriptionTask] = useState<string>('');
  const [errorTaskMessages, setErrorTaskMessages] = useState<string[]>([]);

  const validateTask = () => {
    setErrorTaskMessages(() => []);

    let error: boolean = false;
    let errorTask: string[] = [];

    if (!descriptionTask) {
      errorTask.push('Entry description task*');
    }
    if (errorTask.length > 0) error = true;

    setErrorTaskMessages(errorTask);
    return error;
  };

  const addTask = () => {
    if (validateTask()) {
      return;
    }

    setListTasks(() => [...listTasks, { id: 1, description: descriptionTask }]);
    setDescriptionTask(() => '');
  };

  return (
    <>
      <div className="container mt-5">
        <h4 className="text-center">Taks in React</h4>
        <div className="row">
          <div className="col-md-4">
            <Link to="/" className="btn btn-info btn-sm m-1">
              Return
            </Link>
            <button
              type="button"
              className="btn btn-primary btn-sm m-1"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              New Task
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {listTasks.map((task, index) => (
                  <tr key={index}>
                    <td>{task.id}</td>
                    <td>{task.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModalCenter"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Add New Task
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Entry descripton task*"
                value={descriptionTask}
                onChange={(text) => setDescriptionTask(text.target.value)}
              />
              <div style={{ color: 'red', textAlign: 'center' }}>
                {errorTaskMessages.map((error, index) => (
                  <span key={index}>{error}</span>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => {
                  addTask();
                }}
              >
                Save Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskContainer;
