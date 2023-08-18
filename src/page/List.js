import { useContext } from 'react';
import { DataContext } from '../MyContext';

function List() {

    const { data, setData } = useContext(DataContext);

    function pluss() {
        let sub = document.querySelector('.submit');
        sub.classList.toggle('active');
    }

    function deleteData(code){
        let delData = data.filter(obj => obj.time !== code);
        setData(delData);
    }


    let insert = (e) => {
        e.preventDefault();
        let v = e.target;
        let d = {
            name: v.name.value,
            time: Date.now()
        }
        setData([...data, d]);
    }


    return (
        <article className='submit2'>
            <div className='plus' onClick={pluss}> + </div>
            <article className='submit'>
                <h2>참여자 등록</h2>
                <form onSubmit={insert}>
                    <input type='text' name='name' placeholder='이름?' />
                    <input type='submit' value='저장하기' />
                </form>
            </article>
            <p className='cham'>참여인원:{data.length}명</p>
            <div>
                <ol>
                    {
                        data.map((item) => (
                            
                            <li key={item.time}>
                                {item.name} <span onClick={()=>{deleteData(item.time)}}>삭제</span>
                            </li>
                        ))
                    }
                </ol>
            </div>
        </article>
    )
}

export default List