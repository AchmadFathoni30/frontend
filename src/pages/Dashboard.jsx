import React from 'react';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar>
        {/* Main Content */}
        <div className="flex-grow flex flex-col">
          {/* Header */}
          <header className="bg-white shadow p-4">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          </header>
        </div>
      </Sidebar>
    </div>
  );
}

export default Dashboard;
