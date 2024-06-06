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
    this.state = {
      on: 0,
      sty: null,
      sty2: null,
      sty3: null,
      sty4: null,
      sty5: null,
      showFossilFuel: false,
      Fossil: false,
      AtomEnergy: false,
      NuclearFuel: false,
      titan: false,
    };
    this.FossilFuel = this.FossilFuel.bind(this);
    this.Fossil = this.Fossil.bind(this);
    this.AtomEnergy = this.AtomEnergy.bind(this);
    this.NuclearFuel = this.NuclearFuel.bind(this);
    this.titan = this.titan.bind(this);
  }

  Fossil() {
    this.setState({ Fossil: true });
  }
  
  AtomEnergy() {
    this.setState({ AtomEnergy: true });
  }
  
  NuclearFuel() {
    this.setState({ NuclearFuel: true });
  }
  
  titan() {
    this.setState({ titan: true });
  }

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
            <div id='2'>
              <img src={icon2} alt="" className="imgs" />
            </div >
            <div className="text-colum">
              Как происходит сжигание ископаемого топлива?
            </div>
            <div className="clic">
              <div className="clic-booton-bac">
                <p className='clic-booton'>
                  нажмите чтоб узнать
                </p>
              </div>
            </div>
          </div>
          <div className="colon" onClick={this.AtomEnergy} onMouseOver={() => this.setState({ sty3: transform })} onMouseOut={() => this.setState({ sty3: null })} style={this.state.sty3}>
            <div>
              <img src={icon3} alt="" className="imgs" />
            </div>
            <div className="text-colum">
              Как работают атомные электростанции?
            </div>
            <div className="clic">
              <div className="clic-booton-bac">
                <p className='clic-booton'>
                  нажмите чтоб узнать
                </p>
              </div>
            </div>
          </div>
          <div className="colon" onClick={this.NuclearFuel} onMouseOver={() => this.setState({ sty4: transform })} onMouseOut={() => this.setState({ sty4: null })} style={this.state.sty4}>
            <div >
              <img src={icon4} alt="" className="imgs" />
            </div>
            <div className="text-colum">
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
    );
  }
  
  FossilFuel() {
    this.setState({ showFossilFuel: true });
  }
}
