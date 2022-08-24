import React from 'react'
import { Form, Input, Button } from "antd";
import { Alert, Checkbox } from "antd";

export default function Login() {
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
  //onFinish={onFinish}
  //onFinishFailed={onFinishFailed}
  autoComplete="off"
>
  <Form.Item
    label="Kullanıcı Adı"
    name="Kullanıcı Adı"
    rules={[{ required: true, message: "Kullanıcı adını giriniz!" }]}
  >
    <Input />
  </Form.Item>

  <Form.Item
    label="Şifre"
    name="Şifre"
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
