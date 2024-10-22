import React from 'react'
import './Contact.css'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Envoi en cours....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8d3d624d-313b-4b45-917b-377f2b8562fa");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Formulaire soumis avec succès!");
      event.target.reset();
    } else {
      console.log("Erreur", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Envoyez nous un Message <img src="/images/msg-icon.png" alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, qui? Amet, laudantium! Nisi deleniti mollitia in amet minima consectetur, et ipsa molestias, eum atque saepe porro corrupti illo tenetur repellendus.</p>
        <ul>
            <li> <img src="/images/mail-icon.png" alt="" />sossousilver@gmail.com</li>
            <li> <img src="/images/phone-icon.png" alt="" />+228 92684690</li>
            <li> <img src="/images/location-icon.png" alt="" />Lomé, Togo</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}> 
            <label>Votre Nom</label>
            <input type="text" name="nom" placeholder="Nom et Prénom" required />
            <label>Numero de Telephone </label>
            <input type="tel" name="telephone" placeholder='Entrez votre Numero de telephone ' required />
            <label> Ecrivez votre message ici</label>
            <textarea name="message" rows="10" placeholder='Entrez your message'required ></textarea>
            <button type='submit' className='btn dark-btn'>Envoyer <img src="/images/white-arrow.png" alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
