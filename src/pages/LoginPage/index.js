import React, { useContext } from 'react';
import { Layout, Row, Col } from 'antd';
 import { Link } from "react-router-dom";
import { WrappedLoginForm } from '../../components/LoginForm';
import background from '../../assets/images/bg.jpg';
import shacktv from '../../assets/images/shacktv.png';
import './index.css';

const {Content } = Layout;

const LoginPage = () => {
    return (
        <div className="login-frame">
            <div className="pattern-over"></div>
            <img className='login-background-img' src={background} alt="" />
            <Layout className='login-layout'>
                <Content className="login-content">
                    <Row type="flex" justify="center" style={{padding: 30}}>
                        <Col md={8} style={{display: 'flex', justifyContent: 'center'}}>
                            <Link to="/dashboard"><img className="img-responsive" src={shacktv} alt="" /></Link>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col md={10}>
                            <WrappedLoginForm />
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </div>
    );
}

export default LoginPage;