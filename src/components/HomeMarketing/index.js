import React from 'react';

const HomeMarketing = () => (
  <div className="article">
    <h3 className="article__title">Abonnez-vous</h3>
    <p className="article__excerpt">
      Tenez-vous informé des derniers résumés en vous
      abonnant à la newsletter de Petit Bouquin :
    </p>
    <form action="https://julienverneaut.us14.list-manage.com/subscribe/post?u=4ee4fe4bdd38850581978c1b8&amp;id=11fbfce8c2" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="marketing__form-group" target="_blank" noValidate>
      <input type="email" name="EMAIL" className="marketing__form-input" id="mce-EMAIL" placeholder="Adresse email" required />
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <input type="text" name="b_4ee4fe4bdd38850581978c1b8_11fbfce8c2" tabIndex="-1" />
      </div>
      <input
        type="submit"
        value="S'abonner"
        name="subscribe"
        id="mc-embedded-subscribe"
        className="marketing__form-btn"
        style={{
          marginBottom: 0,
        }}
      />
    </form>
  </div>
);

export default HomeMarketing;
