import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const menuList = ['여성','Divided',"남성","신생아/유아","아동","H&M HOME","Sale","지속가능성"];
    const navigate = useNavigate();
    const moveLogin = ()=>{
        navigate('/login')
    }
    const moveMain = ()=>{
        navigate('/')
    }

  return (
    <div className='header'>
        <div className="login" onClick={()=>{
            moveLogin();
        }}>
            <FontAwesomeIcon icon={faUser} />
            로그인
        </div>
        <div className='logoArea' onClick={()=>{
            moveMain();
        }}>
            <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png" alt="" />
        </div>
        <ul className='gnbArea'>
            {
                menuList.map((menu,i)=>{
                    return(<li key={i}>{menu}</li>)
                })
            }
        </ul>
        <div>
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" onKeyPress={(event)=>{search(event)}} />
        </div>

    </div>
  )
}

export default Navbar