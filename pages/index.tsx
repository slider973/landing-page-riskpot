import Head from "next/head";
import React  from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const registerUser = async (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Head>
        <title>
          La plateforme collaborative pour améliorer et piloter votre posture
          cybersécurité et celle de vos partenaires{" "}
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=yes"  />
      </Head>
      <div className={`grid-container ${styles.gridContainer}`}>
        <div className={styles.header}>
          <Image
            src="/assets/images/logo.webp"
            alt="logo"
            width={134}
            height={35}
            layout="responsive"
          />
          <span className="text-2xl">Nous arrivons bientôt... 🚀</span>
        </div>
        <div className={styles.content}>
          <div className={styles.contentRightContainer}>
            <div className={styles.contentRight}>
              <h1 className={styles.textHeader}>
                Une visibilité continue pour réduire l’impact des risques sur
                votre business
              </h1>
              <span className={styles.spanTextHeader}>
                La plateforme collaborative pour améliorer et piloter votre
                posture cybersécurité et celle de vos partenaires
              </span>
              <div className={styles.containerBottomDescription}>
                <div className={styles.StylableButtonContainer}>
                  <span className={styles.StylableButtonLabel}>
                    Évaluation des risques de l'entreprise
                  </span>

                  <span className={styles.StylableButtonLabel}>
                    Gestion des risques liés aux tiers
                  </span>
                </div>
                <div className={styles.StylableButtonContainer}>
                  <span
                    className={styles.StylableButtonLabel}
                    style={{ backgroundColor: "#a06bf1" }}
                  >
                    Sécurité des applications Web
                  </span>

                  <span
                    className={styles.StylableButtonLabel}
                    style={{ backgroundColor: "#d0b5f8" }}
                  >
                    Sensibilisation à la cybersécurité
                  </span>
                </div>
              </div>
              <p className={styles.subTextHeader}>
                <span>
                  Nous sommes presque prêts pour le lancement ! <br />
                  Soyez le premier à le savoir&nbsp;
                </span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <a
                              href="https://emojiterra.com/fr/fusee/"
                              target="_blank"
                              rel="nofollow noopener"
                            >
                              🚀
                            </a>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </p>
              <div className={styles.StylableButtonContainer}>
                <span className={styles.StylableButtonLabel}>
                  <Link href="#inscriptionForm">Rester informé</Link>
                </span>
              </div>
            </div>
          </div>

          <div className={styles.containerImage}>
            <div>
              <Image
                src="/assets/images/image-landing-page.webp"
                alt="logo"
                width={880}
                height={790}
                objectFit="cover"
                objectPosition="responsive"
              />
            </div>
          </div>
        </div>
        <div className={styles.subContent}>
          <div className={styles.subContentText}>
            <span className={styles.subContentTextFirstSpan}>
              Recevez les dernières nouvelles !
            </span>
            <span className={styles.subContentTextSecondSpan}>
              Nous sommes presque prêts pour le lancement ! Soyez les premiers à
              le savoir 🚀
            </span>
            <div className={styles.containerForm} id="inscriptionForm">
              <form
                onSubmit={registerUser}
                method="POST"
                className={styles.form}
              >
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  placeholder="E-mail du contact*"
                  required
                />
                <button type="submit">Envoyer</button>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <span>©2023 by RiskSpot. Proudly created by Jonathan lemaine</span>
        </div>
      </div>
    </>
  );
};
export default Home;
