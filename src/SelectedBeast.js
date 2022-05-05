import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

class SelectedBeast extends React.Component {
    render() {
      return (
        <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{this.props.selectedBeast.description}</p>
          <Image src={this.props.selectedBeast.image_url} alt={this.props.selectedBeast.description} title={this.props.selectedBeast.title}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      )
    }
  }

export default SelectedBeast;