# CORS problem

看起來你遇到了CORS（跨源資源共用）的問題，這是由於瀏覽器的安全機制所引起的。以下是一些解決此問題的步驟：

後端設定： 確保你的後端應用程式正確設定了CORS。你已經提到在後端添加了 @CrossOrigin，這是正確的。但是，你可能需要進一步檢查它是否允許來自前端應用程式的 http://localhost:5173 這個源。
Axios 設定： 確保在前端的 Axios 請求中正確設定了 withCredentials。你的 axiosConfig 函數應該像這樣：
typescript
Copy code
const axiosConfig = (token: string) => ({
  headers: { Authorization: `Bearer ${token}` },
  withCredentials: true, // 添加這一行
});
處理 Preflight OPTIONS 請求： 如果你的後端應用程式能夠處理OPTIONS請求，這將有助於解決CORS問題。在Spring Boot中，可以使用 CorsConfiguration 類進行相應的配置。
檢查 Token： 確保 getAccessToken 函數在取得 token 時沒有問題，因為未授權的請求也可能引起CORS錯誤。
檢查代碼結構： 確保你的前端應用程式和後端應用程式在同一個埠上運行（都在localhost:5173上）。
使用 Proxy： 如果你使用的是React的開發伺服器，你可以考慮使用代理來解決CORS問題。在 package.json 中添加 "proxy": "http://localhost:8099"。
檢查後端錯誤： 檢查後端應用程式的日誌以確定是否有關於CORS的錯誤信息。