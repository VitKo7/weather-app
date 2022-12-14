import home from '../../images/home_icon.svg';
import style from './style.module.css';

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.appBar}>
        <button type="button" className={style.homeButton} aria-label="home">
          <img className={style.homeButton_icon} src={home} alt="home-button" />
        </button>
        <span data-testid="weather-header" className={style.title}>
          Weather app
        </span>
      </div>
    </div>
  );
};

export default Header;
