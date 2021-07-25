import React, { useContext, useState, useEffect } from "react";
import "./ListKuliah.css";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { KuliahContext } from "../KuliahContext/KuliahContext";
import { Modal } from "react-bootstrap";
import Create from "../Create/Create";

import Edit from "../Edit/Edit";

const ListKuliah = () => {
  const [users, setUser] = useContext(KuliahContext);
  
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
    
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleShowEdit = () => setShowEdit(true);
  const handleCloseEdit = () => setShowEdit(false);

  return (
    <div>
      
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            
            <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><span>Tambah Kuliah</span></Button>
          
      <Table striped bordered>
        <thead>
          <tr>
            <th>Kode Matakuliah</th>
            <th>Nama Matakuliah</th>
            <th>Jumlah Peserta</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.position}</td>
              <td>
                <Link to={"/read/"+user.id}>
                  <Button className="action__btn" variant="success">
                    Read
                  </Button>
                </Link>
                {/* <Link to={"/edit/"+user.id}> */}
                  <Button className="action__btn"  onClick={handleShowEdit} variant="info">
                    Edit
                  </Button>
                {/* </Link> */}
                <Link to={"/delete/"+user.id}>
                  <Button className="action__btn" variant="danger">
                    Delete
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
              <Modal.Title>
                  Tambah Kuliahs
              </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Create closeModal={handleClose}/>
          </Modal.Body>
      </Modal>

      <Modal show={showEdit} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
              <Modal.Title>
                  Tambah Kuliah
              </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Edit closeModal={handleCloseEdit}/>
          </Modal.Body>
      </Modal>
      
    </div>
    </div>
    </div>
    </div>
  );
};

export default ListKuliah;