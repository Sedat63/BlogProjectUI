
import React,{useState,useEffect} from 'react'
import '@wangeditor/editor/dist/css/style.css' // import css
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import moment from "moment";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Col,
  Row,
  Tooltip,
  Select,
  message,
  Upload,
} from "antd";
import {
  cancel_str,
  required_field_str,
} from "../../../helper/constant/global-constant";
import {
  PlusSquareOutlined,
  UploadOutlined,

} from "@ant-design/icons";
import * as apiTag from "../../../api/tag-api";
import * as apiCategory from "../../../api/category-api";
import * as apiArticle from "../../../api/article-api";
import { useNavigate } from 'react-router-dom';
import { adminBaseUrl } from '../../../helper/constant/route-constant';

const { Option } = Select;

export default function AdminArticleAddOrUpdate() {
  const navigate = useNavigate();
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [articleForm] = Form.useForm();
  const formItemLayout = { labelCol: { span: 4 }, wrapperCol: { span: 18 } };
  const [editor,setEditor] = useState(null);
  const [html, setHtml] = useState('')
  
  useEffect(() => {
    getTags();
    getCategories();
  }, []); 

  const getTags = () => {
    apiTag.getList().then((result) => {
      setTags(result.data);
    });
  };

  const getCategories = () => {
    apiCategory.getList().then((result) => {
      setCategories(result.data);
    });
  };

  const addOrUpdate = (_articleForm) => {

    const formData = new FormData()
    _articleForm.tagIds.forEach((id,index)=> formData.append(`tagIds[${index}]`,id))
    _articleForm.categoryIds.forEach((id,index) => formData.append(`categoryIds[${index}]`,id))
    formData.append("id",_articleForm.id)
    formData.append("title",_articleForm.title)
    formData.append("publishDate",moment(_articleForm.publishDate))
    formData.append("bannerImage",_articleForm.bannerImage.file.originFileObj)
    formData.append("content",editor.getHtml())

    if (_articleForm.id === 0) 
    apiArticle.add(formData).then(apiResultNotification);
    else
    apiArticle.update(formData).then(apiResultNotification);
  };

    const apiResultNotification = (response) => {
      if(!response.successful){
        message.error(response.message);
        return;
      }
    message.success(response.message);
    navigate(`${adminBaseUrl}/admin-article`)
  };

  //it allows only the png.
 const handleUploadBeforeBanner = (file) => {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  return false;
 }

   useEffect(() => {
    return () => {
        if (editor == null) return
        editor.destroy()
        setEditor(null)
    }
}, [editor])

 const toolbarConfig = { }                        

 const editorConfig = {                       
    placeholder: 'Type here...',
}

  return (
    <>
   <Form
          form={articleForm}
          layout={"horizontal"}
          onFinish={addOrUpdate}
           {...formItemLayout}
          size={"small"}
          labelAlign={"left"}
        >
  <Form.Item name={"id"} hidden={true} initialValue={0}><Input /></Form.Item>
       <Row gutter={24}>
        <Col span={9}>
      <Form.Item
            label={"BAŞLIK"}
            name="title"
            rules={[{ required: true, message: required_field_str }]}
          >
            <Input placeholder={"Makale Başlığı"} />
     </Form.Item>
     <Form.Item
       label={"Tarih"}
       name="publishDate"
       initialValue={moment()} 
       rules={[{ required: true, message: required_field_str }]}
     >
      <DatePicker 
       defaultValue = {moment()} 
       format={"DD.MM.YYYY"} 
       style={{ width: '100%' }}  />
     </Form.Item>
     </Col>
     <Col span={9}>
      <Form.Item 
      label={"Etiket"}
      name={"tagIds"}
      rules={[{ required: true, message: required_field_str }]}
      >
          <Select
        mode="multiple"
        size={"middle"}
        placeholder="Etiketler"
        defaultValue={[]}
        style={{ width: '100%' }}
      >
        {tags.map( tag => (
          <Option key={tag.id} value={tag.id}>{tag.tagName}</Option>
        ))}
        </Select>
     </Form.Item>
     <Form.Item 
     label={"Kategori"}
     name={"categoryIds"}
     rules={[{ required: true, message: required_field_str }]}
     >
      <Select
        mode="multiple"
        size={"middle"}
        placeholder="Kategoriler"
         defaultValue={[]}
        style={{ width: '100%' }}
      >
          {categories.map(category => (
          <Option key={category.id} value={category.id}>{category.categoryName}</Option>
          ))}
      </Select>
      </Form.Item>
      </Col>
      <Col span={4}>
      <Form.Item 
      labelCol={6}
      name="bannerImage"
      >
      <Upload
      type="select"
      showUploadList={{showRemoveIcon:false}}
      defaultFileList ={[
           {
            name:"asd",
            uid:"abc",
            url:"https://localhost:44363/images/ninja.jpg",
           }
      ]}
      beforeUpload={handleUploadBeforeBanner}
      accept='.jpg'
      listType="picture"
      maxCount={1}
    >
      <Button icon={<UploadOutlined />}>Banner</Button>
    </Upload>
        </Form.Item>
        </Col>
      <Col span={2}>
      <Button 
      type="primary" 
      size="large"
      icon={<PlusSquareOutlined style={{ position: "relative",top:"-4px" }} /> }
       htmlType="submit">
           {"EKLE"}
          </Button>
          </Col>
      </Row>
      </Form>
   
      <div style={{ border: '1px solid #ccc', zIndex: 100}}>
                <Toolbar
                    editor={editor}
                    defaultConfig={toolbarConfig}
                    mode="default"
                    style={{ borderBottom: '1px solid #ccc' }}
                />
                <Editor
                    defaultConfig={editorConfig}
                    value={html}
                    onCreated={setEditor}
                    onChange={editor => setHtml(editor.getHtml())}
                    mode="default"
                    style={{ height: '500px', overflowY: 'hidden' }}
                />
            </div>
            <div style={{ marginTop: '15px' }}>
                {html}
            </div>
    </>
  )

  
}
