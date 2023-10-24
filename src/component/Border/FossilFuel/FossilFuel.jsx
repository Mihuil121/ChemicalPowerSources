import React, { Component } from 'react'
import Head from './head/Head'
import styl from './FossilFuel.css'
import Border from '../../Border';
import img1 from '../../../img/_14fe6e94-c9d0-4610-937f-1a0a6d879d82.jfif';
import img2 from '../../../img/rys.jfif'

export default class FossilFuel extends Component {
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
        text: "Почему торий безопаснее?     Торий более безопасен по сравнению с ураном, так как он не может самостоятельно поддерживать цепную ядерную реакцию. Для запуска реакции деления тория нужны добавки небольшого количества других радиоактивных элементов, например урана-235 или плутония-239. В случае аварии или выхода реактора на опасный режим достаточно просто убрать эти добавки, и реакция остановится. Кроме того, торий не пригоден для создания ядерного оружия, так как не дает быстрого выброса нейтронов. Это делает ториевые реакторы менее привлекательными для военных и снижает риски распространения ядерных технологий.  Наконец, отходы, образующиеся после использования тория, имеют меньший период полураспада по сравнению с отходами урановых реакторов. Это уменьшает время их потенциальной опасности для окружающей среды. Таким образом, использование тория вместо урана повышает безопасность ядерной энергетики."
      })
    }
    else if (number === 2) {
      this.setState({
        img: img2,
        text: "Использование тория в качестве ядерного топлива имеет ряд преимуществ, которые делают его перспективным для атомной энергетики: Запасы тория в земной коре примерно в 4 раза больше, чем запасы урана. По оценкам, их хватит на тысячи лет использования в атомной энергетике.  Торий равномерно распределен в земной коре и добывается как побочный продукт при добыче других металлов. Это обеспечивает стабильность поставок и независимость от импорта топлива.   В отличие от урана, торий не нужно обогащать для использования в реакторах. Это удешевляет топливный цикл.   Отработавшее ториевое топливо проще перерабатывать и имеет меньший объем долгоживущих радиоактивных отходов.   Торий практически непригоден для создания ядерного оружия. Это снимает риски распространения ядерных технологий.  Ториевые реакторы можно сделать более безопасными за счет невозможности возникновения в них самоподдерживающейся цепной реакции. Использование тория позволит расширить сырьевую базу атомной энергетики и сделать её по-настоящему долгосрочной перспективной технологией. Таким образом, несмотря на большие начальные затраты, внедрение ториевого топливного цикла может принести значительные выгоды в долгосрочной перспективе."
      })
    }
    else if(number === 3){
      this.setState({
        img: img1,
        text: "Выбор между торием и ураном в качестве ядерного топлива - сложный вопрос, и однозначно ответить, что выгоднее, нельзя. Есть аргументы в пользу как тория, так и урана: В пользу урана: - Технологии использования урана отработаны десятилетиями и активно применяются. Переход на торий потребует больших инвестиций в НИОКР.    - Инфраструктура топливного цикла (добыча, обогащение, переработка) уже создана для урана. Для тория её нужно будет создавать.  - Запасы обогащенного урана для АЭС уже накоплены. Для использования тория потребуются дополнительные поставки сырья.- Уран легче и дешевле добывать, так как концентрируется в рудных месторождениях.В пользу тория: - Запасы тория намного больше, чем урана. Хватит на тысячелетия использования в АЭС.- Отработавшее ториевое топливо проще перерабатывать и даёт меньше долгоживущих отходов - Торий не нуждается в обогащении, это удешевляет топливный цикл.- Торий непригоден для ядерного оружия, не создаёт риска распространения.         - Ториевый реактор в аварии останавливается сам, это повышает безопасность.        Таким образом, уран выгоднее в краткосрочной перспективе, а торий - в долгосрочной. Решение о переходе на торий должно приниматься с учетом экономических факторов и стратегических целей страны в атомной энергетике."
      })
    }
    else if (number === 4) {
      this.setState({
        img: img2,
        text: "Исходя из предоставленных документов, можно сделать следующий вывод о сравнительных преимуществах урана и тория как ядерного топли По запасам в земной коре торий имеет большое преимущество - его запасы примерно в 4 раза больше, чем урана. Этого хватит на тысячи лет использования в атомной энергетике. Однако добыча урана проще и дешевле, так как он концентрируется в рудных месторождениях. Торий же распределен более равномерно и добывается как побочный продукт.        Уран нуждается в дорогостоящем обогащении для использования в реакторах. Торий может использоваться без обогащения, что снижает стоимость топлива.  С другой стороны, технологии работы с ураном хорошо отработаны. Для внедрения тория потребуются значительные инвестиции в разработки.        Переработка отработавшего ториевого топлива проще и даёт меньший объем долгоживущих радиоактивных отходов. Но для урана уже есть готовая инфраструктура переработки.        Ториевые реакторы более безопасны в эксплуатации, а торий не пригоден для создания ядерного оружия. Но урановое топливо уже наработано и имеется в наличии.        Таким образом, торий более перспективен в долгосрочной перспективе, а уран - в текущих экономических условиях. Решение о переходе на торий должно учитывать стратегические цели и возможности инвестирования в новые технологии каждой страны."
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
              <p className='text-witg' onClick={() => this.handleClick(1)}>Почему торий безопаснее?</p>
              <p className='text-witg' onClick={() => this.handleClick(2)}>Почему торий перспективен?</p>
              <p className='text-witg' onClick={() => this.handleClick(3)}>Торий или уран выгоднее?</p>
              <p className='text-witg' onClick={() => this.handleClick(4)}>Уран или торий выгоднее?</p>
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
