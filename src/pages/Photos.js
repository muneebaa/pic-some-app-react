import React, { useContext } from "react"

import Image from "../components/Image"
import { Context } from "../Context"
import { getClass } from "../utils"

function Photos() {
    const { allPhotos } = useContext(Context)

    const imageElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className="big" />
    ))

    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos