import React, { useEffect, useState, useRef } from "react";
import { fabric } from "fabric";
import { useLocation } from "react-router-dom";

const SecondPage = () => {
    const [image, setImage] = useState([]);
    const location = useLocation();

    const canvasRef = useRef(null);
    const Data = location.state.value;
    const Url = Data.urls.small
    const [canvas, setCanvas] = useState('');
    
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);
  const initCanvas = () => (
    new fabric.Canvas('canvas', {
      height: 400,
      width: 400,
      backgroundImage: Url
     
    })
  )
  const HandleAddRect=()=>{
    console.log("rect")
    const canvCenter = canvas.getCenter()
    const rect = new fabric.Rect({
        width: 100,
        height: 100,
        fill: 'green',
        left:100
        
       
    })
    canvas.add(rect)
    
    
    canvas.renderAll();

  
}
const HandleAddCirc=()=>{
    const circ = new fabric.Circle({
        width: 100,
        height: 100,
        radius:50,
        fill: "blue",

    })
    canvas.add(circ)
    canvas.renderAll()

}
const HandleAddtraing=()=>{
    var triangle = new fabric.Triangle({
        width: 200,
        height: 100,
        fill:"gold",
        left:150
    });

   
    canvas.add(triangle); 
    canvas.centerObject(triangle);

}
const HandleAddPoly=()=>{     
        var polygon = new fabric.Polygon([
        { x: 200, y: 10 },
        { x: 250, y: 50 },
        { x: 250, y: 180},
        { x: 150, y: 180},
        { x: 150, y: 50 }], {
            fill: 'red'
        });
        canvas.add(polygon)
    canvas.renderAll()

}

const[text1,settext]=useState('')
 const HandleText=()=>{
   
    var text = new fabric.Text(text1, {
        fill: 'white'
    });

    
    canvas.add(text);
 }
 const Download=()=>{
    
 }

    return (
        <div>
            <div className="MainBox">
                <div className="left">
                    <canvas  id="canvas"  > </canvas>
                    {/* <img src={Url}  alt="ff" /> */}
                </div>
                <div className="right">
                    <div className="innerbox">
                        <div className="inputfield">
                            <input type="text" onChange={(e)=>settext(e.target.value)} value={text1} />
                            <button onClick={HandleText}>Add Caption</button>
                        </div>
                        <div className="FabricButton">
                            <button onClick={HandleAddCirc}>Add Circle</button>
                            <button onClick={HandleAddtraing}>Add Triangle</button>
                            <button onClick={HandleAddRect}>Add Rectangle</button>
                            <button onClick={HandleAddPoly}>Add Polygon</button>
                        </div>
                        <div className="download">
                            <button onClick={Download}>Download</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SecondPage;