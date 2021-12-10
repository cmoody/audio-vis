import { useEffect, useRef } from "react";

export default function AudioVisualiser({audioData}) {
    const canvasElement = useRef(null);

    const draw = () => {
        const canvas = canvasElement.current;
        const height = canvas.height;
        const width = canvas.width;
        const context = canvas.getContext('2d');
        let x = 0;
        const sliceWidth = (width * 1.0) / audioData.length;

        context.lineWidth = 2;
        context.strokeStyle = '#000000';
        context.clearRect(0, 0, width, height);

        context.beginPath();
        context.moveTo(0, height / 2);
    
        for (const item of audioData) {
            const y = (item / 255.0) * height;
            context.lineTo(x, y);
            x += sliceWidth;
        }

        context.lineTo(x, height / 2);
        context.stroke();
    };

    useEffect(() => {
        draw();
    })

    return (
        <canvas ref={canvasElement} width="300" height="300"/>
    );
}