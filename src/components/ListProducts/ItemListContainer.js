import BasicCard from '../Cards/Cards'

const ItemListContainer = () =>{
    
    return (
        <div>
            <div>
                <h2> Estos son mis productos destacados! </h2>
            </div>     
            <div className="ItemListContainer">
                <BasicCard title="Plan 1" duration="1 Mes" description="Plan Nutricional Completo. Incluye seguimiento perzonalizado y videollamadas de control " price={500}/>
                <BasicCard title="Plan 2" duration="2 Mes" description="Plan Nutricional Completo. Incluye seguimiento perzonalizado y videollamadas de control " price={1000}/>
                <BasicCard title="Plan 3" duration="3 Mes" description="Plan Nutricional Completo. Incluye seguimiento perzonalizado y videollamadas de control " price={1400}/>
                <BasicCard title="Recetario 1" duration="1 Mes" description="Recetario Completo. Incluye 30 opciones de preparaciones con recetas y combinaciones posibles" price={200}/>
                <BasicCard title="Recetario 2" duration="2 Mes" description="Recetario Completo. Incluye 60 opciones de preparaciones con recetas y combinaciones posibles" price={400}/>
                <BasicCard title="Plan Integral" duration="3 Mes" description="Plan Nutricional Completo. Incluye seguimiento perzonalizado, videollamadas de control y recetario completo el cual contiene mas de 60 opciones de preparaciones con recetas y combinaciones posibles" price={2000}/>
            </div>
        </div>
    )
}

export default ItemListContainer;