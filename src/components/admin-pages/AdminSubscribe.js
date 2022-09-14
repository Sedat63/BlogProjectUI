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
} from "antd";
import * as dbTag from "../../api/tag-api";
import {
  tag_str,
  tag_upper_str,
  cancel_str,
  required_field_str,
} from "../../helper/constant/global-constant";
import {
  PlusSquareOutlined,
  UserOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

function AdminSubscriber() {
  //function component hook fark yoktur.

  //State  //degişken  //deger atama metodu
  const [subscribers, setSubscribers] = useState([]); //initial value
  const [flags, setFlags] = useState({subscriberModalVisible: false, operationTitle: "",});
  const [subscriberForm] = Form.useForm();
  const formItemLayout = { labelCol: { span: 7 }, wrapperCol: { span: 17 } };

  useEffect(() => {
    getList();
  }, []); //Tek sefer çalış document ready

  const getList = () => {
    dbTag.getList().then((result) => {
      setSubscribers(result.data);
    });
  };

  const addOrUpdate = (tag) => {
    if (tag.id === 0) dbTag.add(tag).then(operationResult);
    else dbTag.update(tag).then(operationResult);
  };

  const operationResult = (response) => {
    if(!response.successful){
      message.error(response.message);
      subscriberForm.resetFields();
      return;
    }

    message.success(response.message);
    getList();
    setFlags({ ...flags, subscriberModalVisible: false });
    subscriberForm.resetFields();
  };

  const deleteSubscriber = (id) => {
    dbTag.deleteTag(id).then((response) => {
      message.success(response.message);
      getList();
    });
  };

  const fillSubscriberForm = (tag) => {
    subscriberForm.setFieldsValue(tag);
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
      render: (text, tag) => (
        <>
          <Tooltip placement="top" color="blue" title={"GÜNCELLE"}>
            <Button
              icon={<EditOutlined />}
              onClick={() => {
                subscriberForm.resetFields();
                setFlags({
                  ...flags,
                  subscriberModalVisible: true,
                  operationTitle: "Update",
                });
                fillSubscriberForm(tag);
              }}
            />
          </Tooltip>
          <Tooltip placement="bottom" color="red" title={"SİL"}>
            <Popconfirm
              title="Silmek İstediğinize Emin Misiniz ?"
              onConfirm={() => {
                deleteSubscriber(tag.id);
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
        subscriberForm.resetFields();
        setFlags({
          ...flags,
          subscriberModalVisible: true,
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
      {/* Tag */}

      <Tabs defaultActiveKey="1" tabBarExtraContent={header}>
        <Tabs.TabPane
          tab={
            <span className="tabHeaderTitle">
              <UserOutlined />
              {tag_upper_str}
            </span>
          }
          key="1"
        >
          <div className="site-card-border-less-wrapper">
            <Table bordered size="small" columns={columns} dataSource={subscribers} />
          </div>
        </Tabs.TabPane>
      </Tabs>

      <Modal
        title={tag_str}
        visible={flags.subscriberModalVisible}
        onCancel={() =>
          setFlags({
            ...flags,
            subscriberModalVisible: false,
            operationTitle: "EKLE",
          })
        }
        onOk={() => {
          subscriberForm.submit();
        }}
        okText={flags.operationTitle}
        cancelText={cancel_str}
        // confirmLoading={loading}
      >
        <Form
          form={subscriberForm}
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

export default AdminSubscriber;
