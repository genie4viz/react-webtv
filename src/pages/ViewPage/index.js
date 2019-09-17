import React, {useState} from 'react';
import { Layout, Row, Drawer} from 'antd';
import {navHeight} from '../../global';
import {ViewHeader} from '../../components/ViewHeader';
import background from '../../assets/images/bg.jpg';
import './index.css';

const { Content } = Layout;

const ViewPage = props => {
    console.log(props.match.params.page, 'params')
    const [visibleSider, setVisibleSider] = useState(false);
    const onClose = e => {
        setVisibleSider(false);
    }

    const showSider = () => {
        setVisibleSider(!visibleSider);
    }

    return (
        <div className="view-frame">
            <div className="pattern-over"></div>
            <img className='view-background-img' src={background} alt="" />
            <Layout className='view-layout'>
                <ViewHeader onShowSider={showSider}/>
                <Content className="view-content">
                    <Row type="flex" justify="center">
                        <span className="expiration-span">
                            EXPIRATION: SEPTEMBER 27, 2019
                        </span>
                    </Row>
                    <Drawer
                        placement="left"
                        closable={false}
                        onClose={onClose}
                        visible={visibleSider}
                        style={{marginTop: navHeight}}
                        bodyStyle={{backgroundColor: 'black', height: '100%', color: 'white'}}
                    >
                        <h2 style={{color: 'white', padding: 4}}>Categories</h2>
                        <h4 style={{color: 'white', padding: 4}}>Some contents...</h4>
                        <h4 style={{color: 'white', padding: 4}}>Some contents...</h4>
                        <h4 style={{color: 'white', padding: 4}}>Some contents...</h4>
                        <h4 style={{color: 'white', padding: 4}}>Some contents...</h4>
                        <h4 style={{color: 'white', padding: 4}}>Some contents...</h4>
                        <h4 style={{color: 'white', padding: 4}}>Some contents...</h4>
                        <h4 style={{color: 'white', padding: 4}}>Some contents...</h4>
                        <h4 style={{color: 'white', padding: 4}}>Some contents...</h4>
                        <h4 style={{color: 'white', padding: 4}}>Some contents...</h4>
                        <h4 style={{color: 'white', padding: 4}}>Some contents...</h4>
                        <h4 style={{color: 'white', padding: 4}}>Some contents...</h4>
                        <h4 style={{color: 'white', padding: 4}}>Some contents...</h4>
                    </Drawer>
                </Content>
            </Layout>
        </div>
    )
}

export default ViewPage;