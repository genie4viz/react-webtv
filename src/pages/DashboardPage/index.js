import React, { useContext } from 'react';
import { Layout, Row } from 'antd';
import { DashboardHeader } from '../../components/DashboardHeader';

import { FaUser, FaClock, FaSignOutAlt } from 'react-icons/fa';
import livetv from '../../assets/images/livetv.png';
import movies from '../../assets/images/movies.png';
import series from '../../assets/images/series.png';
import background from '../../assets/images/dashboard.jpg';
import './index.css';
import { Category } from '../../components/Category';

const { Content } = Layout;

const LargeCategory = [{
    label: "LIVE",
    page: 'livetv',
    icon: livetv
}, {
    label: "MOVIES",
    page: 'movies',
    icon: movies
}, {
    label: "SERIES",
    page: 'series',
    icon: series
}];
const SmallCategory = [{
    label: "ACCOUNT",
    page: 'account',
    icon: <FaUser />  
}, {
    label: "CATCH UP",
    page: 'catchup',
    icon: <FaClock />
}, {
    label: "LOG OUT",
    page: 'logout',
    icon: <FaSignOutAlt />
}];

const DashboardPage = () => {
    return (
        <div className="dashboard-frame">
            <div className="pattern-over"></div>
            <img className='dashboard-background-img' src={background} alt="" />
            <Layout className='dashboard-layout'>
                <DashboardHeader />
                <Content className="dashboard-content">
                    <Row style={{ height: 150 }}>
                    </Row>
                    <Row type="flex" justify="space-around">
                        {LargeCategory.map((e, i) =>
                            <Category key={i} label={e.label} page={e.page} icon={e.icon} isLarge/>
                        )}
                    </Row>
                    <Row type="flex" justify="space-around">
                        {SmallCategory.map((e, i) =>
                            <Category key={i} label={e.label} page={e.page} icon={e.icon}/>
                        )}
                    </Row>
                    <Row type="flex" justify="center">
                        <span className="expiration-span">
                            EXPIRATION: SEPTEMBER 27, 2019
                        </span>
                    </Row>
                </Content>
            </Layout>
        </div>
    );
}

export default DashboardPage;