import React, { Component } from 'react'
import styles from './main.css'
import img from './../img/tyt.webp'
import Border from './Border'
import { CSSTransition } from 'react-transition-group'

export default class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            content: null,
            on: 0,
        }
        this.Button = this.Button.bind(this)
    }


    componentDidMount() {
        if (this.state.on === 0) {
            this.setState({
                content: <div className="fool">
                    <div className="free">
                        <div style={styles} className='glav'>
                            <div className="class">
                                <div className="clas">
                                    <img src={img} className='imge' />
                                </div>
                            </div>
                            <div className="text-1">
                                <div>
                                    <p className="text">
                                        <p className='text-text'>
                                            Химические источники тока преобразуют химическую энергию связей атомов и молекул в электрическую энергию, используя окислительно-восстановительные реакции между электродами и электролитом.
                                        </p>
                                    </p>
                                </div>
                            </div>

                            <div className='yti'>
                                <button className='bit' onClick={this.Button}>
                                    <div className="button">
                                        Узнать больше
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>,
            })
        }

    }
    Button() {
       
            this.setState({
                content: 
                        <Border />

            });

    }
    
    
    




    render() {
        return (
            <div>
                {this.state.content}
            </div>
        )
    }
}



