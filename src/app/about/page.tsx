"use client";

import React from "react";

export default function About() {
    const [_user, _setUser] = React.useState<string | null>(null);
    const _number = 10;
    return <div className="bg-red-500 text-7xl border-2 border-white">About</div>;
}