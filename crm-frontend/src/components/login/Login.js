import React from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export const Login = ({ handleOnChange, handleOnSubmit, formSwitcher, email, password }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Client Login</h1>
                    <hr />
                    <Form autoComplete='off' onSubmit={handleOnSubmit}>
                        <Form.Group>
                            <Form.Label>Email Adress</Form.Label>
                            <Form.Control
                                type='email'
                                name='email'
                                value={email}
                                placeholder='Enter Email'
                                onChange={handleOnChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                name='password'
                                value={password}
                                onChange={handleOnChange}
                                placeholder='Enter Password'
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Button type="submit">Login</Button>
                        </Form.Group>
                    </Form>
                    <hr />
                    <Row>
                        <Col>
                            <a href='#11' onClick={() => formSwitcher('reset')}>Forget Password?</a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
