import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";

import css from "./styles/style.css";

export const links = () => [
    { rel: "stylesheet", href: css },
];

export const meta = () => ( {
    charset: "utf-8",
    title: "Three-card blog layout using Remix and Vanilla Framework",
    viewport: "width=device-width,initial-scale=1",
} );

export default function App() {
    return (
        <html lang="en">
        <head>
            <Meta/>

            <Links/>
        </head>

        <body>
        <Outlet/>

        <ScrollRestoration/>

        <Scripts/>

        <LiveReload/>
        </body>
        </html>
    );
}
