import React, { useState } from 'react';
import { Button, Card, CardBody, CardTitle, CardText, Form, FormGroup, Label, Input, Col, Row,} from 'reactstrap';
import "./SiparisForm.css"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const SiparisForm = () => {
  const [size, setSize] = useState('');
  const [dough, setDough] = useState('Hamur Kalınlığı');
  const [toppings, setToppings] = useState([]);
  const [note, setNote] = useState('');
  const [quantity, setQuantity] = useState(1);
  const basePrice = 85.5;
  const toppingPrice = 5;

  const toppingOptions = [
    'Pepperoni', 'Sosis', 'Kanada Jambonu', 'Tavuk Izgara', 'Soğan', 'Domates',
    'Mısır', 'Sucuk', 'Jalepeno', 'Sarımsak', 'Biber', 'Ananas', 'Kabak'
  ];

  const handleToppingChange = (topping) => {
    setToppings(prev => prev.includes(topping)
      ? prev.filter(t => t !== topping)
      : [...prev, topping]);
  };

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const totalPrice = (basePrice + toppings.length * toppingPrice) * quantity;

  const history = useHistory();
  const siparisOzeti = (e) => {
    e.preventDefault();
    history.push("/SiparisSonuc")
  }
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h1">Position Absolute Acı Pizza</CardTitle>
        <CardText tag="h4">{basePrice}₺</CardText><CardText>4.9 (200)</CardText>
        

        <Form>
          <FormGroup>
            <Label>Boyut Seç *</Label>
            {['Küçük', 'Orta', 'Büyük'].map(s => (
              <Input key={s} type="radio" id={s} name="size" label={s} onChange={() => setSize(s)} />
            ))}
          </FormGroup>

          <FormGroup>
            <Label for="dough">Hamur Seç *</Label>
            <Input type="select" id="dough" value={dough} onChange={(e) => setDough(e.target.value)}>
              <option>Standart</option>
              <option>İnce Hamur</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label>Ek Malzemeler (5₺)</Label>
            {toppingOptions.map(topping => (
              <Input
                key={topping}
                type="checkbox"
                id={topping}
                label={topping}
                checked={toppings.includes(topping)}
                onChange={() => handleToppingChange(topping)}
              />
            ))}
          </FormGroup>

          <FormGroup>
            <Label for="note">Sipariş Notu</Label>
            <Input
              type="textarea"
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Siparişine eklemek istediğin bir not var mı?"
            />
          </FormGroup>

          <Row className="mb-3">
            <Col>
              <Button color="secondary" onClick={() => handleQuantityChange(-1)}>-</Button>
            </Col>
            <Col>{quantity}</Col>
            <Col>
              <Button color="secondary" onClick={() => handleQuantityChange(1)}>+</Button>
            </Col>
          </Row>

          <CardText>Seçimler: {toppings.length * toppingPrice}₺</CardText>
          <CardText className="text-danger">Toplam: {totalPrice.toFixed(2)}₺</CardText>
          <Button color="warning" onClick={siparisOzeti}>SİPARİŞ VER</Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default SiparisForm;
