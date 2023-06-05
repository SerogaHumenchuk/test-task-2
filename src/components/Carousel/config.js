import { Card } from "./Card";
import Spongebob4 from "../../images/Spongebob4.png";
import Spongebob5 from "../../images/Spongebob5.png";
import Spongebob9 from "../../images/Spongebob9.png";
import React from "react";

export const cards = [
    {
        key: 1,
        content: (
            <Card image={Spongebob4} />
        )
    },
    {
        key: 2,
        content: (
            <Card image={Spongebob5} />
        )
    },
    {
        key: 3,
        content: (
            <Card image={Spongebob9} />
        )
    },
];