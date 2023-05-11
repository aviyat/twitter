import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
// import { Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './main.css'
import Triangle from "./triangle";



export default function Main() {
    const [rectangleShow, setRectangleShow] = useState(false);
    const handleRecClose = () => setRectangleShow(false);
    const handleRecShow = () => setRectangleShow(true);
    const [triangleTriShow, setTriangleShow] = useState(false);
    const handleTriClose = () => setTriangleShow(false);
    const handleTriShow = () => setTriangleShow(true);
    const [widthRec, setWidthRec] = useState();
    const [heightRec, setHeightRec] = useState();
    const [widthTri, setWidthTri] = useState();
    const [heightTri, setHeightTri] = useState();
    const [currentComponent, setCurrentComponent] = useState("chooseShape");



    function chekRectangle() {
        debugger;

        const value = parseInt(widthRec);
        const valueH = parseInt(heightRec);
        if (value < 1 || isNaN(value) || valueH < 2 || isNaN(valueH)) {
            alert('enter validate width/height');
            setRectangleShow(true)
        }
        else {
            let p = 0;
            if ((widthRec === heightRec) || ((widthRec - heightRec) > 5) || ((widthRec - heightRec) < - 5)) {
                alert("Rectangle surface: " + widthRec * heightRec)
            }
            else {
                p = (2 * widthRec) + (2 * heightRec)
                alert("Rectangle Scope: " + p)
            }
        }
    }

    function chekTriangle() {
        const value1 = parseInt(widthTri);
        const valueH1 = parseInt(heightTri);
        if (value1 < 1 || isNaN(value1) || valueH1 < 2 || isNaN(valueH1)) {
            alert('enter validate width/height');
            setTriangleShow(true)

        }
        else {
            handleTriClose()
            setCurrentComponent("showTriangle")
        }
    }
    return (
        <>
            {currentComponent === "chooseShape" &&
                <>
                    <div className="raw ">
                        <h1 className="title">BUILDING PLAN</h1>
                    </div><br></br>
                    <div className="raw w-100 d-flex justify-content-around" >
                        <div className="col-4" >

                            <Modal show={rectangleShow} onHide={handleRecClose} animation={false}>
                                <Modal.Header closeButton >
                                    <Modal.Title className="modalTitle">Enter the WIDTH and the HEIGHT that you want the bulding: </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div >
                                        <div>
                                            <input required
                                                className="input"
                                                type="Number"
                                                placeholder="Enter width"
                                                min={1}
                                                value={widthRec}
                                                onChange={(e) => setWidthRec(e.target.value)}
                                            />
                                        </div>


                                        <div>
                                            <input required
                                                className="input"
                                                type="Number"
                                                placeholder="Enter height >/=2 "
                                                min={2}
                                                value={heightRec}
                                                onChange={(e) => setHeightRec(e.target.value)}
                                            />
                                        </div>

                                    </div>

                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={handleRecClose}>
                                        Close
                                    </Button>
                                    <Button onClick={() => chekRectangle()}
                                    >
                                        save
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <Card onClick={handleRecShow}>
                                <img src="img\rectangle.jpg" className="rec" alt="rectangle" />
                                <Card.Body>
                                    <Card.Text>
                                        RECTANGLE BUILDING
                                    </Card.Text>
                                </Card.Body>

                            </Card>


                        </div>

                        <div className="col-1"></div>

                        <div className="col-4">

                            <Modal show={triangleTriShow} onHide={handleTriClose} animation={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title className="modalTitle">Enter the WIDTH and the HEIGHT that you want the bulding:</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div>
                                        <div>
                                            <input required
                                                className="input"
                                                type="Number"
                                                placeholder="Enter width"
                                                min={0}
                                                value={widthTri}
                                                onChange={(e) => setWidthTri(e.target.value)}
                                            />

                                        </div>

                                        <div>
                                            <input required
                                                className="input"
                                                type="Number"
                                                placeholder="Enter height >/=2"
                                                min={2}
                                                value={heightTri}
                                                onChange={(e) => setHeightTri(e.target.value)}
                                            />
                                        </div>


                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={handleTriClose}>
                                        Close
                                    </Button>
                                    <Button onClick={() => chekTriangle()} >Save</Button>


                                </Modal.Footer>
                            </Modal>
                            <Card onClick={handleTriShow}>
                                <img src="img\triangle.jpg" className="tri" alt="triangle" />
                                <Card.Body>
                                    <Card.Text>
                                        TRIANGLE BUILDING
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </div>

                    </div >
                    <br></br>
                    <div className="raw ">
                        <Button className="btnexit" href="https://www.google.com/"  >
                            <h1>exit</h1>
                        </Button>
                    </div>

                </>}
            {currentComponent === "showTriangle" && <Triangle setCurrentComponent={setCurrentComponent} widthTri={widthTri} heightTri={heightTri} />}
        </>

    )
}



