import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonListHeader, IonItem, IonLabel } from '@ionic/react';
import React, {useState, useEffect} from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab3: React.FC = () => {

  const [dataset, setDataset] = useState<any[]>([]);

  const dataURL = "https://dev-cs50c-week-11.pantheonsite.io/wp-json/twentytwentythree-child/v1/products"

  useEffect(() => {
    fetch(dataURL) // fetch() to load raw json string
    .then(response => response.json()) // json() to convert raw string to json object

    .then(data => setDataset(data)); // react state set function to populate data state var
  },[])


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Products</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Products</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* use map() to loop through JSON array returned from WP */}
        <IonList id="contact-list">
          <IonListHeader>Product List</IonListHeader>
          {dataset.map((item, index) => (
            <IonItem lines="inset" key={index}>
              <IonLabel>
                <h4>{item.product_name}</h4>
                <p>{item.product_price}</p>
                <p>{item.product_description}</p>
                <img src={item.guid}></img>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
