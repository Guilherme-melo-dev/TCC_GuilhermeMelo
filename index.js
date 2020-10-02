import React from 'react';
import './styles.css'
import { BsArrowRight } from 'react-icons/bs'
import imgInts from '../../../assets/imgInst.png'
import Banco1 from '../../../assets/Banco1.png'
import Banco2 from '../../../assets/Banco2.png'
import Banco3 from '../../../assets/Banco3.jpg'
import Banco4 from '../../../assets/Banco4.png'
import Banco5 from '../../../assets/Banco5.jpg'
import Banco6 from '../../../assets/Banco6.jpg'
import Facul from '../../../assets/Facul.jpg'
import LogoSite from '../../../assets/LogoSite.png'

function Institutions() {
  return (
    <>
      <div id="anc-inst" className="container-Institutions">
          <div id="texts-instituicao">
            <p id="title-insti">Instituições</p>
            <p id="desc-insti">
              Conheças os hemocentros que são parceiros do Conectando Vidas. Ou
              junte-se a nós e ajude-nos a levar a doação de sangue a cada vez
              mais áreas.
            </p>

            <button type="button" id="btnInst" data-toggle="modal" data-target="#exampleModal">
                Conheça nossos parceiros <BsArrowRight size={30} color={"darkred"}/>
            </button>  

          </div>
          <img id="image-inst" src={imgInts} alt="Imagem Instituição" />
  

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">         
        

         <div id="TextLogo">
         <img id="Logo" src={LogoSite} alt="Logo Site" /> 
            CONECTANDO VIDAS
         </div>        

        </div>
        <div class="modal-body">

        <img id="image-Banco1" src={Banco1} alt="Imagem Instituição" />
        <img id="image-Banco2" src={Banco2} alt="Imagem Instituição" />
        <img id="image-Banco3" src={Banco3} alt="Imagem Instituição" />  
        <img id="image-Banco4" src={Banco4} alt="Imagem Instituição" />  
        <img id="image-Banco5" src={Banco5} alt="Imagem Instituição" /> 
        <img id="image-Banco6" src={Banco6} alt="Imagem Instituição" /> 
        <img id="image-Facul" src={Facul} alt="Imagem Instituição" />        
        <hr/>
        <br/>
          <div id="textModal">
           <>
                Bem vindo ao mural de parceiros do Conectando Vidas, eai vai ficar de fora dessa? <br/> Seja 
              também um de nossos parceiros entre em contato conosco e venha fazer parte desta familia.
           </>           
             </div>                            
        <br/>       
        </div>
             <div class="modal-footer">   
                 <button type="button" class="btn btn-light"  data-dismiss="modal">Cadastrar empresa</button>       
                 <button type="button" class="btn btn-light"  data-dismiss="modal">Voltar</button>                            
             </div>             
      </div>
    </div>
  </div>                  
</div>
</>
);
}

export default Institutions;