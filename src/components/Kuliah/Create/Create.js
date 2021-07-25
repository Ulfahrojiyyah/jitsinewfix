import React, { useState, useContext } from "react";
import "./Create.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { KuliahContext } from "../KuliahContext/KuliahContext";

const Create = (props) => {
  // console.log('dataUser', dataUser)
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const [users, setUser] = useContext(KuliahContext);

  const updateId = (e) => {
    setId(e.target.value);
    console.log(id)
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePosition = (e) => {
    setPosition(e.target.value);
  };

  const addUser = (e) => {
      e.preventDefault();
      setUser([...users, {id:id, name:name, position:position}])
  }

  return (
    <div className="create">
      <Form onSubmit={addUser}>
        <Form.Group>
          <Form.Label>Kode Matakuliah</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={id}
            onChange={updateId}
            placeholder="Enter Kode"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Nama Matakuliah</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={updateName}
            placeholder="Enter Nama Matakuliah"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Jumlah Peserta</Form.Label>
          <Form.Control
            type="text"
            name="position"
            value={position}
            onChange={updatePosition}
            placeholder="Enter Jumlah"
          />
        </Form.Group>
        
        <Button className="action_btn" onClick={props.closeModal} variant="primary" type="submit">
          Tambah Kuliah
        </Button>
        
      </Form>
    </div>
  );
};

export default Create;