import { createRoot } from 'react-dom/client'
import "./styles/index.css";
import {AppProvider} from "@/app/providers";
import {App} from "./App.tsx";

if (import.meta.env.PROD) localStorage.clear()

createRoot(document.getElementById('root')!).render(
    <AppProvider>
        <App/>
    </AppProvider>
)