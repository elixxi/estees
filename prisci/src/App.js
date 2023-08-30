import React from 'react';
import Navbar from './componentes/navbar';
import Footer from './componentes/footer';
import CardContainer from './componentes/CardContainer';
import './App.css';

function App() {
  return (
      <div>
          <Navbar />
          <CardContainer 
          imagen= 'https://i2.wp.com/enrilemoine.com/wp-content/uploads/2013/08/Ensalada-siete-sabores-SAVOIR-FAIRE-by-enrilemoine-3.jpg?w=1600&ssl=1'
          title='ensalada'
          description='Lava y corta lechuga, tomates, pepinos y zanahorias. Agrega proteínas como pollo o atún. Mezcla con aguacate, nueces o queso. Prepara un aderezo con aceite de oliva, vinagre, mostaza, miel, sal y pimienta. Rocía sobre la ensalada y mezcla.'
          /> 
           <CardContainer 
          imagen= 'https://th.bing.com/th/id/R.c87125516ba2b70cc0136760f08dac3d?rik=ikBBnVLMfTN1yQ&pid=ImgRaw&r=0'
          title='noquis'
          description='"Hierve papas peladas hasta que estén tiernas, luego haz un puré. Mezcla con harina hasta formar una masa suave. Haz tiras y corta trozos pequeños. Cocina en agua hirviendo hasta que floten. Sirve con salsa. '
          /> 
           <CardContainer 
          imagen= 'https://th.bing.com/th/id/R.4cf0d79cfc143411b08eeed0a3d87807?rik=skkubKRuz5%2b97Q&pid=ImgRaw&r=0'
          title='sanguche'
          description='Toma dos rebanadas de pan de tu elección. Extiende una capa de mayonesa o mostaza en una rebanada y coloca láminas de jamón y queso encima. Agrega rodajas de tomate y hojas de lechuga fresca. Cubre con la otra rebanada de pan.'
          /> 
           <CardContainer 
          imagen= 'https://liderpollo.com/wp-content/uploads/2019/10/pollo-frito-crocante.jpg'
          title='pollo'
          description='sazona el pollo con sal y pimienta al gusto. Pásalo por harina para que quede ligeramente enharinado. calienta aceite vegetal en una sartén a fuego medio-alto. Asegúrate de que el aceite esté lo suficientemente caliente, pero no humeante. Coloca con cuidado las piezas de pollo en el aceite caliente. Fríe el pollo hasta que esté dorado y cocido por completo.'
          /> 
           <CardContainer 
          imagen= 'https://www.engelvoelkers.com/wp-content/uploads/2014/07/pizza-stock.jpg'
          title='pizza'
          description='Estira una masa de pizza comprada o hecha en casa en una bandeja para horno. Distribuye una capa uniforme de salsa de tomate sobre la masa, sin exagerar para evitar empaparla. Cubre la salsa con abundante queso mozzarella rallado, asegurándote de cubrir toda la superficie. Añade tus ingredientes favoritos, como pepperoni, jamón, champiñones, pimientos, aceitunas, etc. Hornea la pizza'
          />   
        <Footer />       
      </div>
      
  );
}

export default App;

