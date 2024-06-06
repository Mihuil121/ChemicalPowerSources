<<<<<<< HEAD
import React, { Component } from 'react';
import img from '../img/i.webp';
import styles from './Border.css';
import icon from '../img/ico.png';
import icon2 from '../img/_a3da41aa-0378-4347-a167-134a30bac24a.png';
import icon3 from '../img/_2b903b4c-079c-46a3-bf35-8dcbef0f268b.png';
import icon4 from '../img/_de5b52c9-2658-4b69-a759-13072e2d84cc_pixian_ai.png';
import FossilFuel from '../component/Border/FossilFuel/FossilFuel';
import Fossil from '../component/Border/FossilFuel/Fossil';
import AtomEnergy from '../component/Border/FossilFuel/AtomEnergy';
import NuclearFuel from '../component/Border/FossilFuel/NuclearFuel';
import Titan from './Border/FossilFuel/titan';
import icon21 from '../img/atom.png'

const transform = {
  transform: "scale(1.1)",
};

export default class Border extends Component {
  constructor(props) {
    super(props);
=======
import React, { Component } from 'react'
import img from '../img/i.webp'
import styles from './Border.css'
import icon from '../img/ico.png'
import icon2 from '../img/_a3da41aa-0378-4347-a167-134a30bac24a.png'
import icon3 from '../img/_2b903b4c-079c-46a3-bf35-8dcbef0f268b.png'
import icon4 from '../img/_de5b52c9-2658-4b69-a759-13072e2d84cc_pixian_ai.png'
import FossilFuel from '../component/Border/FossilFuel/FossilFuel'
import Fossil from '../component/Border/FossilFuel/Fossil'
import AtomEnergy from '../component/Border/FossilFuel/AtomEnergy'
import NuclearFuel from '../component/Border/FossilFuel/NuclearFuel'

const transforn = {
  transform: "scale(1.1)",

}


export default class Border extends Component {

  constructor(props) {
    super(props)
>>>>>>> origin/main
    this.state = {
      on: 0,
      sty: null,
      sty2: null,
      sty3: null,
      sty4: null,
<<<<<<< HEAD
      sty5: null,
=======
>>>>>>> origin/main
      showFossilFuel: false,
      Fossil: false,
      AtomEnergy: false,
      NuclearFuel: false,
<<<<<<< HEAD
      titan: false,
    };
=======
    }
>>>>>>> origin/main
    this.FossilFuel = this.FossilFuel.bind(this);
    this.Fossil = this.Fossil.bind(this);
    this.AtomEnergy = this.AtomEnergy.bind(this);
    this.NuclearFuel = this.NuclearFuel.bind(this);
<<<<<<< HEAD
    this.titan = this.titan.bind(this);
=======
>>>>>>> origin/main
  }

  Fossil() {
    this.setState({ Fossil: true });
  }
<<<<<<< HEAD
  
  AtomEnergy() {
    this.setState({ AtomEnergy: true });
  }
  
  NuclearFuel() {
    this.setState({ NuclearFuel: true });
  }
  
  titan() {
    this.setState({ titan: true });
  }
=======
  AtomEnergy() {
    this.setState({ AtomEnergy: true });
  }
  NuclearFuel() {
    this.setState({ NuclearFuel: true });
  }
>>>>>>> origin/main

  render() {
    if (this.state.showFossilFuel) {
      return <FossilFuel />;
    }
    else if (this.state.Fossil) {
      return <Fossil />;
    }
    else if (this.state.AtomEnergy) {
      return <AtomEnergy />;
    }
    else if (this.state.NuclearFuel) {
      return <NuclearFuel />;
    }
<<<<<<< HEAD
    else if (this.state.titan) {
      return <Titan />;
    }

    return (
      <div className="container" style={styles}>
        <div className="flex">
          <div className="colon" onClick={this.FossilFuel} onMouseOver={() => this.setState({ sty: transform })} onMouseOut={() => this.setState({ sty: null })} style={this.state.sty}>
            <div>
              <img src={icon} alt="" className="imgs" />
            </div>
            <div className="text-colum">
              Какой тип топлива предпочтительнее?
            </div>
            <div className="clic">
              <div className="clic-booton-bac">
                <p className='clic-booton'>
                  нажмите чтоб узнать
                </p>
              </div>
            </div>
          </div>
          <div className="colon" onClick={() => this.Fossil(1)} onMouseOver={() => this.setState({ sty2: transform })} onMouseOut={() => this.setState({ sty2: null })} style={this.state.sty2}>
=======

    return (
      <div style={styles}>
        <div className="flex">
          <div className="">
            <div className="colon" onClick={this.FossilFuel} onMouseOver={() => this.setState({ sty: transforn })} onMouseOut={() => this.setState({ sty: null })} style={this.state.sty}>
              <div >
                <img src={icon} alt="" className="imgs" />
              </div>
              <div className="text-colum">
                Из тория можно получить больше энергии. Но в 1 кг урана чуть больше энергии, чем в 1 кг тория.
              </div>
              <div className="clic" >
                <div className="clic-booton-bac">
                  <p className='clic-booton'>
                    нажмите чтоб узнать
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="colon" onClick={() => this.Fossil(1)} onMouseOver={() => this.setState({ sty2: transforn })} onMouseOut={() => this.setState({ sty2: null })} style={this.state.sty2}>
>>>>>>> origin/main
            <div id='2'>
              <img src={icon2} alt="" className="imgs" />
            </div >
            <div className="text-colum">
<<<<<<< HEAD
              Как происходит сжигание ископаемого топлива?
=======
              Уголь, нефть, газ - ископаемое топливо. При горении выделяют тепло.
>>>>>>> origin/main
            </div>
            <div className="clic">
              <div className="clic-booton-bac">
                <p className='clic-booton'>
                  нажмите чтоб узнать
                </p>
              </div>
            </div>
          </div>
<<<<<<< HEAD
          <div className="colon" onClick={this.AtomEnergy} onMouseOver={() => this.setState({ sty3: transform })} onMouseOut={() => this.setState({ sty3: null })} style={this.state.sty3}>
=======
          <div className="colon" onClick={this.AtomEnergy} onMouseOver={() => this.setState({ sty3: transforn })} onMouseOut={() => this.setState({ sty3: null })} style={this.state.sty3}>
>>>>>>> origin/main
            <div>
              <img src={icon3} alt="" className="imgs" />
            </div>
            <div className="text-colum">
<<<<<<< HEAD
              Как работают атомные электростанции?
=======
              На АЭС используется энергия деления урана, плутония. Нагревается вода, вырабатывается электричество.
>>>>>>> origin/main
            </div>
            <div className="clic">
              <div className="clic-booton-bac">
                <p className='clic-booton'>
                  нажмите чтоб узнать
                </p>
              </div>
            </div>
          </div>
<<<<<<< HEAD
          <div className="colon" onClick={this.NuclearFuel} onMouseOver={() => this.setState({ sty4: transform })} onMouseOut={() => this.setState({ sty4: null })} style={this.state.sty4}>
=======
          <div className="colon" onClick={this.NuclearFuel} onMouseOver={() => this.setState({ sty4: transforn })} onMouseOut={() => this.setState({ sty4: null })} style={this.state.sty4}>
>>>>>>> origin/main
            <div >
              <img src={icon4} alt="" className="imgs" />
            </div>
            <div className="text-colum">
<<<<<<< HEAD
              Какие виды ядерного топлива существуют?
            </div>
            <div className="clic">
              <div className="clic-booton-bac">
                <p className='clic-bootон'>
                  нажмите чтоб узнать
                </p>
              </div>
            </div>
          </div>
          <div className="colon" onClick={this.titan} onMouseOver={() => this.setState({ sty5: transform })} onMouseOut={() => this.setState({ sty5: null })} style={this.state.sty5}>
            <div >
              <img src={icon21} alt="" className="imgs" />
            </div>
            <div className="text-colum">
            Внутренний атомный генератор: Как он работает?
=======
              Виды ядерного топлива: уран, плутоний, торий. Добыча урана сложна. Торий безопаснее.
>>>>>>> origin/main
            </div>
            <div className="clic">
              <div className="clic-booton-bac">
                <p className='clic-booton'>
                  нажмите чтоб узнать
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    );
  }
  
=======
    )
  }
>>>>>>> origin/main
  FossilFuel() {
    this.setState({ showFossilFuel: true });
  }
}
<<<<<<< HEAD
=======

>>>>>>> origin/main
