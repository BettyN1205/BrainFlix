import logo from "../../assets/Logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/Icons/search.svg";
import uploadIcon from "../../assets/Icons/upload.svg";

import '../Header/header.scss';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img src={logo} alt="BrainFlix Logo" className="header__logo-img" />
        </div>
        <div className="header__search">
          <img src={searchIcon} alt="searchIcon" className="header__search-icon" />
          <input
            type="text"
            className="header__search-input"
            placeholder="Search"
          />
        </div>
        <div className="header__user">
        </div>
        <div className="header__upload">
          <img src={uploadIcon} alt="uploadIcon" className="header__upload-icon" />
          UPLOAD
        </div>
      </header>
    </>
  );
};

export default Header;
