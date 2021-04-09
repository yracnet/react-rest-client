import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { RequestIndex } from 'main/request';
import { SettingIndex } from 'main/setting';
import { ServiceIndex } from 'main/services';


export const Container = () => {
    return (
        <>
            <main className="mt-2 py-2 container bg-white rounded">
                <Switch>
                    <Route path="/request" component={RequestIndex} />
                    <Route path="/service" component={ServiceIndex} />
                    <Route path="/setting" component={SettingIndex} />
                    <Redirect to="/request" />
                </Switch>
            </main>
            <footer>
                <div className="container p-1">
                    <a href="https://hiskasoft.com" className="text-primary">
                        Copyright © 2021 - HiskaSoft
                    </a>
                </div>
            </footer>
        </>
    )
}
