'use client'

import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"


export default function Dropdown({
    buttonText, content
}: {
    buttonText: string;
    content: React.ReactNode;
}) {
    const [open, setOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setOpen((open) => !open);
    }

    useEffect(() => {
        const handler = (event: MouseEvent) => {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("click", handler)

        return () => {
            document.removeEventListener
                ("click", handler);
        }

    }, [])

    return (
        <div className="relative" ref={dropdownRef}>
            <DropdownBtn toggleAction={toggleDropdown} open={open}>
                {buttonText}
            </DropdownBtn>
            <DropdownContent open={open}>
                {content}
            </DropdownContent>
        </div>
    )

}

export function DropdownBtn({
    children,
    open,
    toggleAction
}: {
    children: React.ReactNode;
    open: boolean;
    toggleAction: () => void;
}) {
    return (
        <div onClick={toggleAction}
            className={`flex items-center font-bold rounded-lg p-2 w-fit transition-colors bg-gray-400 text-white hover:bg-gray-500 cursor-pointer gap-2 
                ${open
                    ? "border-2 border-gray-500"
                    : null
                }`}
        >
            {children}
            <span className="text-2xl">
                {open
                    ? <IoIosArrowUp />
                    : <IoIosArrowDown />
                }
            </span>

        </div>
    )

}

export function DropdownContent({
    children,
    open
}: {
    children: React.ReactNode;
    open: boolean;
}) {
    return (
        <div className={`absolute min-w-full flex flex-col items-center  rounded-lg p-1 mt-[2px] bg-gray-400 shadow-xl max-h=[40vh] -translate-y-[5%] transition-all duration-150 ease-in-out 
            ${open
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
        >
            {children}
        </div>
    )

}

export function DropdownItem({
    children,
    onClickAction
}: {
    children: React.ReactNode;
    onClickAction: () => void;
}) {
    return (
        <div
            className="p-[0.5rem] m-[0.1rem] w-full flex justify-center cursor-pointer font-bold text-white hover:bg-gray-500 rounded-lg"
            onClick={onClickAction}
        >
            {children}
        </div>
    )

}
