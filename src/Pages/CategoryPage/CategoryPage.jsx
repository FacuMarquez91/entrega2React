import { useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import CardProducts from '../../components/CardProducts/CardProducts'


const CategoryPage = () => {
  const [chars, setChars] = useState([]);
  let {categoryId} = useParams();
    

console.log(chars)
console.log(categoryId)

let filterCharacters = chars.filter((char) =>{
    return char.category === categoryId;

});

  useEffect(() => {
    axios(`https://fakestoreapi.com/products`).then((res) => setChars(res.data)
    );
 }, []);

  return (
    <div className='CardProducts'>
        {filterCharacters.map((char)=> {
            return(
                <div style={{margin: 10}} key={char.id}>
                    <CardProducts char={char}/>
                </div>
            )
        } )}
    </div>
 
   
  )


  }
export default CategoryPage