import React from 'react'
import { Button, Form, FormGroup, Input ,Label} from 'reactstrap'
import "./SiparisForm.css"

const SiparisForm = () => {
  return (
    <Form>
  
    
  <FormGroup>
    <Label for="exampleSelect">
      Hamur Kalınlığı
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option>
        Standart
      </option>
      <option>
        İnce Kenar
      </option>
      <option>
        Kalın Kenar
      </option>
      
    </Input>
  </FormGroup>
  
  
  
  
  <FormGroup tag="fieldset">
    <legend>
      Hamur Seç
    </legend>
    <FormGroup check>
      <Input
        name="radio1"
        type="radio"
      />
      {' '}
      <Label check>
        Küçük
      </Label>
    </FormGroup>
    <FormGroup check>
      <Input
        name="radio1"
        type="radio"
      />
      {' '}
      <Label check>
        Orta
      </Label>
    </FormGroup>
    <FormGroup
      check
      
    >
      <Input
        
        name="radio1"
        type="radio"
      />
      {' '}
      <Label check>
        Büyük
      </Label>
    </FormGroup>
  </FormGroup>
  <FormGroup check>
    <Input type="checkbox" />
    {' '}
    <Label check>
      Check me out
    </Label>
  </FormGroup>
  <FormGroup>
    <Label for="exampleText">
      Sipariş Notu
    </Label>
    <Input
      id="exampleText"
      name="text"
      type="textarea"
    />
  </FormGroup>
  <Button>
    Submit
  </Button>
</Form>
  )
}

export default SiparisForm