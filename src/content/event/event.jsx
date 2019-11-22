import React, { Component } from 'react';

class Form extends Component {
constructor(props){
    super(props);
    this.state={
        nama   :  '',
        alamat :  '',
        hobi   :  '',
        umur   : null

    }
 }
    onsubmitHandler = (event)=>{
        event.preventDefault();
        let umur = this.state.umur;
        if(!Number(umur)){
            alert("silahkan isi usia anda terlebih dahulu");
        }
    }
    onchangeHandler=(event)=>{
        let nama =event.target.name;
        let alamat =event.target.alamat;
        let hobi =event.target.hobi;
        let val =event.target.value;
        this.setState({
            [nama] : val,
            [alamat]:val,
            [hobi]:''
        });
    }

    render() {
        return (
                <div className="wrapperform">
                    <form onSubmit={this.onsubmitHandler}>
                        <h1>Halo{this.state.name}</h1>
                        <input type="text" onChange={this.onchangeHandler} name="nama" className="text"/>
                        <h1>Sebutkan Salah Satu Hobi Kamu{this.state.hobi}</h1>
                        <input type="text" onChange={this.onchangeHandler} name="hobi" className="text"/>
                        <h1>Umur Kamu Berapa{this.state.umur}</h1>
                        <input type="text" onChange={this.onchangeHandler} name="umur" className="text"/>
                        <h1>Alamat Rumah Mu{this.state.alamat}</h1>
                        <textarea type="text" onChange={this.onchangeHandler} name="alamat" className="textarea"></textarea>
                        <hr/>
                        <input type="submit" onClick={this.updatestate} value="simpan data" className="button"/>
                    </form>
                </div>
        );
    }
}
export default Form;