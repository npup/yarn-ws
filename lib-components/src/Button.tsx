import React, { PropsWithChildren } from "react";

interface IButtonProps {
    signal?: "yes" | "no" | "warn";
    type?: "button" | "submit";
}
export const Button: React.FC<IButtonProps & PropsWithChildren> = ({
    children,
    signal,
    type = "button",
}) => {
    return (
        <button type={type} className={signal ? `ctg-signal--${signal}` : ""}>
            {children}
        </button>
    );
};
