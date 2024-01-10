import { useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import CardProducts from '../../components/CardProducts/CardProducts'


const DetailPage = () => {
  const [char, setChar] = useState({});
  let {id} = useParams();



  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`).then((json) => setChar(json.data)
    );
 }, [id]);

  return (

    <div style={{display: "flex", justifyContent: "center", margin: 20}}>
      {char.id? <CardProducts char={char}/> : null}
    </div>
  )


  }
export default DetailPage