import React from 'react';
import HighlightIcon from '@mui/icons-material/Highlight';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = ({ boolean, onLogOut }) => {
  // const [logOut, setLogOut] = useState(boolean);
  // useEffect(() => {
  //   setLogOut(boolean);
  // }, []);

  const handleLogOut = (e) => {
    e.preventDefault();
    onLogOut();
  };
  return (
    <header>
      <h1>
        <HighlightIcon />
        Note app
      </h1>
      <button
        style={{
          color: 'white',
          backgroundColor: '#f5ba13',
          border: 'none',
          cursor: 'pointer',
        }}
        hidden={boolean}
        onClick={handleLogOut}
      >
        <LogoutIcon />
      </button>
    </header>
  );
};

export default Header;

// // r7inp-6aaaa-aaaaa-aaabq-cai
