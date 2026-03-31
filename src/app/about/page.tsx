"use client"

import React from "react"

export default function About() {
    const [_user, _setUser] = React.useState<string | null>(null)
    const [_count, _setCount] = React.useState(0)
    const [_name, _setName] = React.useState("")
    const [_isLoggedIn, _setIsLoggedIn] = React.useState(false)
    return <div className="bg-red-500 text-7xl border-2 border-white">About</div>;
}