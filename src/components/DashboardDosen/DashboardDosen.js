import React, { useState } from "react";
// import Nav from './Sidebar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import classNames from "classnames";
import Reminder from './Reminder'
// import Calendar from "./Calendar";
// import Info from './Info';


function DashboardDosen() {

    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  
    return (
    <div>
    <div className="AppDashboardDosen wrapper">
        <Sidebar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <div className='content is-open'>
            <Topbar toggleSidebar={toggleSidebar} />
            <div className="jumbotron">
                <Container>
                    <Row>
                        <Col sm={4}>
                            <Figure>
                                <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17ad96f7331%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17ad96f7331%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2260.8828125%22%20y%3D%2295.1%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                />
                                <Figure.Caption>
                                    Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col sm={8}>
                            <Figure>
                                <Figure.Caption>
                                    Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.
                                    Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libe Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libe
                                </Figure.Caption>
                            </Figure>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Reminder/>
            {/* <Calendar/> */}
            {/* <Info/> */}
        </div>
    </div>
    </div>
    )
}

export default DashboardDosen
