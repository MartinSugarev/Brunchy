import style from './App.module.scss'
import HeaderTitle from './components/header/HeaderTitle';
import Button from './components/button/Button';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Card from './components/card/Card';


function App() {
  return (
    <div className={style['app']}>
      <Card title={'Butter Pancakes'} subTitle={'With honey'} price={'14.30'} />
    </div>
  );
}

export default App;
