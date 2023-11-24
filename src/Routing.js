import{BrowserRouter,Route,Routes} from 'react-router-dom'
import Loginpage from './component/loginPage/loginpage'
import Homepage from './component/Homepage/Homepage'
const Routing=()=>{

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Loginpage/>} ></Route>
                <Route path='/homepage' element={<Homepage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Routing