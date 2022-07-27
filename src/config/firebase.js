import {initializeApp} from 'firebase/app';
//import { getAnalytics } from "firebase/analytics";

import {getFirestore, initializeFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBN69MRE2CQRRn6yynar53kPEbIaRLsHto',
  authDomain: 'new-project-1e77a.firebaseapp.com',
  projectId: 'new-project-1e77a',
  storageBucket: 'new-project-1e77a.appspot.com',
  messagingSenderId: '55507203766',
  appId: '1:55507203766:web:e4f438d0beea3664635817',
  measurementId: 'G-QC0QQXSSLK',
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

initializeApp(firebaseConfig);

initializeFirestore(app,{ experimentalForceLongPolling: true, merge: true })

export const database = getFirestore();
