import loaderImg from './../assets/images/loading.gif'
import {FC} from 'react'

const Loader: FC  = () => {
   return  <div className='loader__wrap'>
  <img src={loaderImg} alt=""/>
</div>
}

export default Loader