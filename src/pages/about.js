import React from 'react';
import Helmet from 'react-helmet';

const About = () => (
  <div className="article-container">
    <Helmet
      meta={[
        {
          name: 'description',
          content: 'Je m\'appelle Julien Verneaut et je suis le créateur de ce site. Un de mes rêves, c\'est de rendre la connaissance accessible au plus grand monde. En créant ce site, je veux partager avec vous les idées, concepts et inspirations que je découvre au fil de mes lectures.',
        },
      ]}
    >
      <title>A propos de ce site | Petit Bouquin</title>
    </Helmet>
    <h1>A propos de ce site</h1>
    <p>
      Je m&#39;appelle Julien Verneaut et je suis le créateur de ce site.
      Un de mes rêves, c&#39;est de rendre la connaissance accessible
      au plus grand monde.
    </p>
    <p>
      En créant ce site, je veux partager avec vous les idées, concepts et inspirations
      que je découvre au fil de mes lectures.
    </p>
    <p>
      J&#39;y publie régulièrement des résumés complets de livres que j&#39;ai
      particulièrement appréciés. Si vous souhaitez voir votre livre préféré sur ce site,
      vous pouvez m&#39;en faire la suggestion en commentaire.
    </p>
    <p>
      Pour rester informé des dernières nouveautés sur ce site, vous pouvez également vous inscrire
      à <a href="http://eepurl.com/dznDKD">la newsletter Petit Bouquin</a>.
    </p>
    <hr />
    <p>
      Ce site est développé en <a href="https://reactjs.org/">React</a> avec le framework <a href="https://www.gatsbyjs.com/">Gatsby</a>.<br />
      Son code source est accessible librement <a href="https://github.com/jverneaut/Petit-Bouquin">sur mon Github</a>.
    </p>
    <p>
      Vous souhaitez discuter ou travailler avec moi ?
      Vous pouvez me contacter via <a href="https://fr.linkedin.com/in/julien-verneaut-6b56b8122">mon Linkedin</a>.
    </p>
  </div>
);

export default About;
