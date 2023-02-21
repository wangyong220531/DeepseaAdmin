import { BrowserRouter, Routes, Route } from "react-router-dom"
import MenuList from "./routes"
import DashBoard from "./pages/Dashboard"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Redirect from "./components/Redirect"
import "./App.css"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route
                    path="/"
                    element={
                        <Redirect from="/" to={`${MenuList[0].key}`}>
                            <DashBoard />
                        </Redirect>
                    }
                >
                    {MenuList.map(item => (
                        <Route
                            path={item.key}
                            key={item.key}
                            element={
                                item.children ? (
                                    <Redirect from={[`/${item.key}`, `/${item.key}/`]} to={item.children ? `/${item.key}/${item.children[0].key}` : `/${item.key}`}>
                                        {item.element}
                                    </Redirect>
                                ) : (
                                    item.element
                                )
                            }
                        >
                            {item.children?.map(subItem => (
                                <Route path={`${subItem.key}/*`} key={subItem.key} element={subItem.element} />
                            ))}
                        </Route>
                    ))}
                </Route>
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
