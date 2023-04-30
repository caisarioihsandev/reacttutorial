import React, { Component } from "react";
import axios from "axios";
import qs from "querystring";
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button } from "reactstrap";

const api = 'http://localhost:3001'

class EditComp extends Component {   
    constructor(props) {
        super(props)

        this.state = {
            nim: '',
            nama: '',
            jurusan: '',
            response: '',
            display: 'none'
        }

    }

    componentDidMount() {
        this.setState({
            nim: window.history.state.usr.nim,
            nama: window.history.state.usr.nama,
            jurusan: window.history.state.usr.jurusan
        });
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    UbahMahasiswa = () => {
        const data = qs.stringify({
            id_mahasiswa: window.history.state.usr.id_mahasiswa,
            nim: this.state.nim,
            nama: this.state.nama,
            jurusan: this.state.jurusan,
            display: 'none'
        });

        axios.put(api+'/ubah', data)
        .then(json => {
            if(json === 200){
                this.setState({
                    response: json.data.values,
                    display: 'block'
                });
            } else {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                });
            }
        });
    }

    render() {
        return(
            <Container>
                <h4>Form Ubah Data</h4>
                <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                        <Label>NIM</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="nim" value={this.state.nim} 
                                     onChange={this.handleChange} placeholder="Masukkan NIM"/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Nama</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="nama" value={this.state.nama} 
                                     onChange={this.handleChange} placeholder="Masukkan Nama"/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Jurusan</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="jurusan" value={this.state.jurusan} 
                                     onChange={this.handleChange} placeholder="Masukkan Jurusan"/>
                                </Col>
                            </Row>
                        </FormGroup>

                        <FormGroup>
                            <Row>
                                <Col>
                                    <Button type="button" onClick={this.UbahMahasiswa}>Update</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        )
    }
}

export default EditComp;