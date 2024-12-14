import Img from '@/assets/logo.svg'
import Image from 'next/image'

export default function Shopping() {
  return (
      <div>
        <h2>Sacola de compras</h2>

        <div>
          <div>
            <Image src={Img} width={95} height={95} alt="" />
            <div>
              <p>Camiseta x</p>
              <strong>R$ 79,90</strong>

              <button>Remover</button>
            </div>
          </div>

          <div>
            <Image src={Img} width={95} height={95} alt="" />
            <div>
              <p>Camiseta a</p>
              <strong>R$ 79,90</strong>

              <button>Remover</button>
            </div>
          </div>

          <div>
            <Image src={Img} width={95} height={95} alt="" />
            <div>
              <p>Camiseta dsad</p>
              <strong>R$ 79,90</strong>

              <button>Remover</button>
            </div>
          </div>
          
        </div>

        <div>
          <div> 
            <p> Quantidade </p>
            <strong>Valor total </strong>
          </div>
          <button> Finalizar compra </button>
        </div>
      </div>
  )
}