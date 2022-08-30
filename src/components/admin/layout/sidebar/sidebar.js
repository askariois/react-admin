import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar sidebar-style-2" data-background-color="dark2">
      <div className="sidebar-wrapper scrollbar scrollbar-inner">
        <div className="sidebar-content">
          <div className="user">
            <div className="avatar-sm float-left mr-2">
              <img
                src="../assets/img/profile.jpg"
                alt="..."
                className="avatar-img rounded-circle"
              />
            </div>
            <div className="info">
              <Link
                to="#collapseExample"
                data-toggle="collapse"
                aria-expanded="true"
              >
                <span>
                  Hizrian
                  <span className="user-level">Administrator</span>
                  <span className="caret"></span>
                </span>
              </Link>
              <div className="clearfix"></div>

              <div className="collapse in" id="collapseExample">
                <ul className="nav">
                  <li>
                    <Link to="#profile">
                      <span className="link-collapse">My Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#edit">
                      <span className="link-collapse">Edit Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#settings">
                      <span className="link-collapse">Settings</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul className="nav nav-primary">
            <li className="nav-section">
              <span className="sidebar-mini-icon">
                <i className="fa fa-ellipsis-h"></i>
              </span>
              <h4 className="text-section">Меню</h4>
            </li>
            <li className="nav-item">
              <Link data-toggle="collapse" to="/admin">
                <i className="fas fa-layer-group"></i>
                <p>Консоль</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link data-toggle="collapse" to="/admin/region">
                <i className="fas fa-th-list"></i>
                <p>Регион</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link data-toggle="collapse" to="/admin/seo">
                <i className="fas fa-pen-square"></i>
                <p>SEO</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link data-toggle="collapse" to="/admin/blog">
                <i className="fas fa-table"></i>
                <p>Блог</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link data-toggle="collapse" to="/admin/manager">
                <i className="fas fa-map-marker-alt"></i>
                <p>Управляющий</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
