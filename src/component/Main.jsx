<<<<<<< HEAD
import React, { Component } from 'react';
import styles from './main.css';
import img from './../img/tyt.webp';
import Border from './Border';
import { CSSTransition } from 'react-transition-group';
import TG from '../img/tg.jpeg'

export default class Main extends Component {
    constructor(props) {
        super(props);
=======
import React, { Component } from 'react'
import styles from './main.css'
import img from './../img/tyt.webp'
import Border from './Border'
import { CSSTransition } from 'react-transition-group'

export default class Main extends Component {
    constructor(props) {
        super(props)
>>>>>>> origin/main

        this.state = {
            content: null,
            on: 0,
<<<<<<< HEAD
        };
        this.Button = this.Button.bind(this);
    }

    componentDidMount() {
        if (this.state.on === 0) {
            this.setState({
                content: (
                    <div className="fool">
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
                    </div>
                ),
            });
        }
    }

    Button() {
        this.setState({
            content: (
                <>
                    <Border />
                    <div style={caviarStyle} onClick={this.handleCaviarClick}/>
                </>
            ),
        });
    }

    handleCaviarClick() {
        window.location.href = 'https://t.me/uranium121_bot'; 
    }
=======
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
    
    
    



>>>>>>> origin/main

    render() {
        return (
            <div>
                {this.state.content}
            </div>
<<<<<<< HEAD
        );
    }
}
const caviarStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: `url(${TG})`,
    backgroundSize: 'cover', // Изменяем размер фона для заполнения всего блока
    backgroundPosition: '50% 50%',
    display: 'block',
    cursor: 'pointer',
};
=======
        )
    }
}



>>>>>>> origin/main
