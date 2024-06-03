
This project is my work for the Maritime College. I used React to create an interactive web application that shows the borders of different countries. I learned new skills, for example, how to correctly return components depending on the state of the application. For example, I wrote the following code:


if (this.state.on) {
  return <Border />
}
click() {
  this.setState({
    on: true,
  })
}


To launch the application, you need to download it and enter the `npm start` command in the terminal. This is to launch a local server on which you can see the result of my work. (This is an explanation for teachers who may not know how to work with React).
