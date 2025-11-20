interface ProfissaoProps{
titulo: string
descricao: string
}
export default function Profissao ({titulo, descricao}: ProfissaoProps){


return(
    <>
        <div className="bg-blue-300 p-2 m-2">
            <h2>{titulo}</h2>
            <p>{descricao}</p>
        </div>
    </>

)

}