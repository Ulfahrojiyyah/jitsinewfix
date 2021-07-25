import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { KuliahContext } from "../KuliahContext/KuliahContext";
import "./Edit.css";
import { useState } from "react";

const Edit = () => {
  const [users, setUser] = useContext(KuliahContext);
  const { id } = useParams();
  const user = users.filter((user) => user.id == id);

  const [name, setName] = useState(users[0].name);
  const [position, setPosition] = useState(users[0].position);
  const [idMatakuliah, setId] = useState(users[0].id);

  const editName = (e) => {
    setName(e.target.value);
    const edited_name = name;
    users[0].name = edited_name;
  };

  const editId = (e) => {
    setName(e.target.value);
    const edited_id = idMatakuliah;
    users[0].id = edited_id;
  };

  const editPosition = (e) => {
    setPosition(e.target.value);
    const edited_position = position;
    users[0].position = edited_position;
  };

  const editUser = (e) => {
    e.preventDefault();
    setUser([...users]);
  };

  return (
    <div className="edit">
      <Form>
        <Form.Group>
          <Form.Label>Kode Matakuliah</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={id}
            onChange={editId}
            placeholder={users[0].id}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Nama Matakuliah</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={editName}
            placeholder={users[0].name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Jumlah Peserta</Form.Label>
          <Form.Control
            type="text"
            name="position"
            // value={position}
            onChange={editPosition}
            placeholder={users[0].position}
          />
        </Form.Group>
        <Link to="/ListKuliah">
          <Button onSubmit={()=>editUser} variant="primary" type="submit">
            Edit User
          </Button>
          <Button className="action_btn" variant="info">
            Back to List Kuliah
          </Button>
          </Link>
      </Form>
    </div>
  );
};

export default Edit;