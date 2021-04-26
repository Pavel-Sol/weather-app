import { useSelector, useDispatch } from 'react-redux';
import {setAlert} from './../store/actions/weatherActions'


const Alert = ()=>  {
   const errorMsg = useSelector((state) => state.alert);
   const dispatch = useDispatch()

   const closeAlert = () => {
      dispatch(setAlert(''))
   }

   return(
      <div onClick={() => closeAlert()} className='alert__wrap'>
         <div onClick={e => e.stopPropagation()} className='alert__body'>
            <p className='alert__message'>{errorMsg}</p>
            <button onClick={() => closeAlert()}>закрыть</button>
         </div>
      </div>
   )
}

export default Alert