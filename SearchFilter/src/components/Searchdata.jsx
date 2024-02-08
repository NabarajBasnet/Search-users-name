import './Searchdata.css';
import { useState } from 'react';
import MOCKDATA from '../../MOCK_DATA.json';



const Searchdata = ()=>
{
    const[searchData, setSearchData] = useState('');



    return(
        <>
        <div className="maincontainer">
            <div className="centerdiv">
                <form action="" className='formfield'>
                    <input type='text' placeholder='Search...' value={searchData} onChange={(e)=>setSearchData(e.target.value) } />
                </form>

                <div className="dispdata">
                    {
                        MOCKDATA.filter((val)=>
                        {
                            if(val.first_name==''){
                                return val;
                            }
                            else if(
                                val.first_name.toLowerCase().includes(searchData.toLowerCase()))
                                {
                                    return val;
                                }
                        }).map((val, i)=>
                        <div className="dispsearchdata" key={i}>
                            <ul>
                                <li>{val.first_name}</li>
                            </ul>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
        </>
    )
}



export {Searchdata};