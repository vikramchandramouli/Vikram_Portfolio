import React, { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  message,
  notification,
} from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { IoLocationOutline } from "react-icons/io5";
import axios from "axios";
const Contact = () => {
  const [form] = Form.useForm();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textmessage, setTextMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleFinishForm = async (value) => {
    const { name, Email, message } = value;
    const data = {
      name: name,
      email: Email,
      message: message,
    };
    setLoading(true);
    try {
      const response = await axios.post(`https://api.web3forms.com/submit`, {
        ...data,
        access_key: "e0797b2e-5dd2-429f-be01-2e2d235923b9",
      });
      if (response.status === 200) {
        setLoading(false);
        notification.success({ message: "Message sent successfully" });
        form.resetFields();
        setEmail("");
        setName("");
        setTextMessage("");
      } else {
        setLoading(false);
        notification.error({ message: "Failed To send" });
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      notification.error({ message: "Failed To send" });
    }
  };
  return (
    <div className="text-black relative dark:text-white !bg-white dark:!bg-black min-h-screen">
      <Row gutter={[16, 16]}>
        <Col span={1}></Col>
        <Col span={22} className="mt-10">
          {/* <Card bordered={false} className='contact-primary-card w-[90%] p-2 text-white'> */}
          <h6 className="!text-center font-light flex justify-center items-center -ms-[10%]">
            Get in touch
          </h6>
          <h3 className="text-4xl font-bold text-center uppercase flex justify-center -ms-[10%]">
            contact
          </h3>
          <Row gutter={[16, 16]} className="mt-10 contact-form">
            <Col xs={24} sm={24} md={24} lg={13} xl={11} className="sm:block">
              <Row gutter={[16, 16]}>
                <Col span={2}></Col>
                <Col span={18}>
                  <Card
                    bordered={false}
                    className=" text-black dark:!text-white bg-white dark:!bg-gray-400/10 contact-card my-2 !shadow-lg !shadow-[#c4c4b9] dark:!shadow-gray-400/10 "
                  >
                    <div>
                      <Avatar>
                        <PhoneOutlined />
                      </Avatar>
                      <span className="ms-4 text-lg font-medium">
                        +91- 6381235470
                      </span>
                    </div>
                  </Card>
                </Col>
                <Col span={4}></Col>
              </Row>
              <Row>
                <Col span={2}></Col>
                <Col span={18}>
                  <Card
                    bordered={false}
                    className="contact-card text-black dark:!text-white bg-white dark:!bg-gray-400/10  my-2 !shadow-lg !shadow-[#c4c4b9] dark:!shadow-gray-400/10 "
                  >
                    <a
                      href="mailto:vikramchandramouli15@gmail.com"
                      target="_blank"
                      className="hover:text-[#0b77db]"
                    >
                      <Avatar>
                        <MailOutlined />
                      </Avatar>
                      <span className="ms-4 text-lg font-medium">
                        vikramchandramouli15@gmail.com
                      </span>
                    </a>
                  </Card>
                </Col>
                <Col span={4}></Col>
              </Row>
              <Row>
                <Col span={2}></Col>
                <Col span={18}>
                  <Card
                    bordered={false}
                    className="contact-card text-black dark:!text-white bg-white dark:!bg-gray-400/10  my-2 !shadow-lg !shadow-[#c4c4b9] dark:!shadow-gray-400/10 "
                  >
                    <a
                      href="https://www.google.com/maps/place/Gummidipoondi,+Tamil+Nadu"
                      target="_blank"
                      className="hover:text-[#0b77db]"
                    >
                      <Avatar>
                        <IoLocationOutline size={15} />
                      </Avatar>
                      <span className="ms-4 text-lg font-medium">
                        Gummidipoondi,TamilNadu
                      </span>
                    </a>
                  </Card>
                </Col>
                <Col span={4}></Col>
              </Row>
            </Col>
            <Col
              xs={1}
              sm={1}
              md={1}
              lg={1}
              xl={1}
              className="border-l-2 border-slate-700"
            ></Col>
            <Col xs={24} sm={24} md={24} lg={10} xl={12}>
              <Form
                className="text-black !dark:text-white port-form sm:!max-w-[600px] sm:ms-[8%] active:border-none"
                layout="horizontal"
                onFinish={handleFinishForm}
                // style={{
                //     maxWidth: 600,
                // }}
              >
                <Form.Item
                  name="name"
                  // label='Name'
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    className="w-full border-none px-4 py-2 rounded-lg transition-all duration-200 group text-black !bg-gray-400/10  dark:hover:bg-gray-500/10 hover:bg-gray-400/20 active:bg-gray-400/30 active:outline-none focus:outline-none active:ring-2 active:ring-primary active:ring-opacity-50 focus:ring-2 focus:ring-primary focus:ring-opacity-50 dark:focus:!bg-black dark:!text-white hover:-translate-y-1 hover:scale-[1.02]"
                    value={name}
                    onChange={(e) => setName(e?.target?.value)}
                    placeholder="Name"
                  />
                </Form.Item>
                <Form.Item
                  name="Email"
                  // label='Email'
                  rules={[
                    {
                      type: "email",
                      required: true,
                    },
                  ]}
                >
                  <Input
                    value={email}
                    className="w-full px-4 py-2 border-none rounded-lg transition-all duration-200 group text-black !bg-gray-400/10 dark:hover:bg-gray-500/10 hover:bg-gray-400/20 active:bg-gray-400/30 active:outline-none focus:outline-none active:ring-2 active:ring-primary active:ring-opacity-50 focus:ring-2 focus:ring-primary focus:ring-opacity-50 dark:focus:!bg-black dark:!text-white hover:-translate-y-1 hover:scale-[1.02]"
                    onChange={(e) => setEmail(e?.target?.value)}
                    placeholder="Email"
                  />
                </Form.Item>
                <Form.Item
                  name="message"
                  // label='Message'
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input.TextArea
                    rows={4}
                    className="w-full px-4 py-2 border-none rounded-lg transition-all duration-200 group text-black !bg-gray-400/10 dark:hover:bg-gray-500/10 hover:bg-gray-400/20 active:bg-gray-400/30 active:outline-none focus:outline-none active:ring-2 active:ring-primary active:ring-opacity-50 focus:ring-2 focus:ring-primary focus:ring-opacity-50 dark:focus:!bg-black  dark:!text-white hover:-translate-y-1 hover:scale-[1.02]"
                    maxLength={600}
                    style={{
                      // resize: 'none'
                      minHeight: 70,
                      maxHeight: 400,
                    }}
                    value={textmessage}
                    placeholder="Message"
                    onChange={(e) => setTextMessage(e?.target?.value)}
                  />
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    offset: 10,
                  }}
                >
                  <Button
                    // type="primary"
                    htmlType="submit"
                    loading={loading}
                    className=" px-4 py-2 hover:!bg-custom-blue hover:!text-white  rounded-lg shadow-2xl !shadow-custom-blue transition-all duration-200 bg-custom-blue group text-white dark:border-none"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
          {/* </Card> */}
        </Col>
        <Col span={1}></Col>
      </Row>
    </div>
  );
};

export default Contact;
