import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import './triangle.css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default function Triangle(props) {
    const widthTri = props.widthTri;
    const heightTri = props.heightTri;
    const [triangle, setTriangle] = useState([]);
    const [TriShow, setTriShow] = useState(false);


    function chekScope() {
        let x = parseInt(widthTri) / 2
        let a = x * x
        let b = heightTri * heightTri
        let s = Math.sqrt(a + b)
        let p = ((2 * s) + Number(widthTri))

        alert("Triangle Scope =" + p)
    }

    function printTriangle() {


        if (widthTri % 2 === 0 || widthTri > heightTri * 2) {
            alert("Cannot print triangle")
        }
        else {
            setTriShow(true)
            let starsArr = []
            let star = "*"
            let numOfStars = widthTri


            starsArr.push(star.repeat(numOfStars))

            for (let i = 0; i < parseInt((widthTri - 2) / 2); i++) {
                numOfStars -= 2
                let a = parseInt((heightTri - 2) / parseInt((widthTri - 2) / 2))
                let helpArr = starsArr.concat(Array(a).fill(star.repeat(numOfStars)))
                starsArr = helpArr
            }
            let s = (heightTri - 2) % parseInt((widthTri - 2) / 2)
            let helpArr2 = starsArr.concat(Array(s).fill(star.repeat(3)))
            starsArr = helpArr2
            starsArr.push(star)

            setTriangle(starsArr.reverse())

        };
    }


    return (
        <>
            {/* {currentComponent === "triangleOption" && */}
            <>
                <div className="raw ">
                    <h1 className="title">choose:</h1>
                </div>
                <br></br>
                <div className="raw w-100 d-flex justify-content-around">

                    <div className="col-1"></div>
                    <div className="col-4">
                        <Card className="cardTri" onClick={() => chekScope()}>
                            <Card.Body>
                                <Card.Text>
                                    <h1 className="title2"> Scope calculation</h1>
                                </Card.Text>
                            </Card.Body>
                        </Card>


                    </div>
                    <div className="col-1"></div>
                    <div className="col-4">
                        <Card className="cardTri" onClick={() => printTriangle()}>
                            <Card.Body>
                                <Card.Text>
                                    <h1 className="title2">Print a triangle</h1>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </div>
                    <div className="col-2"></div>
                    <br />

                </div>
                <Modal
                    className="modalStars"
                    size="lg"
                    show={TriShow}
                    onHide={() => setTriShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <h1> STARS  TRIANGLE </h1>
                    </Modal.Header>
                    <Modal.Body >
                        <div className="tri" >
                            <br /><br />
                            {Array.isArray(triangle) && triangle?.map((item) => {
                                return <div>{item}</div>
                            }

                            )}
                        </div>
                    </Modal.Body>
                    <Button onClick={() => props.setCurrentComponent("chooseShape")}>BACK TO MENU</Button>

                </Modal>



            </>



        </>
    )
}
