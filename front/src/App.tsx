import logo from './logo.svg';
import './App.css';
import { gql } from 'apollo-boost';
import { Query } from "react-apollo";

const GET_USERS = gql`
  query {
      user {
          name
      }
  }
`

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <Query query={GET_USERS}>
                    {({loading, error, data}: any) => {
                        if (loading) return <div>Loading...</div>;
                        if (error) return <div>Error :(</div>;
                        return (
                            <p>
                                {data.user.name}
                            </p>
                        )
                    }}
                </Query>
            </header>
        </div>
    );
}

export default App;
