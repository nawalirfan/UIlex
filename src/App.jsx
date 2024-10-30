import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./custom-components/AppSidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoadingButtonPage } from "./reusable-components/buttons/loading-button/LoadingButtonPage";
import { Main } from "./custom-components/Main";


function App() {
  return (
    <SidebarProvider>
      <Router>
        <AppSidebar />
        <Routes>
          <Route path="/" element={<Main content={<LoadingButtonPage />} />} />
          <Route path="/buttons/loading-button" element={<Main content={<LoadingButtonPage />} />} />
        </Routes>
      </Router>
    </SidebarProvider>
  );
}

export default App;