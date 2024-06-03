import React, { useState } from 'react';
import Border from '../../Border';
import Head from './head/Head';
import img1 from '../../../img/_14fe6e94-c9d0-4610-937f-1a0a6d879d82.jfif';
import img2 from '../../../img/rys.jfif';
import styles from './FossilFuel.css';

const Titan = () => {
  const [on, setOn] = useState(false);
  const [text, setText] = useState('');
  const [img, setImg] = useState(null);
  const [clickc, setClickc] = useState(0);

  const handleClick = (number) => {
    if (number === 1) {
      setImg(img1);
      setText(`
      Атомный внутренний генератор атомного ледокола работает на основе принципа ядерной энергии. В его основе лежит использование ядерных реакций, таких как ядерный распад или ядерное синтезирование, для генерации тепла. Это происходит в специальном устройстве - ядерном реакторе, который находится внутри корпуса ледокола. В реакторе происходят ядерные реакции, выделяющие огромное количество тепла. Это тепло затем используется для нагрева воды и превращения ее в пар. Пар, в свою очередь, подает давление на турбину, которая приводит в движение генератор электроэнергии, производя электричество.
      `);
    } else if (number === 2) {
      setImg(img2);
      setText(`
      Атомный внутренний генератор обычно располагается в центральной части атомного ледокола. Это делается для обеспечения наилучшего распределения тепла и эффективности работы. Размещение внутри корпуса также обеспечивает защиту и безопасность от возможных внешних воздействий.
      `);
    } else if (number === 3) {
      setImg(img1);
      setText(`Энергия создается благодаря тепловому эффекту ядерных реакций, происходящих в реакторе. В результате ядерных процессов, особенно ядерного распада, выделяется огромное количество тепла. Это тепло используется для превращения воды в пар, который подает давление на турбину, вращая ее и, таким образом, генерируя электричество.`);
    } else if (number === 4) {
      setImg(img2);
      setText(`
      Обслуживание атомного внутреннего генератора требует высокой степени внимания к безопасности и технической подготовки. Регулярные проверки состояния реактора, турбины, системы охлаждения и других важных компонентов необходимы для обеспечения его надежной работы. Также важно следить за запасами ядерного топлива и проводить его подмену вовремя, чтобы гарантировать непрерывную генерацию электроэнергии.
      `);
    }
  };

  const click = () => {
    setOn(true);
  };

  if (on) {
    return <Border />;
  }

  return (
    <div style={styles}>
      <div onClick={click}>
        <Head />
      </div>
      <div className="test-text">
        <div className="ThoriumSafety">
          <div className="img-ThoriumSafety-img">
            <img src={img} className='img-ThoriumSafety' />
          </div>
          <div className="text-ThoriumSafety">
            <p className='text-center'>
              {text}
            </p>
          </div>
        </div>
      </div>
      <div className="LowerDisplay">
        <div className="text-LowerDisplay">
          <div className="text-flex">
            <p className='text-witg' onClick={() => handleClick(1)}>Как работает?</p>
            <p className='text-witg' onClick={() => handleClick(2)}>Где находится?</p>
            <p className='text-witg' onClick={() => handleClick(3)}>Как создает энергию?</p>
            <p className='text-witg' onClick={() => handleClick(4)}>Как обслуживать?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Titan;

