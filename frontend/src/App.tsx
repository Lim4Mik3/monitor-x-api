import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PostDetails } from "./pages/PostDetails";
import { PostsList } from "./pages/PostsList";
import { Global } from "./styles/global";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Global />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/details" element={<PostDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
