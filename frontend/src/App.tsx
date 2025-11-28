import { BrowserRouter, Route, Routes } from "react-router";
import SigInPage from './pages/SignInPage';
import ChatAppPage from "./pages/ChatAppPage";
import { SigUpPage } from "./pages/SignUpPage";
import { Toaster } from 'sonner';
function App() {
  return <>
    <Toaster richColors />     {/* một thư viện thông báo để ở đây để nó có thể hiển thị ở các trang */}
    <BrowserRouter>
      <Routes>

        {/**public routes */}
        <Route
          path='/signin'
          element={<SigInPage />}
        />
        <Route
          path='/signup'
          element={<SigUpPage />}
        />
        <Route
          path='/'
          element={<ChatAppPage />}
        />

        {/* protectect routes */}


      </Routes>
    </BrowserRouter>

  </>;
}
export default App;
