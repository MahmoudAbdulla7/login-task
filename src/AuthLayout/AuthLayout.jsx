import { Col, Flex, Row } from "antd";
import React from "react";
import takamol from "../assets/image 2.png";
import Login from "./Components/Login";
import Footer from "../SharedComponents/Footer";
export default function Components() {
  return (
    <Row style={{ height: "100vh" }}>
      <Col style={{ height: "100%" }} lg={12} span={12} sm={12} xs={24}>

        <Login />
        <Footer />

      </Col>

      <Col
        style={{ height: "100%", background: "rgba(2, 28, 93, 1)" }}
        span={12}
        lg={12}
        sm={12}
        xs={0}
      >
        <Flex
          className="bg-vector"
          style={{ height: "100%" }}
          justify={"center"}
          align={"center"}
        >
          <div style={{ width: "100%", textAlign: "center" }}>
            <img src={takamol} style={{ width: "65%" }} alt="" />
          </div>
        </Flex>
      </Col>
    </Row>
  );
}
