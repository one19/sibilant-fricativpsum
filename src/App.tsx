import styled from 'styled-components';
import NavBar from './NavBar';
import FetchTest from './FetchTest';

const Article = styled.article`
  border: 1px solid red;
  display: flex;
`;

const App = () => (
  <>
    <NavBar />
    <Article />
    <FetchTest />
  </>
);

export default App;
