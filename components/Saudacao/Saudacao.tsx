export default function Saudacao(){
    const dia = new Date().getDay()
    const ano = new Date().getFullYear()

    

   return (
        <div className="bg-yellow-200 p-5 rounded-2xl min-h-[70vh] 
                          w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
            <h1>Ola </h1>
            <p> {dia===2 && "é terça"} </p>
            <p>{ano}</p>
            <p>pppppp</p>
        </div>
   )

}