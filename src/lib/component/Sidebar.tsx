import React from "react";

function Sidebar() {
  return (
    <div className="container py-4 overflow-auto">
      <form>
        <div className="form-group pt-4">
          <label>Title</label>
          <input
            type="text"
            className="form-control p-2 my-2"
            placeholder="Event Title"
          />
        </div>
        <div className="form-group pt-4">
          <label>Label</label>
          <select
            className="form-select p-2 my-2"
            aria-label="Default select example"
          >
            <option selected>Select</option>
            <option value="1">Buisness</option>
            <option value="2">Family</option>
            <option value="3">Holiday</option>
            <option value="4">Etc</option>
          </select>
        </div>
        <div className="form-group pt-4">
          <label>Start Date</label>
          <input
            type="date"
            className="form-control p-2 my-2"
            placeholder="Event Title"
          />
        </div>
        <div className="form-group pt-4">
          <label>End Date</label>
          <input
            type="date"
            className="form-control p-2 my-2"
            placeholder="Event Title"
          />
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckChecked"
          />
          <label className="form-check-label">All Day</label>
        </div>
        <div className="form-group pt-4">
          <label>Event Url</label>
          <input
            type="text"
            className="form-control p-2 my-2"
            placeholder="https://www.google.com"
          />
        </div>
        <div className="form-group pt-4">
          <label>Add Guest</label>
          <select
            className="form-select p-2 my-2"
            aria-label="Default select example"
          >
            <option selected>Select</option>
            <option value="1">Buisness</option>
            <option value="2">Family</option>
            <option value="3">Holiday</option>
            <option value="4">Etc</option>
          </select>
        </div>
        <div className="form-group pt-4">
          <label>Location</label>
          <input
            type="text"
            className="form-control p-2 my-2"
            placeholder="Location"
          />
        </div>
        <div className="form-group pt-4">
          <label>Description</label>
          <textarea
            // type="textarea"
            className="form-control p-2 my-2"
            placeholder="Description"
          />
        </div>
        <div className="mt-4">
          <button
            type="button"
            style={{background: "#7367f0"}}
            className="btn btn-primary px-4 py-2 mr-3"
          >
            <h5 className="my-auto">Add</h5>
          </button>
          <button
            type="button"
            className="btn btn-secondary px-4 py-2 m-3"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <h5 className="my-auto">Cancel</h5>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Sidebar;
