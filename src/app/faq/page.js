import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import React from "react";

export const metadata = {
  title: "Come & Click - Digital Agency",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};


const faqData = [
  {
    id: 1,
    question: "Quels services propose votre agence digitale ?",
    answer:
      "Notre agence est spécialisée dans des solutions digitales complètes, notamment le développement web, le design UI/UX, le développement e-commerce, la création de logos, l’optimisation SEO et le marketing digital. Nous offrons des services de bout en bout pour aider les entreprises à établir et développer leur présence en ligne.",
  },
  {
    id: 2,
    question: "Comment abordez-vous les projets de développement de site web ?",
    answer:
      "Nous suivons une approche structurée : analyse des besoins, conception UI/UX, développement, tests, puis mise en ligne. Nous utilisons des technologies modernes et les meilleures pratiques pour créer des sites rapides, réactifs et adaptés aux objectifs de votre entreprise.",
  },
  {
    id: 3,
    question: "Quel est le délai et le processus typique d'un projet ?",
    answer:
      "Les délais varient selon la complexité, généralement entre 4 et 12 semaines. Notre processus inclut une consultation initiale, la soumission d’une proposition, la phase de design, le développement, les tests et le lancement. Nous maintenons une communication transparente et fournissons des mises à jour régulières.",
  },
  {
    id: 4,
    question: "Proposez-vous un support et une maintenance continue ?",
    answer:
      "Oui, nous offrons des forfaits de maintenance complets incluant mises à jour régulières, correctifs de sécurité, optimisation des performances et support technique. Nous formons également votre équipe pour gérer les opérations quotidiennes du site.",
  },
  {
    id: 5,
    question: "Comment déterminez-vous les prix de vos projets ?",
    answer:
      "Nos tarifs sont basés sur le projet, en fonction du périmètre, de la complexité et du délai. Nous fournissons des devis détaillés avec une répartition claire des coûts et un calendrier de paiement par étapes. Aucune surprise — la transparence est essentielle pour nous.",
  },
  {
    id: 6,
    question: "Qu'est-ce qui différencie votre agence des autres ?",
    answer:
      "Nous combinons expertise technique et innovation créative pour obtenir des résultats concrets. Notre équipe reste à jour avec les dernières technologies, offre une attention personnalisée et garantit des livrables de qualité. Nous visons des partenariats durables, pas seulement des projets ponctuels.",
  },
  {
    id: 7,
    question: "Comment garantissez-vous la qualité et la livraison dans les délais ?",
    answer:
      "Nous appliquons des processus rigoureux d'assurance qualité, utilisons des outils de gestion de projet et adoptons des méthodologies agiles. Des revues internes régulières, le respect des standards de codage et des tests approfondis assurent la qualité et le respect des délais.",
  },
  {
    id: 8,
    question: "Pouvez-vous améliorer notre site web existant ?",
    answer:
      "Absolument ! Nous proposons un audit complet de votre site pour analyser ses performances, son expérience utilisateur et ses aspects techniques. À partir de là, nous formulons des recommandations et réalisons des améliorations en design, fonctionnalités, vitesse et SEO.",
  },
];


const Page = () => {
  return (
    <>
      <Header />
      <div className="faq-section pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="section-title six mb-70">
            <h2>FAQ&apos;s</h2>
            <div className="dash-and-paragraph">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 877 64">
                <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM875 3L875.271 3.42013L876.697 2.5H875V3ZM842.084 64L845.265 59.1819L839.502 58.836L842.084 64ZM3 3.5H875V2.5H3V3.5ZM874.729 2.57987C861.302 11.2438 844.485 27.4669 841.856 59.4675L842.852 59.5494C845.45 27.938 862.03 11.9643 875.271 3.42013L874.729 2.57987Z" />
              </svg>
              <p>
                Trouvez des réponses aux questions fréquemment posées sur nos
                services et nos processus en tant qu'agence digitale.
              </p>
            </div>
          </div>
          <div className="faq-wrap">
            <div className="row g-4">
              {faqData.map((faq) => (
                <div className="col-lg-6" key={faq.id}>
                  <div className="single-faq">
                    <h6>
                      {faq.id}. {faq.question}
                    </h6>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
       </div>
      <Footer />
    </>
  );
};

export default Page;
