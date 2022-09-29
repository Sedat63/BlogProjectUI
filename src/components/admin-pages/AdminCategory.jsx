import React,{useState,useEffect} from 'react'
import * as apiCategory from "../../api/category-api";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { message } from 'antd';

export default function AdminCategory() {
    const [categories, setCategories] = useState([]); //initial value
    const [categoryModalVisible, setCategoryModalVisible] = useState(false); //initial value
    const [categoryName, setCategoryName] = useState(""); //initial value
    const [description, setDescription] = useState(""); //initial value
    const [id, setId] = useState(0); //initial value


    const submit = () => {
      if(!categoryName || !description  ){
        message.warning({
          content: 'Alanları doldurunuz',
          style: {
            marginTop: '20vh',
          },
        });
        return; 
      } 
      const category = {categoryName,description}
      apiCategory.addCategory(category).then(response => {
        if(response.succesfull){
          getList();
        }
      });
      handleClose();
    }
    function abc(a){

    }

    const handleShow = () => setCategoryModalVisible(true);
    const handleClose = () => setCategoryModalVisible(false);


    useEffect(() => {
        getList();
      }, []); //Tek sefer çalış document ready
      
      const getList = () => {
        apiCategory.getList().then((result) => {
            setCategories(result.data);
          });
      }
  return (
    <>
      <Button
        style={{float:"right",marginBottom:"10px"}} 
        variant="primary" 
        onClick={handleShow}>
          Ekle
      </Button>

    <Table striped bordered hover>
    <thead>
      <tr>
        <th>Kategori</th>
        <th>Açıklama</th>
        <th>Makale Sayısı</th>
        <th>İşlemler</th>

      </tr>
    </thead>
    <tbody>
        {categories.map(x=>(
        <tr>
        <td>{x.categoryName}</td>
        <td>{x.description}</td>
        <td>{x.articleCount}</td>
        </tr>
        ))}
    </tbody>
  </Table>

<Modal 
show={categoryModalVisible}
onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>Kategori</Modal.Title>
</Modal.Header>
<Modal.Body>
       <div className="mb-3">
              <label
                htmlFor="categoryName"
                className="form-label"
              >
                Kategori Adı
              </label>
              <input
                type="categoryName"
                className="form-control"
                id="categoryName"
                placeholder="Kategori Adı Giriniz"
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Açıklama
              </label>
              <input
                type="description"
                className="form-control"
                id="description"
                placeholder="Açıklama Giriniz"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Kapat
  </Button>
  <Button variant="primary" onClick={submit}>
    Ekle
  </Button>
</Modal.Footer>
</Modal>
</>
  )
}
