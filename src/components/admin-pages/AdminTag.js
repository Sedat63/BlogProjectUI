import React, { useEffect, useState } from "react";
import {
  Button,
  Table,
  Form,
  Input,
  Modal,
  Tabs,
  Tooltip,
  message,
  Popconfirm,
  Checkbox,
} from "antd";
import * as dbTag from "../../api/tag-api";
import {
  client_str,
  clients_upper_str,
  cancel_str,
  required_field_str,
} from "../../helper/constant/global-constant";
import {
  PlusSquareOutlined,
  UserOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

function Tag() {
  //function component hook fark yoktur.

  //State  //degişken  //deger atama metodu
  const [tags, setTags] = useState([]); //initial value
  const [flags, setFlags] = useState({
    clientModalVisible: false,
    clientAddressModalVisible: false,
    operationTitle: "",
  });
  const [tagForm] = Form.useForm();
  const formItemLayout = { labelCol: { span: 7 }, wrapperCol: { span: 17 } };

  useEffect(() => {
    getList();
  }, []); //Tek sefer çalış document ready

  const getList = () => {
    dbTag.getList().then((result) => {
      setTags(result.data);
    });
  };

  const addOrUpdate = (tag) => {
    if (tag.id === 0) dbTag.add(tag).then(operationResult);
    else dbTag.update(tag).then(operationResult);
  };

  const operationResult = (response) => {
    message.success(response.message);
    getList();
    setFlags({ ...flags, clientModalVisible: false });
    tagForm.resetFields();
  };

  const deleteClient = (id) => {
    dbTag.deleteClient(id).then((response) => {
      message.success(response.message);
      getList();
    });
  };

  const fillClientForm = (client) => {
    tagForm.setFieldsValue(client);
  };

  const columns = [
    {
      title: "Etiket Adı",
      dataIndex: "tagName",
      key: "tagName",
    },
    {
      key: "operations",
      width: 120,
      render: (text, client) => (
        <>
          <Tooltip placement="top" color="blue" title={"GÜNCELLE"}>
            <Button
              icon={<EditOutlined />}
              onClick={() => {
                tagForm.resetFields();
                setFlags({
                  ...flags,
                  clientModalVisible: true,
                  operationTitle: "Update",
                });
                fillClientForm(client);
              }}
            />
          </Tooltip>
          <Tooltip placement="bottom" color="red" title={"SİL"}>
            <Popconfirm
              title="Silmek İstediğinize Emin Misiniz ?"
              onConfirm={() => {
                deleteClient(client.id);
              }}
              okText={"EVET"}
              cancelText={"HAYIR"}
            >
              <Button icon={<DeleteOutlined />} />
            </Popconfirm>
          </Tooltip>
        </>
      ),
    },
  ];

  const header = (
    <Button
      type="primary"
      onClick={() => {
        tagForm.resetFields();
        setFlags({
          ...flags,
          clientModalVisible: true,
          operationTitle: "EKLE",
        });
      }}
      icon={
        <PlusSquareOutlined
          style={{ verticalAlign: "middle", fontSize: "20px" }}
        />
      }
    >
      <span style={{ verticalAlign: "middle" }}>{"EKLE"}</span>
    </Button>
  );
  const [activeKey, setActiveKey] = React.useState("1");
  const onKeyChange = (key) => setActiveKey(key);
  return (
    <>
      {/* Client */}

      <Tabs defaultActiveKey="1" tabBarExtraContent={header}>
        <Tabs.TabPane
          tab={
            <span className="tabHeaderTitle">
              <UserOutlined />
              {clients_upper_str}
            </span>
          }
          key="1"
        >
          <div className="site-card-border-less-wrapper">
            <Table bordered size="small" columns={columns} dataSource={tags} />
          </div>
        </Tabs.TabPane>
      </Tabs>

      <Modal
        title={client_str}
        visible={flags.clientModalVisible}
        onCancel={() =>
          setFlags({
            ...flags,
            clientModalVisible: false,
            operationTitle: "EKLE",
          })
        }
        onOk={() => {
          tagForm.submit();
        }}
        okText={flags.operationTitle}
        cancelText={cancel_str}
        // confirmLoading={loading}
      >
        <Form
          form={tagForm}
          layout={"horizontal"}
          onFinish={addOrUpdate}
          {...formItemLayout}
          size={"small"}
          labelAlign={"left"}
        >
          <Form.Item name={"id"} hidden={true} initialValue={0}>
            <Input />
          </Form.Item>
          <Form.Item
            label={"Etiket Adı"}
            name="tagName"
            rules={[{ required: true, message: required_field_str }]}
          >
            <Input placeholder={"Etiket Adı"} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default Tag;
