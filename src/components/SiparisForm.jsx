import axios from "axios";
import React, { useEffect } from "react";
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
  malzemeler: "En az 4 en fazla 10 malzeme seçmelisiniz.",
};

const baseFiyat = 85.5;
  const ekMalzemeFiyat = 5;

  const initialMalzemeFiyat = 0;
  const initialToplamFiyat = (baseFiyat + initialMalzemeFiyat) * 1;

const SiparisForm = () => {
  const [formData, setFormData] = useState({
    isim: "",
    boyut: "S",
    hamurKalinlik: "Standart",
    malzemeler: [],
    siparisNotu: "",
    secimFiyat: initialMalzemeFiyat,
    toplamFiyat: initialToplamFiyat,
  });

  const [errors, setErrors] = useState({
    isim: false,
    malzeme: false,
  });

  const [isValid, setIsValid] = useState(false);

  const history = useHistory();

  const [adet, setAdet] = useState(1);
  

  const handleAdetChange = (change) => {
    setAdet((prev) => Math.max(1, prev + change));
  };

  useEffect(() => {
    const ekMalFiyat = formData.malzemeler.length * ekMalzemeFiyat;
    const toplam = (baseFiyat + ekMalFiyat) * adet;
  
    setFormData((prev) => ({
      ...prev,
      secimFiyat: ekMalFiyat,
      toplamFiyat: toplam,
    }));
  }, [formData.malzemeler, adet]);

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

    if (name == "isim") {
      if (value.replaceAll(" ", "").length >= 3) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }

   
  };

  useEffect(() => {
    const isimValid = formData.isim.replaceAll(" ", "").length >= 3;
    const malzemeValid =
      formData.malzemeler.length >= 4 && formData.malzemeler.length <= 10;
  
    setIsValid(isimValid && malzemeValid);
  
    setErrors({
      isim: !isimValid,
      malzemeler: !malzemeValid,
    });
  }, [formData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting formData:", formData);

    axios
      .post("https://reqres.in/api/pizza", formData)
      .then((res) => {
        console.log("Response:", res.data);
        history.push("/SiparisSonuc", { response: res.data });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Card className="siparisFormContainer">
        <nav className="siparisNav">
          <a href="/">Ana Sayfa</a> -{" "}
          <a href="./SiparisSayfa">
            <span className="kirmizi">Sipariş Oluştur</span>
          </a>
        </nav>
        <CardBody className="siparisFormBirinciKisim">
          <div className="it2FormHeader">
            <CardTitle tag="h5">Position Absolute Acı Pizza</CardTitle>

            <CardSubtitle className="siparisSubtitle koyugri" tag="h6">
              {baseFiyat}₺<p>4.9 (200)</p>
            </CardSubtitle>

            <CardText
              style={{
                color: "#5f5f5f",
                marginTop: "3rem",
                marginBottom: "3rem",
              }}
            >
              Frontend Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen
              pizzetta denir.
            </CardText>
          </div>
        </CardBody>
        <CardBody>
          <Form>
            <FormGroup className="boyutVeKalinlik" tag="fieldset">
              <FormGroup>
                <legend className="formBaslik">
                  Boyut Seç<span> *</span>
                </legend>
                <div className="customRadio">
                  <label class="boyutContainer">
                    <Input
                      data-cy="boyutSmall"
                      type="radio"
                      value="S"
                      checked={formData.boyut === "S"}
                      name="boyut"
                      onChange={handleChange}
                    />
                    <span class="checkmark">S</span>
                  </label>
                  <label class="boyutContainer">
                    <Input
                      type="radio"
                      value="M"
                      name="boyut"
                      onChange={handleChange}
                    />
                    <span class="checkmark">M</span>
                  </label>
                  <label class="boyutContainer">
                    <Input
                      type="radio"
                      value="L"
                      name="boyut"
                      onChange={handleChange}
                    />
                    <span class="checkmark">L</span>
                  </label>
                </div>
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
                  style={{ background: "#faf7f2" }}
                >
                  <option value="Standart">-Hamur Kalınlığı Seç-</option>
                  <option value="Standart">Standart</option>
                  <option value="İnce Kenar">İnce Kenar</option>
                </Input>
              </FormGroup>
            </FormGroup>

            <FormGroup className="checkbox-container">
              <legend className="formBaslik">
                Ek Malzemeler (5₺)<span> *</span>
              </legend>
              {errors.malzemeler && (
                <p className="kirmizi">{hataMesajlari.malzemeler}</p>
              )}
              <div className="checkbox-grid">
                {malzemeler.map((malzeme) => (
                  <label key={malzeme} className="checkbox-item">
                  <Input
                    className="checkboxIT2"
                    data-cy="malzemeInput"
                    type="checkbox"
                    name="malzemeler"
                    value={malzeme}
                    checked={formData.malzemeler.includes(malzeme)}
                    onChange={handleChange}
                  />
                  <span className="custom-checkmark">✔</span>
                  <span className="malzeme-etiket">{malzeme}</span>
                </label>
                ))}
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="isim" className="formBaslik">
                İsim
              </Label>
              {errors.isim && <p className="kirmizi">{hataMesajlari.isim}</p>}
              <Input
                data-cy="isimInput"
                id="isim"
                name="isim"
                placeholder="Ad Soyad"
                type="text"
                value={formData.isim}
                onChange={handleChange}
                style={{ background: "#faf7f2" }}
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
                style={{ background: "#faf7f2" }}
              />
            </FormGroup>
            <hr />
            <div className="formFooterContainer">
              <FormGroup className="bold">
                <Button color="warning" onClick={() => handleAdetChange(-1)}>
                  <span className="bold" data-cy="eksi">
                    -
                  </span>
                </Button>
                <span className="adetto">{adet}</span>
                <Button
                  data-cy="arti"
                  color="warning"
                  onClick={() => handleAdetChange(+1)}
                >
                  <span className="bold">+</span>
                </Button>
              </FormGroup>
              <FormGroup>
                <div className="siparisVerContainer">
                  <p className="siparisToplam formBaslik">Sipariş Toplamı</p>
                  <div className="siparisVerSecimler acikgri">
                    <p>Seçimler</p>
                    <p>{formData.secimFiyat} ₺</p>
                  </div>
                  <div className="siparisVerToplam kirmizi bold">
                    <p>Toplam</p>
                    <p>{formData.toplamFiyat} ₺</p>
                  </div>
                </div>
                <Button
                  data-cy="submitBtn"
                  className="siparisVerButon bold koyugri"
                  type="submit"
                  onClick={handleSubmit}
                  disabled={!isValid}
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
