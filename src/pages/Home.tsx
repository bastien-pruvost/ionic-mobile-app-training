import React from "react";
import { IonContent, IonHeader, IonNavLink, IonPage, IonTitle, IonToolbar } from "@ionic/react";

export const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader collapse="fade">
        <IonToolbar>
          <IonTitle>Accueil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <ul>
          <IonNavLink href="/register">Créer un compte</IonNavLink>
          <IonNavLink href="/login">Connexion</IonNavLink>
        </ul>
      </IonContent>
    </IonPage>
  );
};
