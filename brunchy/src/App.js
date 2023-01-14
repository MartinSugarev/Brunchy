import style from './App.module.scss'
import HeaderTitle from './components/header/HeaderTitle';
import Button from './components/button/Button';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';


function App() {
  return (
    <div className={style['app']}>
      <Hero text1={'The fastest brunch delivery in'} text2={'Your city'} />
    </div>
  );
}

export default App;
