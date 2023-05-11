import React, { useState, useEffect, useRef } from 'react';
import { fabric } from "fabric";

import { useLocation } from 'react-router-dom';









function Sec() {
    const ref = useRef();
    const location = useLocation();

    const Data = location.state.value;
    const Url = Data.urls.small

    const [text1, settext] = useState('')
    const [downloadLink, setDownloadLink] = useState('')
    const [downloadName, setDownloadName] = useState('')

    const canvas = useRef(null);

    useEffect(() => {
        canvas.current = initCanvas();

        canvas.current.on("mouse:over", () => {
            console.log('hello')
        }, []);

        return () => {
            canvas.current.dispose();
            canvas.current = null;
        };
    }, []);

    const initCanvas = () => (
       
        new fabric.Canvas('canvas', {
            height: 500,
            width: 600,
            backgroundImage: Url,
            selection: false,
            renderOnAddRemove: true,
            
        })
    );

    function addTextToCanvas(e) {
        let textBox = new fabric.IText(text1, {
            left: 100,
            top: 100,
            fontSize: 20,
            
            fontFamily: 'sans-serif'
        });
        canvas.current.add(textBox);
    }



    const addCircle = () => {
        canvas.current.add(new fabric.Circle({
            width: 100,
            height: 100,
            radius: 50,
            left: 170,
            top: 150,
            stroke: 'black'
        }));

    }
    const Rectangle = () => {
        canvas.current.add(new fabric.Rect({
            width: 100,
            height: 100,
            fill: 'green',
            left: 100


        }))
    }
    const Triangle = () => {
        canvas.current.add(new fabric.Triangle({
            width: 200,
            height: 100,
            fill: "gold",
            left: 150
        }))

    }
    const polygon = () => {
        canvas.current.add(new fabric.Polygon([
            { x: 200, y: 10 },
            { x: 250, y: 50 },
            { x: 250, y: 180 },
            { x: 150, y: 180 },
            { x: 150, y: 50 }], {
            fill: 'red'
        }))
    }
    function convertToImg(e) {
        console.log("click");
          const svg = canvas.current.toSVG();
          console.log(svg);
        setDownloadLink(canvas.current.toDataURL({
            format: "png"
        }));

        setDownloadName("canvas.png");
    }
    
    const Download=async()=>{
        const dataUrl = await htmlToImage.toPng(canvas.current);
        console.log(dataUrl);
 
  // download image
//   const link = document.createElement('a');
//   link.download = "html-to-img.png";
//   link.href = dataUrl;
//   link.click();
       
        
    }

    return (
        <>
            <div className='container'>
                <div className='row row2'>
                    <div className='col-6'>
                        <div ref={ref} className='center'>
                            <canvas id="canvas"  />
                        </div>


                    </div>
                    <div className='col-6'>
                        <div className='Box'>
                        <div className="inputfield">
                            <input type="text"  onChange={(e) => settext(e.target.value)} value={text1} />
                            <button className='button' onClick={addTextToCanvas}>Add Text</button>
                        </div>
                        <div className='Button2'>
                        <button className='button' onClick={Rectangle}>Rectangle</button>
                        <button className='button' onClick={addCircle}>Circle</button>
                        <button className='button' onClick={polygon}>Polygon</button>
                        <button className='button' onClick={Triangle}>Triangle</button>
                        <button className='button' onClick={Download} >Download</button>
                        <a href={downloadLink} download={downloadName} onClick={convertToImg}>Print As Image</a>
                        </div>
                        </div>


                    </div>
                </div>
            </div>







        </>
    );
}

export default Sec;
