import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <nav>
        <ul>
          <li><Link to="/page1">Go to Page 1</Link></li>
          <li><Link to="/page2">Go to Page 2</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;

