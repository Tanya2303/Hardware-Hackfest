import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    return (
        <div>
            <div
                className="flex justify-between md:justify-around py-4 w-full top-0 left-0 right-0 z-10 px-8 md:px-3">

                <div className="flex items-center w-64">

                    <a className="cursor-pointer">
                        <h3 className="text-4xl font-medium text-white">
                            Safe Sphere
                        </h3>
                    </a>
                </div>

                <div
                    className="items-center md:space-x-8 justify-center justify-items-start md:justify-items-center md:flex md:pt-2 w-full left-0 top-16 px-5 md:px-10 py-3 md:py-0 border-t md:border-t-0 text-xl">

                    <Link to="/">
                        <span className="inline-flex w-auto px-3 py-2 rounded hover:bg-tertiary cursor-pointer text-white">Home</span>
                    </Link>

                    <Link to="/envtab">
                        <span className="inline-flex w-auto px-3 py-2 rounded hover:bg-tertiary cursor-pointer text-white">Environment Info</span>
                    </Link>

                    <Link to="/irtab">
                        <span className="inline-flex w-auto px-3 py-2 rounded hover:bg-tertiary cursor-pointer text-white">Home Security System</span>
                    </Link>

                    <Link to="/steps">
                        <span className="inline-flex w-auto px-3 py-2 rounded hover:bg-tertiary cursor-pointer text-white">Steps Count</span>
                    </Link>
                </div>

            </div>
        </div>
    )
}
