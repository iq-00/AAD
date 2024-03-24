import AdminSideBar from "./AdminSideBar";
import "../../css/users.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Modifyusers() {
  let [user, setUser] = useState([
    {
      id: 1,
      name: "ab",
      email: "c",
      password: "$2a$10$jReksUAAUEm/6iKs1qetGOCmXqdAibtMvzYZ81qxhK/1VVCCO3rwu",
      mobile: "d",
      role: "admin",
    },
    {
      id: 2,
      name: "ab",
      email: "c",
      password: "$2a$10$u/7wzKUBzf/eOUvbEYYf7uBxzV2Pf6u/Cu9PqsA8CbmMviUfdIfjW",
      mobile: "d",
      role: "admin",
    },
    {
      id: 3,
      name: "ab",
      email: "c",
      password: "$2a$10$W5uqFXLXKabUJzMwzm5tROu4ji7vb31guFKVCLDLJkDMRneDC33Fe",
      mobile: "d",
      role: "admin",
    },
    {
      id: 4,
      name: "zz",
      email: "a",
      password: "$2a$10$0UDOoA.cu2Tr7dU0XVnFDO7UQRBDyVkp31zhMyNBN0DUEbZbBO/jq",
      mobile: "z",
      role: "admin",
    },
    {
      id: 5,
      name: "aa",
      email: "email",
      password: "$2a$10$4xFbXmPcqnULA4QY4quP6Ok2MNaOQXYDxZdbJEYPMGvm68kG0DB0.",
      mobile: "a",
      role: "admin",
    },
    {
      id: 6,
      name: "testtest",
      email: "test",
      password: "$2a$10$YuTHiT4U1WAK8djGIjy56OH2DYpvcr3DGDoMbUTDm6uJCBmOax/oi",
      mobile: "test",
      role: "admin",
    },
    {
      id: 7,
      name: "bb",
      email: "b",
      password: "$2a$10$bLpQc6ahjZOMytBKhYKGZ.4NXVKLLxPsacnW0i81vhlUmFIWt0znC",
      mobile: "b",
      role: "user",
    },
    {
      id: 8,
      name: "demodemo",
      email: "demo",
      password: "$2a$10$DpAQFNIPM103rNTonOfMPONg7YZZ72MNh8cH/9QftD3HSO.QLDKWW",
      mobile: "demo",
      role: "user",
    },
    {
      id: 9,
      name: "cc",
      email: "c",
      password: "$2a$10$.KZttVcms.aQEYxScz/7FujwiSNbcNc1DXwuO4xGuXvEOp5hsfCYe",
      mobile: "c",
      role: "user",
    },
    {
      id: 10,
      name: "cccc",
      email: "cc",
      password: "$2a$10$6NSqI4AtB3NWgt.U9.WXAeaBjwb3qBlN2gcI/45pvz5rFyhZT1lpa",
      mobile: "cc",
      role: "user",
    },
  ]);

  useEffect(() => {
    //   axios
    //     .get("http://localhost/users/getuser", {
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: "Bearer " + window.localStorage.getItem("jwt"),
    //       },
    //     })
    //     .then((ev) => {
    //       if (ev.status == 200) {
    //         let data = ev.data;
    //         console.log(data);
    //         setUser(data);
    //       }
    //     })
    //     .catch((er) => {
    //       alert(er);
    //     });
  }, []);
  return (
    <>
      <AdminSideBar />
      <div className="move">
        <div className="container">
          <h1>Modify Users</h1>
          <table className="rwd-table">
            <tbody>
              <tr>
                <th>S.No</th>
                <th>UID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
              {user === true ? (
                <td>Loading...</td>
              ) : user.length == 0 ? (
                <td>No gifts found</td>
              ) : (
                user.map((val, ind) => {
                  return (
                    <>
                      <tr>
                        <td>{ind + 1}</td>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.email}</td>
                        <td>{val.mobile}</td>
                        <td>{val.role}</td>
                        <td>
                          <button
                            id="save"
                            onClick={() => {
                              console.log(val.id);
                              let a = document.querySelectorAll("tr")[ind + 1];
                              a.innerHTML = `
                              <td>${ind + 1}</td>
                              <td>${val.id}</td>
                              <td><input placeholder=${
                                val.name
                              } defaultValue={${val.name}} /></td>
                              <td>${val.email}</td>
                              <td><input placeholder=${
                                val.mobile
                              } defaultValue={${val.mobile}} /></td>
                              <td>${val.role}</td>
                              <td>
                                <button ">
                                    Save
                                </button>
                                <button">
                                    Cancel
                                </button>
                                </td>
                              `;
                            }}
                          >
                            Edit
                          </button>
                          <button
                            id="cancel"
                            onClick={() => {
                              console.log(val.id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
