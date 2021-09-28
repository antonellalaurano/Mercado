import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import CreateUser from '../../components/CreateUser';
import MyProfile from '../../components/MyProfile';
import Navbar from '../../components/Navbar/Navbar'
import UpdateUser from '../../components/UpdateUser';
import UsersList from '../../components/UserList/UsersList';
import UserMenu from '../../components/UserMenu'
import { idGetUser } from '../../redux/actions/user';

const Administrator = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const permissions = useSelector(state => state.auth.permissions);

    const optionsMenu = [
        {
            en: {},
            es: 'Usuarios'
        },
        {
            en: {},
            es: 'Desarrolladores'
        },
        {
            en: {},
            es: 'Administradores'
        },
        {
            en: {},
            es: 'Propietarios'
        },
        {
            en: {},
            es: 'Clientes'
        },
        {
            en: {},
            es: 'Deliveries'
        }
    ];

    for (let i= 4; i < 10; i++) {
        if (permissions[i].actions.get) {
            optionsMenu[i-4] = {
                ...optionsMenu[i-4],
                en: permissions[i]
            }
        } else {

        }
    }

    if(location.hash !== '#actualizarusuario') {
        dispatch(idGetUser(''))
    }

    return (
        <div className='userLogin'>
            <UserMenu optionsMenu={optionsMenu}/>
            <Navbar />
            <div className='main'>
                {
                    {   '#perfil': <MyProfile />,
                        '': <UsersList title='Todos los usuarios'/>,
                        '#crearusuario': <CreateUser />,
                        '#actualizarusuario': <UpdateUser />,
                        '#usuarios': <UsersList title='Todos los usuarios'/>,
                        '#desarrolladores': <UsersList title='Desarrolladores'/>,
                        '#administradores': <UsersList title='Administradores'/>,
                        '#propietarios': <UsersList title='Propietarios'/>,
                        '#clientes': <UsersList title='Clientes'/>,
                        '#deliveries': <UsersList title='Deliveries'/>
                    }[location.hash]
                }
            </div>
        </div>
    )
}

export default Administrator
