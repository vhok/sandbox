import React from "react";
import { useState, useRef } from "react";

// React.FC is a typescript type that react provides
// <> specifies props that it takes
// ? field is optional

interface obj2 {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    status?: boolean;
    num: number;
    fn?: (input: string) => string;
    obj: {
        p1: string;
    };
    User: obj2;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<Props> = ({}) => {
    const [count, setCount] = useState<number | null | undefined>(5);
    const inputRef = useRef<HTMLInputElement>(null);

    setCount(null);

    return (
        <div>
            <input ref={inputRef} />
        </div>
    );
};