import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({uri: '/graphql'});

const ApolloApp = (AppComponent: React.FC) => (
    <ApolloProvider client={client}>
        <AppComponent/>
    </ApolloProvider>
);

ReactDOM.render(ApolloApp(App), document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
