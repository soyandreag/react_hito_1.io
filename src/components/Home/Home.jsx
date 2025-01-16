import CardPizza from "../CardPizza/CardPizza" 
import Header from "../Header/Header.jsx" 
import './Home.css'
import { pizzas } from '../../assets/js/pizzas.js' 

const Home = () => {
    return (
        <>
            <Header />
            <div className='boxCards'>
                {pizzas.map(pizza => (
                    <div key={pizza.id} className="d-flex justify-content-center mb-4 col-12 col-md-6 col-lg-4">
                        <CardPizza
                            name={pizza.name}
                            price={pizza.price}
                            ingredients={pizza.ingredients}
                            img={pizza.img}
                        />
                    </div>
                ))}
            </div>

            </>
        )
    }
                  

export default Home
