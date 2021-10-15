import React from "react";

import cls from "../Title/title.module.css"

export default function Title(props) {
    return (
        <>
            <h2 className={cls.titleName}>{props.titleOne}</h2>
        </>
    )
}

