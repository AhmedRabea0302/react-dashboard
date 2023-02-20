import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./App.css";
const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="top">
              <button
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "50%" }}
                type="button"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              SideBar
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">sidebar w-0</div>
          )}

          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? " md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              NavBar
            </div>
          </div>

          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element="Ecommerce" />
              <Route path="/ecomerce" element="Ecommerce" />

              {/* Pages */}
              <Route path="/orders" element="orders" />
              <Route path="/employees" element="employees" />
              <Route path="/customers" element="customers" />

              {/* Apps */}
              <Route path="/kanban" element="kanban" />
              <Route path="/editor" element="editor" />
              <Route path="/calender" element="calender" />
              <Route path="/color-picker" element="color-picker" />

              {/* Charts */}
              <Route path="/line" element="line" />
              <Route path="/area" element="area" />
              <Route path="/bar" element="bar" />
              <Route path="/pie" element="pie" />
              <Route path="/financal" element="financal" />
              <Route path="/color-mapping" element="color-mapping" />
              <Route path="/pyramid" element="pyramid" />
              <Route path="/line" element="line" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
