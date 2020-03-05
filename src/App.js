import React,  {Component} from 'react';
import Header from './Component/UI/Header/Header';
import Input from './Component/UI/Input/Input';
import ipfs from './IPFS/ipfs';
class App extends Component {

  hanleInputOnChange = (event) =>{
   let file = event.target.files[0];
    let reader = new window.FileReader();
    render.readAsArrayBuffer(file)
    render.onLoadend =() =>{
      console.log(render.result);
ipfs.files.add(Buffer(reader.result),(error,result)) =>{

}

    }
      console.log(file)

  }
render() {
  return(<div>
          <Header/>

          <Input onChange ={this.hanleInputOnChange} />

          </div>);
}
}


export default App;