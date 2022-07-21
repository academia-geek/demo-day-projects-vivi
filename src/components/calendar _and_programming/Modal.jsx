import {  Modal } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import axios from 'axios';
import React, { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'

import { ImageMore } from '../components/ImageMore';
import { addCommentAsync } from '../redux/actiones/pokemonComment';

export const ModalConfirm = ({id,urlImage}) => {
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [value,setValue]=useState()
    const dispatch=useDispatch()

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`
    const [pokemon, setPokemon] = useState([""]);
    const getData = async () => {
        const { data } = await axios.get(url)
        setPokemon(data);
    }
    const d = useMemo(() => getData(), []);
    console.log(pokemon)
    
    const handleInputChange = (target) => {
      setValue(target.target.defaultValue)  
       }
      
    const formValue = {
      id:Math.random(),
      name:pokemon.name,
      color:pokemon.color?.name,
      generation:pokemon.generation?.name,
      comment:value,
      image:urlImage
     }

     const handleOk = () => {
      dispatch (addCommentAsync(formValue))
      setIsModalVisible(false);
     
  };
  
  return (
   
    <div>
         <>
      
      <Modal style={{textAlign:"center"}} title="Evolution" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Evolucionado de : {pokemon.evolves_from_species?.name}</p>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
        
        <ImageMore url={`https://pokeapi.co/api/v2/pokemon/${pokemon.evolves_from_species?.name}`}/>
       <img src="https://th.bing.com/th/id/OIP.B8EZdgHqewxLL4NiiS1e4gHaHa?pid=ImgDet&rs=1" style={{width:"30px",height:"30px",marginTop:"30px"}} />
        <img src={urlImage} alt="" srcset="" />
        </div>
     
        <TextArea rows={4} placeholder="maxLength is 100" maxLength={100} onChange={handleInputChange} />
        
      </Modal>
    </>
    </div>
  )
}
