'use client'

import { Mail, Linkedin, Github, Instagram, FileCode2, Book } from "lucide-react";
import { useState } from "react";
import CardBio from "../components/card-bio";

export default function Bio() {
    const [copied, setCopied] = useState(false);

    return (
        <main className="w-screen h-screen mx-auto bg-center bg-repeat flex justify-center" style={{
            backgroundImage: "url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512%22%20height%3D%22512%22%20preserveAspectRatio%3D%22none%22%3E%20%3Cstyle%3E%20path%20%7B%20stroke-linecap%3A%20square%3B%20stroke-width%3A%202.01px%3B%20stroke%3A%20rgba(219,175,169,0.188)%3B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%20%3C%2Fstyle%3E%20%3Cpath%20d%3D%22M%20256%20192%20L%20256%20320%20M%20192%20256%20L%20320%20256%22%20%2F%3E%3C%2Fsvg%3E')",
            backgroundSize: '62px',
            backgroundColor: '#333333'
        }}>
            <section className="max-w-xl min-h-screen pb-px flex flex-col justify-center gap-8 p-2">
                <CardBio copied={copied} setCopied={setCopied}/>
                <nav>
                    <ul className="flex gap-4 mt-2 p-2">
                        <li>
                            <a href="https://www.linkedin.com/in/vinicdev/" title="Linkedin" target="_blank">
                                <Linkedin className="stroke-icon hover:stroke-iconHover hover:scale-125 ease-in duration-300" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/vinicdev"title="GitHub" target="_blank">
                                <Github className="stroke-icon hover:stroke-iconHover hover:scale-125 ease-in duration-300" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/c4rdos0_/" title="Instagram" target="_blank">
                                <Instagram className="stroke-icon hover:stroke-iconHover hover:scale-125 ease-in duration-300" />
                            </a>
                        </li>
                        <li>
                            <a href="https://viniciuscardoso.dev/" title="Portfólio" target="_blank">
                                <FileCode2 className="stroke-icon hover:stroke-iconHover hover:scale-125 ease-in duration-300" />
                            </a>
                        </li>
                        <li>
                            <a href="https://blog.viniciuscardoso.dev/" title="Blog Cardoso Post" target="_blank">
                                <Book className="stroke-icon hover:stroke-iconHover hover:scale-125 ease-in duration-300" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
        </main>
    )
}