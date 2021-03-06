import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import "./LoginScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginScreen({ history }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);

    const { loading, error, userInfo } = userLogin;

    let navigate = useNavigate();
    // function navigation() {
    //     navigate('/mynotes');
    // }

    useEffect(() => {
        function navigation() {
            navigate('/mynotes');
        }
        if (userInfo) {
            // history.pushState('/mynotes');
            navigation();
        }
    }, [navigate, userInfo]);


    // const [error, setError] = useState(false);
    // const [loading, setLoading] = useState(false);
    // let navigate = useNavigate();
    // function navigation() {
    //     navigate('/mynotes');
    // }

    const submitHandler = async (e) => {
        e.preventDefault();

        dispatch(login(email, password));

        // try {
        //     const config = {
        //         headers: {
        //             "Content-type": "application/json",
        //         },
        //     };

        //     setLoading(true);

        //     const { data } = await axios.post("/api/users/login", {
        //         email,
        //         password
        //     },
        //         config
        //     );

        //     console.log(data);

        //     localStorage.setItem('userInfo', JSON.stringify(data));
        //     setLoading(false);
        //     navigation();

        // } catch (error) {
        //     setError(error.response.data.message);
        //     setLoading(false);
        // }
    };

    return (
        <MainScreen title="LOGIN">
            <div className="loginContainer">
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                {loading && <Loading />}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button className="my-3" variant="primary" type="submit">
                        Submit
                    </Button>
                    <Row className="py-3">
                        <Col>
                            New Customer ? <Link to="/register">Register Here</Link>
                        </Col>
                    </Row>
                </Form>
            </div>
        </MainScreen>
    );
}

export default LoginScreen