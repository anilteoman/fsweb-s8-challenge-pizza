import React from "react";
import { useState } from "react";
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

const SiparisForm = () => {
  const [formData, setFormData] = useState({
    isim: "",
    boyut: "",
    hamurKalinlik: "",
    malzemeler: [],
    siparisnotu: "",
  });

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
                  <Input name="boyut" type="radio" /> <Label check>Küçük</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="boyut" type="radio" /> <Label check>Orta</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="boyut" type="radio" /> <Label check>Büyük</Label>
                </FormGroup>
              </FormGroup>
              <FormGroup>
                <Label className="formBaslik" for="hamurKalinlik">
                  Hamur Kalınlığı <span> *</span>
                </Label>
                <Input id="hamurKalinlik" name="hamurKalinlik" type="select">
                  <option>Standart</option>
                  <option>İnce Kenar</option>
                </Input>
              </FormGroup>
            </FormGroup>

            <FormGroup>
              <legend className="formBaslik">
                Ek Malzemeler (5₺)<span> *</span>
              </legend>
              <Input type="checkbox" />{" "}
              <Label check>checkboxlar ekmalzeler ile maplenecek</Label>
            </FormGroup>
            <FormGroup>
              <Label for="isim" className="formBaslik">
                Ad Soyad (en az 3 karakter olacak)
              </Label>
              <Input id="isim" name="isim" placeholder="Ad Soyad" type="text" />
            </FormGroup>
            <FormGroup className="formBaslik">
              <Label for="exampleText">Sipariş Notu</Label>
              <Input
                id="exampleText"
                name="text"
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
                <Button className="siparisVerButon bold koyugri">SİPARİŞ VER</Button>
              </FormGroup>
            </div>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default SiparisForm;
