import React, { Component } from "react";
import { Alert, Button, Container, Table, Row } from "reactstrap";

class BootstrapComp extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            // <div>
            //     <Button color="primary">Primary</Button>{' '}
            //     <Button color="secondary">Secondary</Button>{' '}
            //     <Button color="success">Success</Button>{' '}
            //     <Button color="info">Info</Button>{' '}
            //     <Button color="warning">Warning</Button>{' '}
            //     <Button color="danger">Danger</Button>{' '}
            //     <Button color="link">linkin aja</Button>{' '}
            // </div>
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                First Name
                            </th>
                            <th>
                                Last Name
                            </th>
                            <th>
                                Username
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                1
                            </th>
                            <td>
                                Mark
                            </td>
                            <td>
                                Otto
                            </td>
                            <td>
                                @mdo
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                2
                            </th>
                            <td>
                                Jacob
                            </td>
                            <td>
                                Thornton
                            </td>
                            <td>
                                @fat
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                3
                            </th>
                            <td>
                                Larry
                            </td>
                            <td>
                                the Bird
                            </td>
                            <td>
                                @twitter
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default BootstrapComp;