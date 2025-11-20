import  {profissoes} from '@/data/profissoes'
import Profissao from '@/components/Profissao/Profissao'

export default function ProfissoesProps(){

    return(
        <>
        <h2>Lista de profissoes</h2>

        <ul>
            {profissoes.map((profissao, i) => (
                <Profissao
                    key={i}
                    titulo={profissao.titulo}
                    descricao={profissao.descricao}
                />
            ))}
        </ul>

        </>
    )
}