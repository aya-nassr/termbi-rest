import { Container, Row, Col } from "react-bootstrap";
import { Outlet, Link, useLocation } from "react-router-dom";
import { ProfileSidebar } from "../components/profile-sidebar";
import "./style.css";

export function ProfilePage() {
  const location = useLocation();
  const isManage = location.pathname.includes("manage");

  return (
    <div className="profile-page-wrapper">
      <Container>
        <div className="profile-breadcrumbs mb-4">
          <Link to="/">Home</Link>
          <span className="separator">&gt;</span>
          <span className="text-muted">My Profile</span>
          <span className="separator">&gt;</span>
          <span className="active">{isManage ? "Manage Profile" : "..."}</span>
        </div>

        <Row>
          <Col lg={3} className="mb-4 mb-lg-0">
            <ProfileSidebar />
          </Col>

          <Col lg={9}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
