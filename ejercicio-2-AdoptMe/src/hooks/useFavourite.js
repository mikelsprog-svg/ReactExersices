import {useState} from 'react'


export function useFavourites()
{
    const [favourite,setFavourite] = useState([]) ;

    function addFavourite(id)
    {
        setFavourite((prev) => {
            if (prev.includes(id)) {
                return prev;
            } else {
                return [...prev, id];
            }
        });
    }
    function removeFavourite(id)
    {
        setFavourite((previousState)=>
        {
          return previousState.filter((favourite) => favourite !== id);

        }

    }

}
