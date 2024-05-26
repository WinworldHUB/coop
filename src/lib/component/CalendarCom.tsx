import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ReactBigCalendar from "./ReactBigCalendar";
import Sidebar from "./Sidebar";
type CheckboxKeys = "Personal" | "Business" | "Family" | "Holiday" | "Etc";

interface CheckedItems {
  Personal: boolean;
  Business: boolean;
  Family: boolean;
  Holiday: boolean;
  Etc: boolean;
}

function CalendarComp() {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e: any) => {
    setDateState(e);
  };
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({
    Personal: true,
    Business: true,
    Family: true,
    Holiday: true,
    Etc: true,
  });

  const [selectAll, setSelectAll] = useState(true);

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setCheckedItems({
      Personal: newSelectAll,
      Business: newSelectAll,
      Family: newSelectAll,
      Holiday: newSelectAll,
      Etc: newSelectAll,
    });
  };

  const handleCheckboxChange = (e: any) => {
    const { id, checked } = e.target;
    const key = id.split("-")[1] as CheckboxKeys;
    const newCheckedItems = {
      ...checkedItems,
      [key]: checked,
    };
    setCheckedItems(newCheckedItems);
    setSelectAll(Object.values(newCheckedItems).every((value) => value));
  };
  return (
    <>
      <div className="row p-4 m-4 bg-white">
        <div className="col-4">
          <button
            className="btn btn-primary w-100 text-white p-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <FontAwesomeIcon
              icon={faPlus}
              className="h4 px-2 text-white my-auto"
            />
            <span className="h4 text-white my-auto">Add Event</span>
          </button>
          <hr />
          <Calendar value={dateState} onChange={changeDate} className="w-100" />
          <hr />
          <div className="mb-3 ms-3">
            <small className="text-small text-muted text-uppercase align-middle">
              Filter
            </small>
          </div>

          <div className="form-check mb-2 ms-3">
            <input
              className="form-check-input select-all"
              type="checkbox"
              id="selectAll"
              data-value="all"
              checked={selectAll}
              onChange={handleSelectAll}
            />
            <label className="form-check-label">View All</label>
          </div>

          <div className="ms-3">
            {(Object.keys(checkedItems) as CheckboxKeys[]).map((item) => (
              <div
                key={item}
                className={`form-check mb-2 ${
                  item === "Personal" ? "form-check-danger" : ""
                } ${item === "Family" ? "form-check-warning" : ""} ${
                  item === "Holiday" ? "form-check-success" : ""
                } ${item === "Etc" ? "form-check-info" : ""}`}
              >
                <input
                  className="form-check-input input-filter"
                  type="checkbox"
                  id={`select-${item}`}
                  data-value={item}
                  checked={checkedItems[item]}
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label">{item}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="col-8">
          <ReactBigCalendar />
        </div>
      </div>
      <div
        className="offcanvas offcanvas-end p-4"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="d-flex justify-content-between p-2">
          <h3 className="my-auto color-red ">Add Event</h3>
          <button
            type="button"
            className="btn-close text-reset p-2 my-auto"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default CalendarComp;
