import React, {useState} from 'react';
import { Layout, Row, Col} from 'antd';
import {navHeight} from '../../global';
import {ViewHeader} from '../../components/ViewHeader';
import {Timeline} from '../../components/TimelineAll/Timeline';
import background from '../../assets/images/bg.jpg';
import './index.css';

const { Content } = Layout;

const ViewPage = props => {
    console.log(props.match.params.page, 'params')

    return (
        <div className="view-frame">
            <div className="pattern-over"></div>
            <img className='view-background-img' src={background} alt="" />
            <Layout className='view-layout'>
                <ViewHeader/>
                <Content className="view-content">
                    <Row type="flex" justify="center">
                        <Timeline />
                    </Row>
                </Content>
            </Layout>
        </div>
    )
}

export default ViewPage;