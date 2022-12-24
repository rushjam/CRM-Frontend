import React from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export const ForgotPassword = ({ handleOnChange, handleOnResetSubmit, formSwitcher, email }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Reset Password</h1>
                    <hr />
                    <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
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
                            <Button type="submit" >Reset Password</Button>
                        </Form.Group>
                    </Form>
                    <hr />
                    <Row>
                        <Col>
                            <a href="#122" onClick={() => formSwitcher('login')}>Login Now?</a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
