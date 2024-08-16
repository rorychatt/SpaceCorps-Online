import {useEffect, useRef} from 'react';

const Canvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const transferredRef = useRef(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas && !transferredRef.current) {
            const offscreen = canvas.transferControlToOffscreen();
            const worker = new Worker(new URL('../ts/threeWorker.ts', import.meta.url), {type: 'module'});
            worker.postMessage({canvas: offscreen}, [offscreen]);
            transferredRef.current = true;
        }
    }, []);

    return <canvas ref={canvasRef} style={{width: '100%', height: '100%'}}/>;
};

export default Canvas;