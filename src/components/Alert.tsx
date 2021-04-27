import { useSelector, useDispatch } from 'react-redux';
import {setAlert} from '../store/actions/weatherActions'
import {FC} from 'react'
import {RootStateType} from './../store'


const Alert: FC = ()=>  {
   const errorMsg = useSelector((state: RootStateType) => state.alert);
   const dispatch = useDispatch()

   const closeAlert = () => {
      dispatch(setAlert(''))
   }

   return(
      <div onClick={() => closeAlert()} className='alert__wrap'>
         <div onClick={e => e.stopPropagation()} className='alert__body'>
            <p className='alert__message'>{errorMsg} !</p>
            <button className='btn alert__btn' onClick={() => closeAlert()}>close</button>
         </div>
      </div>
   )
}

export default Alert