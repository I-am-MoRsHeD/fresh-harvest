import React from "react";
import Link from "next/link";
import { IButton } from "@/types";

const Button = ({
    className = "",
    children,
    type = "button",
    href,
    onClick,
    bg
}: IButton) => {
    const hasTextColor = className?.includes("text-");
    const baseStyle = `
  ${!hasTextColor ? "text-white" : ""}
  rounded-lg px-4 py-2 w-full flex items-center justify-center transition hover:opacity-90
`;
    const bgStyle = { backgroundColor: bg || "#FF6A1A" };
    const combinedClasses = `${baseStyle} ${className}`.trim();

    if (href) {
        return (
            <Link href={href} style={bgStyle} className={combinedClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} style={bgStyle} className={combinedClasses}>
            {children}
        </button>
    );
};

export default Button;
