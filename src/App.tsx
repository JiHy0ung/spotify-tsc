import "./App.css";
import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router";
import SearchWithKeywordPage from "./pages/SearchWithKeywordPage/SearchWithKeywordPage";
import PlaylistDetailPage from "./pages/PlaylistDetailPage/PlaylistDetailPage";
import PlaylistPage from "./pages/PlaylistPage/PlaylistPage";
import Loading from "./common/components/Loading";
import useExchangeToken from "./hooks/useExchangeToken";

const AppLayout = React.lazy(() => import("./layout/AppLayout"));
const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const SearchPage = React.lazy(() => import("./pages/SearchPage/SearchPage"));

/*
0. 사이드바 있어야함. (플레이리스트, 메뉴)
1. 홈 페이지(= 랜딩 페이지) =>  /
2. 서치페이지 => /search
3. 서치 결과 페이지 => /search/:keyword
4. 플레이리스트 디테일 페이지 => /playlist/:id
5. (모바일) 플레이리스트 보여주는 페이지 => /playlist

로그인 페이지는 스포티파이에서 제공
*/

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  let code = urlParams.get("code");
  const codeVerifier = localStorage.getItem("code_verifier");

  const { mutate: exchangeToken } = useExchangeToken();

  useEffect(() => {
    if (code && codeVerifier) {
      exchangeToken({ code, codeVerifier });
    }
  }, [code, codeVerifier, exchangeToken]);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="search/:keyword" element={<SearchWithKeywordPage />} />
          <Route path="playlist/:id" element={<PlaylistDetailPage />} />
          <Route path="playlist" element={<PlaylistPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
