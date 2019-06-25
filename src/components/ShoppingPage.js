import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const divStyle = {
    width: '700px',
    textAlign: 'center'
}

class RenderItems extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false,
            selectedItem: null,
            imgs: null
        }
        this.handleClick = this.handleClick.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleClick(item) {
        this.setState({selectedItem: item});
        this.setState({isModalOpen: !this.state.isModalOpen});
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.setState({imgs: null});
        alert(JSON.stringify(values));
    }

    onChange(event) {
        this.setState({
            imgs: event.target.files
        })
    }

    render(){
        const shoppingContent = this.props.items.map((item, i) => {
            return(
                <div key={i} className="col-12 col-md-6">
                    <img className="img-fluid" style={{height: '200px'}} src={item.image} />
                    <hr/>
                    <h4>{item.title}</h4>
                    <h6>${item.price}</h6>
                    <Button color="primary" onClick={() => this.handleClick(item)}>Edit Item</Button>
                </div>
            );
        });
        if(this.state.selectedItem != null) {
            return(
                <div className="d-flex flex-wrap" style={divStyle}>
                    {shoppingContent}
                    <div>
                        <Modal centered isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader>
                                Edit Item ID: {this.state.selectedItem.id} - {this.state.selectedItem.title}
                            </ModalHeader>
                            <ModalBody>
                                <h4>Preview</h4>
                                {this.state.imgs && [...this.state.imgs].map((file) => {
                                    return(
                                        <img className="img-fluid" src={URL.createObjectURL(file)} />
                                    );
                                } )}
                                <hr/>
                                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                    <Row className="form-group">
                                        <Label htmlFor="image" md={2}>
                                            Item Image
                                        </Label>
                                        <Col md={10}>
                                            <Control.file model=".image" name="image" accept="image/*" className="form-control" onChange={this.onChange} />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="title" md={2}>Item Title</Label>
                                        <Col md={10}>
                                            <Control.text model=".title" name="title" id="title" className="form-control" placeholder={this.state.selectedItem.title} />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="price" md={2}>Item Price</Label>
                                        <Col md={10}>
                                            <Control.text model=".price" name="price" id="price" className="form-control" placeholder={this.state.selectedItem.price} />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Col>
                                            <Button type="submit" color="primary" onClick={this.toggleModal}>Submit Changes</Button>
                                        </Col>
                                    </Row>
                                </LocalForm>
                            </ModalBody>
                        </Modal>
                    </div>
                </div>
            );
        }
        else {
            return(
                <div className="d-flex flex-wrap" style={divStyle}>
                    {shoppingContent}
                </div>
            );
        }
    }
}

class AddItems extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false,
            imgs: null
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    onChange(event) {
        this.setState({
            imgs: event.target.files
        })
    }

    handleSubmit(values) {
        this.setState({imgs: null});
        alert(JSON.stringify(values));
    }

    render(){
        return(
            <div>
                <Button className="col-12" color="secondary" onClick={this.toggleModal}>Add Item</Button>
                    <div>
                        <Modal centered isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader>
                                Add New Item: {this.props.items.length}
                            </ModalHeader>
                            <ModalBody>
                                <h4>Preview</h4>
                                {this.state.imgs && [...this.state.imgs].map((file) => {
                                    return(
                                        <img className="img-fluid" src={URL.createObjectURL(file)} />
                                    );
                                } )}
                                <hr/>
                                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                    <Row className="form-group">
                                        <Label htmlFor="image" md={2}>
                                            Item Image
                                        </Label>
                                        <Col md={10}>
                                            <Control.file model=".image" name="image" accept="image/*" className="form-control" onChange={this.onChange} />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="title" md={2}>Item Title</Label>
                                        <Col md={10}>
                                            <Control.text model=".title" name="title" id="title" className="form-control" placeholder="Item Name" />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="price" md={2}>Item Price</Label>
                                        <Col md={10}>
                                            <Control.text model=".price" name="price" id="price" className="form-control" placeholder="Item Price" />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Col>
                                            <Button type="submit" color="primary" onClick={this.toggleModal}>Add Item</Button>
                                        </Col>
                                    </Row>
                                </LocalForm>
                            </ModalBody>
                        </Modal>
                    </div>
            </div>
        );
    }

}




export const Shopping = (props) => {

        return(
            <div className="d-flex justify-content-center" style={{position: 'relative', top: '120px', marginBottom: '150px'}}>
                <AddItems items={props.items} />
                <RenderItems items={props.items} addComment={props.addComment} />
            </div>
        );
}