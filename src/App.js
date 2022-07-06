import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { publicRoute } from '~/Routes';
import { DefaultLayout } from '~/components/Layout';
import { Fragment } from 'react';

function App() {
    return (
        <div className="App">
            <Routes>
                {publicRoute.map((item, index) => {
                    const Page = item.component;
                    let Layout = DefaultLayout;

                    if (item.layout) {
                        Layout = item.layout;
                    } else if (item.layout === null) {
                        Layout = Fragment;
                    }
                    return (
                        <Route
                            key={index}
                            path={item.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        ></Route>
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
