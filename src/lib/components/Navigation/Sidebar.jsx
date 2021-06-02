import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import useRefsPosition from 'hooks/useRefsPosition';

const Sidebar = ({ fullSidebar }) => {
  const refPosition = useRef(null);
  useRefsPosition(refPosition);

  return (
    <aside className="w-80 border-r border-gray-01 shadow-card bg-main text-white">
      <div ref={refPosition} className="flex-x-between flex-col pt-8">
        <nav className="scroll-bar">
          <Link to="/" className="px-8 h-15 text-caption font-medium flex items-center">
            <span className="font-semibold">Home</span>
          </Link>
        </nav>
      </div>
    </aside>
  );
};

const mapStateToProps = state => ({
  fullSidebar: state.userInterface.fullSidebar
});

export default connect(mapStateToProps)(Sidebar);
