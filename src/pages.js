import React from "react"
import { Link, Outlet, useLocation } from "react-router-dom"


export function Home() {
    return (
        <div>
            <h1>
                [Company Website]
                <nav>
                    <Link to="about">About</Link>
                    <Link to="contact">Contact</Link>
                    <Link to="events">Events</Link>
                </nav>
            </h1>
        </div>
    )
}

export function About() {
    return (
        <div>
            <h1>
                [About]
            </h1>
            <Outlet />
        </div>
    )
}

export function Location() {
    return (
        <div>
            <h3>
                [Location]
            </h3>
        </div>
    )
}

export function History() {
    return (
        <div>
            <h2>
                [Company History]
            </h2>
        </div>
    )
}


export function Events() {
    return (
        <div>
            <h1>
                [Events]
            </h1>
        </div>
    )
}

export function Contact() {
    return (
        <div>
            <h1>
                [Contact]
            </h1>
        </div>
    )
}

export function PageNotFound() {
    const location = useLocation()
    return (
        <div>
            <h1>
                {location.pathname} diye bir yer yok Başka Kapıya!!!

            </h1>
        </div>
    )
}