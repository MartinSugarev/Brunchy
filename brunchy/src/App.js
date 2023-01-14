import style from './App.module.scss'
import HeaderTitle from './components/header/HeaderTitle';
import Button from './components/button/Button';
import Header from './components/header/Header';


function App() {
  return (
    <div className={style['app']}>
      <Header />
    </div>
  );
}

export default App;
