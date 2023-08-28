import { useState } from 'react';
function TaskContainer() {
  const [task, setTask] = useState({ id: '', description: '' });
  const [listTasks, setListTasks] = useState([{ id: '', description: '' }]);
  const [errorTask, setErrorTask] = useState(false);
  const [errorTaskMessages, setErrorTaskMessages] = useState<string[]>([]);

  const validateTask = () => {
    setErrorTask(false);
    setErrorTaskMessages([]);
    if (!task.description) setErrorTaskMessages(['Entry description task*']);
    if (errorTaskMessages.length > 0) setErrorTask(true);
    return errorTask;
  };

  const addTask = () => {
    if (validateTask()) {
      return;
    }

    alert('OK');
  };

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center">Taks in React</h1>
        <div className="row">
          <div className="col-md-4">
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              New Task
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {listTasks.map((tak) => (
                  <tr>
                    <td>{tak.id}</td>
                    <td>{tak.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-4">
            <h3>Form Taks</h3>
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
                value={task.description}
              />
              <pre>{task.description}</pre>
              <div style={{ color: 'red', textAlign: 'center' }}>
                {errorTaskMessages.map((error, index) => (
                  <span key={index}>{error}</span>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
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
