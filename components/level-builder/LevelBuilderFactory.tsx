import { useState } from "react";
import { LevelBody, LevelBodyImage, LevelBodyText, LevelPayloadType } from "../../models/level";

interface Props {
    data: LevelBody;
}

export const Creator = ({ data }: Props) => {
    switch (data.type) {
        case LevelPayloadType.None:
            return <h2>Non type selected</h2>
        case LevelPayloadType.Text:
            return <TextCell data={data} />
        case LevelPayloadType.Image:
            return <ImageCell data={data} />
        default:
            return <h2>Non type selected</h2>
    }

}

const TextCell = ({ data }: Props) => {
    const payload = JSON.parse(data.payload == "" ? JSON.stringify({ text: "Enter text here" }) : data.payload) as LevelBodyText;

    return <p className="p-4">{payload.text}</p>
}

const ImageCell = ({ data }: Props) => {
    const payload = JSON.parse(data.payload == "" ? JSON.stringify({ url: "https://th.bing.com/th/id/OIP.LObGOd89zxuAexT2fugvNgHaEK?pid=ImgDet&rs=1" }) : data.payload) as LevelBodyImage
    return <img style={{ width: "100%" }} src={payload.url} ></img>
}