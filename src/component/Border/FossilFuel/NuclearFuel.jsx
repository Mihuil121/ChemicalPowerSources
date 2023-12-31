import React, { Component } from 'react'
import Head from './head/Head'
import styl from './FossilFuel.css'
import Border from '../../Border';
import img1 from '../../../img/_14fe6e94-c9d0-4610-937f-1a0a6d879d82.jfif';
import img2 from '../../../img/rys.jfif'

export default class NuclearFuel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      on: false,
      text: '',
      img: null,
      textDiv: null,
      clickc: 0
    }
    this.click = this.click.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(number) {

    if (number === 1) {
      this.setState({
        img: img1,
        text: "Ядерная энергия - это один из способов получения электричества из атомов. Для этого нужен специальный материал, который называется ядерным топливом. Ядерное топливо может быть разного вида, но самые известные - это уран, плутоний и торий.        Уран - это самый распространенный вид ядерного топлива. Он состоит из двух изотопов: уран-235 и уран-238. Уран-235 может легко расщепляться под действием нейтронов и выделять энергию. Уран-238 не может расщепляться, но может превращаться в плутоний-239.      Плутоний - это другой вид ядерного топлива. Он образуется из урана-238 в ядерных реакторах. Плутоний-239 также может расщепляться под действием нейтронов и выделять энергию. Плутоний очень опасен, так как может быть использован для создания ядерного оружия. Торий - это третий вид ядерного топлива. Он не может расщепляться, но может превращаться в уран-233. Уран-233 также может расщепляться под действием нейтронов и выделять энергию. Торий считается более безопасным и экологичным, чем уран или плутоний."
        
      })
    }
    else if (number === 2) {
      this.setState({
        img: img2,
        text: "Уран - это элемент, который дает энергию атомным реакторам. У него есть разные изотопы, но самые важные - это уран-235 и уран-238. Уран-235 легко распадается и высвобождает много тепла. Уран-238 не распадается, но становится плутонием-239, когда поглощает нейтроны.        Плутоний-239 - это еще один изотоп, который дает энергию атомным реакторам. Он тоже легко распадается и высвобождает много тепла. Но плутоний-239 очень опасен, потому что из него можно сделать бомбу.        Уран и плутоний - это не единственные виды ядерного топлива. Есть еще торий, который может превратиться в уран-233. Уран-233 тоже может давать энергию атомным реакторам. Торий считается более безопасным и чистым, чем уран или плутоний."
      })
    }
    else if(number === 3){
      this.setState({
        img: img1,
        text: "Плутоний - это металл, который был создан человеком. Он имеет разные изотопы, но самый важный - это плутоний-239. Он может давать энергию атомным реакторам или бомбам.        Плутоний-239 образуется из урана-238, когда он поглощает нейтроны. Он легко распадается и высвобождает много тепла и нейтронов. Это называется цепной реакцией деления.        Плутоний-239 очень опасен, потому что он очень радиоактивен и токсичен. Он также может быть использован для создания ядерного оружия. Для этого нужно собрать критическую массу плутония-239, которая составляет около 10 килограммов.        Плутоний - это не единственный вид ядерного топлива. Есть еще уран и торий, которые имеют свои преимущества и недостатки. Ядерная энергетика - это сложная и спорная тема."
      })
    }
    else if (number === 4) {
      this.setState({
        img: img2,
        text: "Торий - это элемент, который может дать энергию атомным реакторам. Он состоит из одного изотопа: торий-232. Торий-232 не распадается, но становится ураном-233, когда поглощает нейтроны. Уран-233 легко распадается и высвобождает много тепла. Это называется цепной реакцией деления.        Торий считается более безопасным и чистым, чем уран или плутоний. Уран и плутоний могут быть использованы для создания ядерного оружия, а торий - нет. Торий также имеет большие запасы в природе и более высокую эффективность.        Торий - это будущее ядерной энергетики. Некоторые страны уже разрабатывают и используют ториевые реакторы для своих энергетических нужд[^2^][2]. Торий может помочь решить проблемы безопасности, экологии и ресурсов, связанные с ядерной энергетикой."
      })
    }
  }

  render() {
    if (this.state.on) {
      return <Border />
    }
    return (
      <div style={styl}>
        <div onClick={this.click} >
          <Head />
        </div>
        <div className="test-text">
          <div className="ThoriumSafety">
            <div className="img-ThoriumSafety-img">
              <img src={this.state.img} className='img-ThoriumSafety' />
            </div>
            <div className="text-ThoriumSafety">
              <p className='text-center'>
                {this.state.text}
              </p>
            </div>
          </div>
        </div>
        <div className="LowerDisplay">
          <div className="text-LowerDisplay">
            <div className="text-flex">
              <p className='text-witg' onClick={() => this.handleClick(1)}>Уран-238 = плутоний-239?</p>
              <p className='text-witg' onClick={() => this.handleClick(2)}>Уран-235 в уране?</p>
              <p className='text-witg' onClick={() => this.handleClick(3)}>Плутоний-критическость?</p>
              <p className='text-witg' onClick={() => this.handleClick(4)}>Торий в реакторах?</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
  click() {
    this.setState({
      on: true,

    })
  }
}
