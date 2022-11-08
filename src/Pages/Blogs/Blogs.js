import React from 'react';
import { Accordion, Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='text-center d-block mx-auto bg-warning fw-bold rounded-2 my-4 py-4'>Asked Questions & Answers</h2>
            <Accordion className='my-4 d-block w-md-50 mx-auto'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1. Difference between SQL and NoSQL</Accordion.Header>
                    <Accordion.Body className='bg-success text-white'>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr className='text-center fs-4'>
                                    <th>SQL</th>
                                    <th>NoSQL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>SQL databases are primarily called as Relational Databases (RDBMS).</td>
                                    <td>NoSQL database are primarily called as non-relational or distributed database.</td>
                                </tr>
                                <tr>
                                    <td>These databases have fixed or static or predefined schema.</td>
                                    <td>They have dynamic schema.</td>
                                </tr>
                                <tr>
                                    <td>These databases are not suited for hierarchical data storage.</td>
                                    <td>These databases are best suited for hierarchical data storage.</td>
                                </tr>
                                <tr>
                                    <td>These databases are best suited for complex queries.</td>
                                    <td>These databases are not so good for complex queries</td>
                                </tr>
                                <tr>
                                    <td>Vertically Scalable.</td>
                                    <td>Horizontally Scalable.</td>
                                </tr>
                                <tr>
                                    <td>Follows ACID property.</td>
                                    <td>Follows CAP(consistency, availability, partition tolerance).</td>
                                </tr>
                                <tr>
                                    <td><strong>Examples:</strong> MySQL, PostgreSQL, Oracle, MS-SQL Server etc.</td>
                                    <td><strong>Examples:</strong> MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2. What is JWT, and how does it work?</Accordion.Header>
                    <Accordion.Body className='bg-dark text-light'>
                        <p>
                            <strong>JWT: </strong>JSON Web Token(<strong>JWT</strong>), is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                        </p>
                        <p>
                            <strong>How it works: </strong>
                            Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.
                            <ol className=''>
                                <li>User sign-in using username and password or google/facebook.</li>
                                <li>Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.</li>
                                <li>User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.</li>
                                <li>Resource server then verifies the authenticity of the token using the secret salt/ public key.</li>
                            </ol>
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3. What is the difference between javascript and NodeJS?</Accordion.Header>
                    <Accordion.Body className='bg-success text-light'>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr className='text-center fs-4'>
                                    <th>NodeJS</th>
                                    <th>JavaScript</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>NodeJS is a cross-platform and open-source Javascript runtime environment that allows the javascript to be run on the server-side.</td>
                                    <td>Javascript is a programming language that is used for writing scripts on the website.</td>
                                </tr>
                                <tr>
                                    <td>We can run Javascript outside the browser with the help of NodeJS.</td>
                                    <td>Javascript can only be run in the browsers.</td>
                                </tr>
                                <tr>
                                    <td>It is mostly used on the server-side.</td>
                                    <td>It is basically used on the client-side.</td>
                                </tr>
                                <tr>
                                    <td>Nodejs does not have capability to add HTML tags.</td>
                                    <td>Javascript is capable enough to add HTML and play with the DOM.</td>
                                </tr>
                                <tr>
                                    <td>V8 is the Javascript engine inside of node.js that parses and runs Javascript.</td>
                                    <td>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.</td>
                                </tr>
                                <tr>
                                    <td>Nodejs is used in server-side development.</td>
                                    <td>Javascript is used in frontend development.</td>
                                </tr>
                                <tr>
                                    <td>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.</td>
                                    <td>Some of the javascript frameworks are RamdaJS, TypedJS, etc.</td>
                                </tr>
                                <tr>
                                    <td>Nodejs is written in C, C++ and Javascript.</td>
                                    <td>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>4. How does NodeJS handle multiple requests at the same time?</Accordion.Header>
                    <Accordion.Body className='bg-danger text-white'>
                        <p>
                            NodeJS receives multiple client requests and places them into <strong className='text-decoration-underline'>EventQueue</strong>. NodeJS is built with the concept of event-driven architecture. NodeJS has its own <strong className='text-decoration-underline'>EventLoop</strong> which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                        </p>
                        <p>
                            If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS <strong className='text-decoration-underline'>cluster</strong> module or <strong className='text-decoration-underline'>worker_threads</strong> module.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;