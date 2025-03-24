import React, { useState } from "react";
import {
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
} from "reactstrap";

import "./SiparisForm.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
const boyutlar = ["Küçük", "Orta", "Büyük"];
const hamurKalinlik = ["Standart", "İnce Kenar", "Kalın Kenar"];
const ekMalzeme = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Toppers",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalapeno",
  "Sarımsak",
  "Biber",
  "Ananas",
  "Kabak",
];

const SiparisForm = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedDough, setSelectedDough] = useState(hamurKalinlik[0]);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleToppingChange = (topping) => {
    setSelectedToppings((prev) =>
      prev.includes(topping)
        ? prev.filter((item) => item !== topping)
        : prev.length < 7
        ? [...prev, topping]
        : prev
    );
  };

  const calculateTotal = () => {
    const basePrice = 85.5;
    const toppingPrice = selectedToppings.length * 5;
    return (basePrice + toppingPrice) * quantity;
  };
  const history = useHistory();
  const handleSiparis = (e) => {
    e.preventDefault();
    history.push("/SiparisSonuc");
  };

  return (
    <div className="p-8">
      <h2 className="text-xl mt-4">Position Absolute Acı Pizza</h2>
      <p className="text-gray-500">85.50₺</p>

      <Form>
        <FormGroup>
          <Label>Boyut Seç *</Label>
          {boyutlar.map((size) => (
            <FormGroup check key={size}>
              <Label check>
                <Input
                  type="radio"
                  name="size"
                  value={size}
                  onChange={() => setSelectedSize(size)}
                />{" "}
                {size}
              </Label>
            </FormGroup>
          ))}
        </FormGroup>

        <FormGroup>
          <Label>Hamur Seç :</Label>
          <Input
            type="select"
            onChange={(e) => setSelectedDough(e.target.value)}
            value={selectedDough}
          >
            {hamurKalinlik.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Input>
        </FormGroup>

        <FormGroup>
          <Label>Ek Malzemeler (Max 7 Seçim)</Label>
          <Row>
            {ekMalzeme.map((topping) => (
              <Col xs="6" md="4" key={topping}>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      value={topping}
                      checked={selectedToppings.includes(topping)}
                      onChange={() => handleToppingChange(topping)}
                    />{" "}
                    {topping}
                  </Label>
                </FormGroup>
              </Col>
            ))}
          </Row>
        </FormGroup>

        <FormGroup>
          <Label>Sipariş Notu</Label>
          <Input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Siparişe eklemek istediğiniz bir not var mı?"
          />
        </FormGroup>

        <FormGroup className="d-flex align-items-center gap-2">
          <Button
            color="secondary"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </Button>
          <span>{quantity}</span>
          <Button color="secondary" onClick={() => setQuantity(quantity + 1)}>
            +
          </Button>
        </FormGroup>

        <Card className="w-80">
          <CardBody>
            <p>Seçimler: {selectedToppings.join(", ") || "Yok"}</p>
            <p className="font-bold">Toplam: {calculateTotal().toFixed(2)}₺</p>
            <Button
              color="primary"
              className="mt-4 w-full"
              onClick={handleSiparis}
            >
              Sipariş Ver
            </Button>
          </CardBody>
        </Card>
      </Form>
    </div>
  );
};

export default SiparisForm;
