import React from 'react'
import { Form, Input, Button } from "antd";
import { Alert, Checkbox } from "antd";
import { login_api } from '../api/user-api';

export default function Login() {
  function submitForm(user_form) {
     login_api(user_form.username,user_form.password)
    
  }
  return (
    <div className="login-cart">
    {/* <Image
      width={100}
      src="https://matrbhumiweb.com/images/noimage.png"
    /> */}
<Form
  style={{width:"50rem"}}
  name="basic"
  labelCol={{ span: 8 }}
  wrapperCol={{ span: 8 }}
  initialValues={{ remember: true }}
  onFinish={submitForm}
  //onFinishFailed={onFinishFailed}
  autoComplete="off"
>
  <Form.Item
    label="Kullanıcı Adı"
    name="username"
    rules={[{ required: true, message: "Kullanıcı adını giriniz!" }]}
  >
    <Input />
  </Form.Item>

  <Form.Item
    label="Şifre"
    name="password"
    rules={[{ required: true, message: "Şifrenizi giriniz!" }]}
  >
    <Input.Password />
  </Form.Item>

  <Form.Item
    name="remember"
    valuePropName="checked"
    wrapperCol={{ offset: 8, span: 16 }}
  >
    <Checkbox>Beni hatırla</Checkbox>
  </Form.Item>

  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
    <Button
      onClick={() => alert("Giriş başarılı")}
      type="primary"
      htmlType="submit"
    >
      Giriş
    </Button>
  </Form.Item>
</Form>
</div>
  )
}
