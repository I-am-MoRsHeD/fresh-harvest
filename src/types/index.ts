export interface IButton {
    className?: string;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    href?: string;
    onClick?: () => void;
    bg?: string;
}