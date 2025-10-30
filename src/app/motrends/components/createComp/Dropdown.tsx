'use client'

import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { useFormContext } from "../../context/FormContext";


export default function Dropdown({
    buttonText, content, ready
}: {
    buttonText: string;
    content: React.ReactNode;
    ready: boolean
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

        if (open) {
            document.addEventListener("click", handler);
        }

        return () => {
            document.removeEventListener("click", handler);
        };
    }, [open])

    return (
        <div className="relative" ref={dropdownRef}>
            <DropdownBtn
                toggleAction={toggleDropdown}
                open={open}
                ready={ready}
            >
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
    toggleAction,
    ready
}: {
    children: React.ReactNode;
    open: boolean;
    toggleAction: () => void;
    ready: boolean
}) {
    return (
        <div onClick={toggleAction}
            className={`flex items-center font-bold rounded-lg p-2 w-fit 
            ${ready
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 hover:bg-gray-500"}
            transition-colors text-white  cursor-pointer gap-2 
                ${open
                    ? "border-2 border-black"
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
    value,
    selectedValue,
    onClickAction
}: {
    children: React.ReactNode;
    value: string
    selectedValue: string
    onClickAction: () => void;
}) {
    return (
        <div
            className={`p-[0.5rem] m-[0.1rem] w-full flex justify-center cursor-pointer font-bold text-white rounded-lg transition-colors
                ${selectedValue === value
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 hover:bg-gray-500"
                }`}
            onClick={onClickAction}
        >
            {children}
        </div>)

}
