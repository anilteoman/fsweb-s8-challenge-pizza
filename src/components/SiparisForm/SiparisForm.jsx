import axios from "axios";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Form,
  Input,
  Label,
  FormGroup,
} from "reactstrap";

const malzemeler = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalepeno",
  "Sarımsak",
  "Biber",
  "Ananas",
  "Kabak",
];

const hataMesajlari = {
  isim: "Ad Soyad en az 3 karakter içermelidir.",
  malzeme: "En az 4 en fazla 10 malzeme seçebilirsiniz.",
};

const SiparisForm = () => {
  const [formData, setFormData] = useState({
    isim: "",
    boyut: "",
    hamurKalinlik: "",
    malzemeler: [],
    siparisNotu: "",
  });

  const history = useHistory();

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      if (checked) {
        setFormData({
          ...formData,
          malzemeler: [...formData.malzemeler, value],
        });
      } else {
        setFormData({
          ...formData,
          malzemeler: formData.malzemeler.filter((item) => item !== value),
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting formData:", formData);

    axios
      .post("https://reqres.in/api/pizza", formData)
      .then((res) => {
        console.log("Response:", res.data);
        history.push("/SiparisSonuc");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Card className="siparisFormContainer">
        <CardBody>
          <CardTitle tag="h5">Position Absolute Acı Pizza</CardTitle>

          <CardSubtitle className="siparisSubtitle koyugri" tag="h6">
            85.5₺
            <p>4.9 (200)</p>
          </CardSubtitle>

          <CardText className="acikgri">
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
            denir.
          </CardText>

          <Form>
            <FormGroup className="boyutVeKalinlik" tag="fieldset">
              <FormGroup>
                <legend className="formBaslik">
                  Boyut Seç<span> *</span>
                </legend>
                <FormGroup check>
                  <Input
                    name="boyut"
                    type="radio"
                    value="small"
                    onChange={handleChange}
                  />
                  <Label check>Küçük</Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    name="boyut"
                    type="radio"
                    value="med"
                    onChange={handleChange}
                  />
                  <Label check>Orta</Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    name="boyut"
                    type="radio"
                    value="large"
                    onChange={handleChange}
                  />
                  <Label check>Büyük</Label>
                </FormGroup>
              </FormGroup>
              <FormGroup>
                <Label className="formBaslik" for="hamurKalinlik">
                  Hamur Kalınlığı <span> *</span>
                </Label>
                <Input
                  id="hamurKalinlik"
                  name="hamurKalinlik"
                  type="select"
                  onChange={handleChange}
                >
                  <option value="">Seçiniz</option>
                  <option value="Standart">Standart</option>
                  <option value="İnce Kenar">İnce Kenar</option>
                </Input>
              </FormGroup>
            </FormGroup>

            <FormGroup className="checkbox-container">
  <legend className="formBaslik">
    Ek Malzemeler (5₺)<span> *</span>
  </legend>
  <div className="checkbox-grid">
    {malzemeler.map((malzeme) => (
      <label key={malzeme} className="checkbox-item">
        <Input
          type="checkbox"
          name="malzemeler"
          value={malzeme}
          checked={formData.malzemeler.includes(malzeme)}
          onChange={handleChange}
        />
        {malzeme}
      </label>
    ))}
  </div>
</FormGroup>
            <FormGroup>
              <Label for="isim" className="formBaslik">
                Ad Soyad (en az 3 karakter olacak)
              </Label>
              <Input
                id="isim"
                name="isim"
                placeholder="Ad Soyad"
                type="text"
                value={formData.isim}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup className="formBaslik">
              <Label for="siparisNotu">Sipariş Notu</Label>
              <Input
                onChange={handleChange}
                id="siparisNotu"
                name="siparisNotu"
                type="textarea"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
              />
            </FormGroup>
            <hr />
            <div className="formFooterContainer">
              <FormGroup className="bold">
                <Button color="warning">
                  <span className="bold">-</span>
                </Button>
                tane
                <Button color="warning">
                  <span className="bold">+</span>
                </Button>
              </FormGroup>
              <FormGroup>
                <div className="siparisVerContainer">
                  <p className="siparisToplam formBaslik">Sipariş Toplamı</p>
                  <div className="siparisVerSecimler acikgri">
                    <p>Seçimler</p>
                    <p>25 ₺</p>
                  </div>
                  <div className="siparisVerToplam kirmizi bold">
                    <p>Toplam</p>
                    <p>110 ₺</p>
                  </div>
                </div>
                <Button
                  className="siparisVerButon bold koyugri"
                  type="submit"
                  onClick={handleSubmit}
                >
                  SİPARİŞ VER
                </Button>
              </FormGroup>
            </div>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default SiparisForm;
