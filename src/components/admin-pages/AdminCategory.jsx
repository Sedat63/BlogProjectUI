import React,{useState,useEffect} from 'react'
import * as apiCategory from "../../api/category-api";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function AdminCategory() {
    const [categories, setCategories] = useState([]); //initial value
    const [categoryModalVisible, setCategoryModalVisible] = useState(false); //initial value

    const [category, setCategory] = useState({categoryName:"",description:""}); //initial value

    const submit = () => {
      // 3. addCategory();
      //GetList
      //setCategoryVisible Kapat
    }
    const handleShow = () => setCategoryModalVisible(true);
    
   const handleCategoryChange=()=>{
    
    // 2. setCategory
   }

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
  <Modal.Title>Modal heading</Modal.Title>
</Modal.Header>
<Modal.Body>
  
{/* Form 1. <Input onchange></Input> */}

</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button variant="primary" onClick={submit}>
    Save Changes
  </Button>
</Modal.Footer>
</Modal>
</>
  )
}
