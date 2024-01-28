import { Header } from './components/Header/Header';
import { Container } from './components/Container/Container';
import { List } from './components/List/List';
import { useGetProductsQuery } from './services/products';
import './App.scss';

function App() {
  const { data, error, isLoading } = useGetProductsQuery();
  return (
    <div>
      <Header />
      <main className="main">
        <Container>
          {isLoading && <div className="loadingPanel">Loading ...</div>}
          {!isLoading && error && <div className="errorPanel">Something went wrong!</div>}
          {!isLoading && <List items={data?.data?.products?.edges} />}
        </Container>
      </main>
    </div>
  );
}

export default App;
