import React from "react";
import { useState } from "react";

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

}

export const TextField: React.FC<Props> = ({}) => {
    const [count, setCount] = useState<number | null | undefined>(5);

    setCount(null);

    return (
        <div>
            <input />
        </div>
    );
};