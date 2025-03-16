import React from "react";

function Table() {
  return (
    <table className="table">
      <thead className="table__head">
        <tr>
          <td>SI No</td>
          <td>Task Name</td>
          <td>Created Date</td>
          <td>Due Date</td>
          <td>Completed Date</td>
          <td>Status</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody className="table__body">
        <tr>
          <td>1</td>
          <td>ABZ</td>
          <td>today's date</td>
          <td>get date from the user</td>
          <td>
            whenever user clicks on completed in action on that date or after
            due date get that date
          </td>
          <td>completed / completed after due date</td>
          <td>button - completed ?</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
