import React, { useState } from 'react';
import { connect } from 'react-redux';
import { authLogout } from 'store/actions/Auth';
import OptionMenu from 'lib/containers/OptionMenu';
import { Link } from 'react-router-dom';

const ToolBar = ({ fullSidebar, user, authLogout }) => {
  const [menu, setMenu] = useState(false);
  const logoImg = `${fullSidebar ? 'apps-logo-w105' : 'icon-logo-w192'}.png`;

  return (
    <header className="navbar">
      <div className="flex-y-center w-full px-8">
        <div className="logo">
          <img
            src={`${process.env.PUBLIC_URL}/logo/${logoImg}`}
            alt="Logo"
            className={`h-auto ${fullSidebar ? 'w-24' : 'w-7'}`}
          />
        </div>

        <div className="flex-center-end relative w-full">
          <span className="mobile/caption text-main mr-4 capitalize">
            {user?.nama}
          </span>

          <button onClick={() => setMenu(!menu)}>
            <img src={user?.photo} className="w-6 h-6 rounded-full" alt="avatar" />
          </button>

          {menu &&
            <OptionMenu callback={() => setMenu(false)} className="top-8">
              <Link to="/profile" onClick={() => setMenu(false)} className="btn-list p-4">
                Lihat Profil
              </Link>

              <button
                className="btn-list p-4"
                onClick={authLogout}
              >
                <span className="text-system/red">Log Out</span>
              </button>
            </OptionMenu>
          }
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = state => ({
  fullSidebar: state.userInterface.fullSidebar,
  user: state.auth.user
});

export default connect(mapStateToProps, { authLogout })(ToolBar);
