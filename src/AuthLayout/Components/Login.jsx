import { Flex, Form, Input, Button, Checkbox } from "antd";
import React from "react";
import message from "../../assets/Group 1000005350.svg";
import password from "../../assets/lock.svg";
import Link from "antd/es/typography/Link";
export default function Login() {
  const email = <img style={{ marginLeft: "3px" }} src={message} alt="" />;
  const lock = <img style={{ marginLeft: "3px" }} src={password} alt="" />;

  return (
    <Flex style={{ height: "93%" }} justify={"center"} align={"center"}>
      <div style={{ width: "80%" }}>
        <div>
          <h1 style={{ fontWeight: "600", fontSize: "20px" }}>تسجيل دخول</h1>
          <span
            style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "rgba(130, 130, 130, 1)",
            }}
          >
            من فضلك قم بادخال بياناتك المسجله لدينا حتي تتمكن من تسجيل الدخول
          </span>
        </div>

        <Form style={{ marginTop: "1.6rem" }} layout="vertical">
          <Form.Item
            htmlFor="email"
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              marginBottom: ".7rem",
            }}
            label="البريد الالكتروني "
          >
            <Input
              prefix={email}
              className="custom-input"
              size=""
              style={{
                borderRadius: "15px",
                padding: "1rem",
                background: "rgba(250, 250, 250, 1)",
              }}
              id="email"
              placeholder="ادخل بريدك الالكتروني ..."
            />
          </Form.Item>

          <Form.Item
            style={{ margin: "0", padding: "0" }}
            htmlFor="password"
            label="كلمة المرور"
          >
            <Input.Password
              prefix={lock}
              className="custom-input"
              size="large"
              style={{
                borderRadius: "15px",
                padding: "1rem",
                background: "rgba(250, 250, 250, 1)",
              }}
              id="password"
              placeholder="ادخل كلمة مرور حسابك ..."
            />
          </Form.Item>

          <Flex
            style={{
              width: "100%",
              margin: "0",
              padding: "0",
              fontWeight: "bold",
            }}
            align="center"
            justify="space-between"
          >
            <Checkbox
              className="custom-checkbox"
              style={{ padding: "1rem", paddingRight: "0" }}
            >
              تذكرني
            </Checkbox>
            <Link style={{ color: "black" }}>نسيت كلمة المرور ؟</Link>
          </Flex>

          <Form.Item>
            <Button
              block
              style={{
                background: "rgba(0, 33, 113, 1)",
                padding: "1.5rem",
                borderRadius: "15px",
                fontWeight: "bold",
              }}
              type="primary"
            >
              <span style={{ fontSize: "16px" }}>تسجيل دخول</span>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Flex>
  );
}
